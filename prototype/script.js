/* ============================================================
   SmartTimetable — single-file prototype logic
   Combines: sample data, localStorage helpers, and a small
   hash-based router so the whole prototype runs from one
   index.html + style.css + script.js, with no build step.
   See /docs/technical-architecture.md and /docs/data-structure.md
   for the platform and field decisions this follows.
   ============================================================ */

/* ---------------------------------------------------------
   1. DATA
   --------------------------------------------------------- */

const BASE_CLASSES = [
  { id: "ict105-130", course_code: "ICT 105", class_name: "Fundamental Technology Entrepreneurship",
    section: "130", lecturer: "Dr. Herison", room: "3-216D",
    slots: [{ day: "Monday", time: "09:00–11:45" }], status: "Confirmed", note: "" },
  { id: "irs164-900", course_code: "IRS 164", class_name: "Digital Skills in Everyday Life",
    section: "900", lecturer: "Team Dr. Kritsada", room: "6-A501",
    slots: [{ day: "Monday", time: "12:00–14:45" }], status: "Confirmed", note: "" },
  { id: "ile126-900", course_code: "ILE 126", class_name: "English in TED",
    section: "900", lecturer: "A. Timothy", room: "11-208", old_room: "11-304",
    slots: [{ day: "Monday", time: "15:00–17:45" }], status: "Room Changed",
    note: "Moved from Room 11-304 to Room 11-208 after a student report on 03 Jul 2026." },
  { id: "ict111-130", course_code: "ICT 111", class_name: "Introduction to Information Technology",
    section: "130", lecturer: "Dr. Herison", room: "11-A504",
    slots: [{ day: "Tuesday", time: "09:00–11:45" }, { day: "Thursday", time: "09:00–11:45" }],
    status: "Confirmed", note: "" },
  { id: "ict402-132", course_code: "ICT 402", class_name: "Research Methodology",
    section: "132", lecturer: "Dr. Brillel", room: "6-302B",
    slots: [{ day: "Tuesday", time: "12:00–14:45" }, { day: "Thursday", time: "12:00–14:45" }],
    status: "Confirmed", note: "" },
  { id: "ict401-132", course_code: "ICT 401", class_name: "Seminar in ICT",
    section: "132", lecturer: "Dr. Suttisak", room: "11-304",
    slots: [{ day: "Tuesday", time: "15:00–17:45" }], status: "Cancelled",
    note: "Cancelled by the lecturer for this week. No make-up session scheduled yet." },
  { id: "ict110-130", course_code: "ICT 110", class_name: "Web Systems and Technologies",
    section: "130", lecturer: "Dr. Todsanai", room: "11-A504",
    slots: [{ day: "Wednesday", time: "09:00–11:45" }], status: "Confirmed", note: "" },
  { id: "ict105-131", course_code: "ICT 105", class_name: "Fundamental Technology Entrepreneurship",
    section: "131", lecturer: "Dr. Herison", room: "3-216D",
    slots: [{ day: "Wednesday", time: "12:00–14:45" }], status: "Confirmed", note: "" },
  { id: "ict401-131", course_code: "ICT 401", class_name: "Seminar in ICT",
    section: "131", lecturer: "Dr. Suttisak", room: "11-305",
    slots: [{ day: "Wednesday", time: "15:00–17:45" }], status: "Confirmed", note: "" },
  { id: "ite201-130", course_code: "ITE 201", class_name: "IT Community",
    section: "130", lecturer: "Dr. Herison", room: "11-302",
    slots: [{ day: "Thursday", time: "15:00–17:45" }], status: "Confirmed", note: "" }
];

const ISSUE_TYPES = [
  "Wrong room listed",
  "Wrong time listed",
  "Class was cancelled",
  "Wrong lecturer listed",
  "Other"
];

/* ---------------------------------------------------------
   2. SHARED LOGIC (localStorage helpers, formatting)
   --------------------------------------------------------- */

const KEYS = {
  overrides: "st_class_overrides",
  reports: "st_reports",
  adminAuth: "st_admin_logged_in"
};

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str == null ? "" : String(str);
  return div.innerHTML;
}

function statusClass(status) {
  if (status === "Room Changed") return "status-changed";
  if (status === "Cancelled") return "status-cancelled";
  return "status-confirmed";
}

function formatSlots(cls) {
  const byTime = {};
  cls.slots.forEach(s => {
    byTime[s.time] = byTime[s.time] || [];
    byTime[s.time].push(s.day);
  });
  return Object.entries(byTime)
    .map(([time, days]) => `${days.join(" & ")}, ${time}`)
    .join(" · ");
}

function getOverrides() {
  try { return JSON.parse(localStorage.getItem(KEYS.overrides)) || {}; }
  catch (e) { return {}; }
}

function getClasses() {
  const overrides = getOverrides();
  return BASE_CLASSES.map(base => {
    const o = overrides[base.id];
    if (!o) return { ...base };
    const merged = { ...base, status: o.status, note: o.note || base.note };
    if (o.status === "Room Changed" && o.room && o.room !== base.room) {
      merged.old_room = base.room;
      merged.room = o.room;
    } else if (o.status !== "Room Changed") {
      delete merged.old_room;
      if (o.room) merged.room = o.room;
    }
    merged.updated_at = o.updated_at;
    return merged;
  });
}

function getClassById(id) {
  return getClasses().find(c => c.id === id) || null;
}

function updateClassStatus(id, status, newRoom, note) {
  const overrides = getOverrides();
  overrides[id] = {
    status,
    room: newRoom && newRoom.trim() ? newRoom.trim() : undefined,
    note: note && note.trim() ? note.trim() : "",
    updated_at: new Date().toISOString()
  };
  localStorage.setItem(KEYS.overrides, JSON.stringify(overrides));

  const cls = BASE_CLASSES.find(c => c.id === id);
  if (cls) {
    const reports = getReports().map(r => {
      if (r.course_code === cls.course_code && r.status === "Pending") {
        return { ...r, status: "Resolved", admin_action: "Status updated by admin" };
      }
      return r;
    });
    localStorage.setItem(KEYS.reports, JSON.stringify(reports));
  }
}

function getReports() {
  try { return JSON.parse(localStorage.getItem(KEYS.reports)) || []; }
  catch (e) { return []; }
}

function addReport(report) {
  const reports = getReports();
  const newReport = {
    report_id: "R" + Date.now(),
    date_reported: new Date().toISOString().slice(0, 10),
    status: "Pending",
    admin_action: "Not yet reviewed",
    priority: "Medium",
    ...report
  };
  reports.unshift(newReport);
  localStorage.setItem(KEYS.reports, JSON.stringify(reports));
  return newReport;
}

function setAdminLoggedIn() { localStorage.setItem(KEYS.adminAuth, "true"); }
function isAdminLoggedIn() { return localStorage.getItem(KEYS.adminAuth) === "true"; }
function adminLogout() { localStorage.removeItem(KEYS.adminAuth); location.hash = "admin-login"; }

/* ---------------------------------------------------------
   3. ROUTER
   --------------------------------------------------------- */

function parseHash() {
  const raw = location.hash.slice(1) || "home";
  const [view, queryStr] = raw.split("?");
  return { view, params: new URLSearchParams(queryStr || "") };
}

const TAB_MAP = {
  "home": "home",
  "schedule": "schedule", "class": "schedule",
  "report": "report", "report-confirmation": "report",
  "admin-login": "admin", "admin-dashboard": "admin",
  "admin-edit": "admin", "admin-confirmation": "admin"
};

function updateActiveTab(view) {
  const active = TAB_MAP[view] || "home";
  document.querySelectorAll(".tab-item").forEach(t =>
    t.classList.toggle("active", t.dataset.tab === active));
}

function render() {
  const { view, params } = parseHash();
  updateActiveTab(view);
  const app = document.getElementById("app");

  if ((view === "admin-dashboard" || view === "admin-edit") && !isAdminLoggedIn()) {
    location.hash = "admin-login";
    return;
  }

  switch (view) {
    case "home":
      app.innerHTML = renderHome();
      break;
    case "schedule":
      app.innerHTML = renderScheduleShell();
      bindScheduleEvents();
      break;
    case "class":
      app.innerHTML = renderClassDetail(params.get("id"));
      break;
    case "report":
      app.innerHTML = renderReportShell(params);
      bindReportEvents();
      break;
    case "report-confirmation":
      app.innerHTML = renderReportConfirmation(params);
      break;
    case "admin-login":
      app.innerHTML = renderAdminLogin();
      bindAdminLoginEvents();
      break;
    case "admin-dashboard":
      app.innerHTML = renderAdminDashboard();
      bindAdminDashboardEvents();
      break;
    case "admin-edit":
      app.innerHTML = renderAdminEdit(params.get("id"));
      bindAdminEditEvents(params.get("id"));
      break;
    case "admin-confirmation":
      app.innerHTML = renderAdminConfirmation(params);
      break;
    default:
      app.innerHTML = `<p class="lead">Page not found.</p><a class="btn btn-secondary" href="#home">Back home</a>`;
  }
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);

/* ---------------------------------------------------------
   4. SCREEN: Home
   --------------------------------------------------------- */

function renderHome() {
  return `
    <div class="glass hero-card">
      <p class="eyebrow">RIC Summer / 2026 Prototype</p>
      <h1>One reliable place for your <span class="gradient-text">class schedule.</span></h1>
      <p class="lead">
        SmartTimetable replaces the static PDF timetable with a searchable,
        always-up-to-date schedule for RIC students and lecturers &mdash; so a
        cancelled class or a last-minute room change never catches you by
        surprise again.
      </p>
      <div class="btn-row">
        <a href="#schedule" class="btn btn-primary">View My Schedule</a>
        <a href="#report" class="btn btn-secondary">Report a Schedule Issue</a>
      </div>
      <div class="hero-badges">
        <span class="hero-badge">For students &amp; lecturers</span>
        <span class="hero-badge">Live status labels</span>
        <span class="hero-badge">Works great on mobile</span>
      </div>
    </div>

    <div class="grid-3" style="margin-top: 40px;">
      <div class="card glass">
        <div class="icon">&#128197;</div>
        <h3>Weekly schedule list</h3>
        <p>See every class for the week in one place &mdash; time, room, and
        course &mdash; instead of scrolling a static PDF.</p>
      </div>
      <div class="card glass">
        <div class="icon">&#128269;</div>
        <h3>Search by course or room</h3>
        <p>Type a course code or room number to find exactly what you need,
        instantly.</p>
      </div>
      <div class="card glass">
        <div class="icon">&#9989;</div>
        <h3>Confirmed / Changed / Cancelled</h3>
        <p>Every class shows a clear status label, so you know whether to
        trust the schedule or expect something different.</p>
      </div>
    </div>

    <h2>How it works</h2>
    <div class="grid-3">
      <div class="card glass">
        <h3>1. Open your schedule</h3>
        <p>Tap "Schedule" to see this week's classes grouped by day.</p>
      </div>
      <div class="card glass">
        <h3>2. Check the details</h3>
        <p>Tap any class to confirm the room, time, lecturer, and status
        before you head there.</p>
      </div>
      <div class="card glass">
        <h3>3. Flag a mismatch</h3>
        <p>Noticed something wrong? Submit a quick report so the team can
        correct it for everyone else.</p>
      </div>
    </div>

    <p style="margin-top: 34px; font-size: .85rem; color: var(--ink-500);">
      Are you a lecturer or admin? <a href="#admin-login" style="color: var(--accent-purple); font-weight: 700;">Go to the admin area &rarr;</a>
    </p>
  `;
}

/* ---------------------------------------------------------
   5. SCREEN: Schedule
   --------------------------------------------------------- */

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday"];
let scheduleActiveDay = "all";
let scheduleQuery = "";

function renderScheduleShell() {
  return `
    <p class="breadcrumb">Home / My Schedule</p>
    <p class="eyebrow">Week of 07 &ndash; 10 July 2026</p>
    <h1>My Weekly Schedule</h1>
    <p class="lead">All your classes for the week &mdash; time, room, lecturer,
    and live status. Tap a class for full details.</p>

    <div class="search-box glass">
      <span>&#128269;</span>
      <input id="searchInput" type="text" placeholder="Search by course code, course name, or room (e.g. ICT 111, 11-A504)…">
    </div>
    <p class="search-hint">Live search runs in your browser only &mdash; nothing is sent anywhere.</p>

    <div class="day-nav" id="dayNav">
      <span class="day-chip active" data-day="all">ALL</span>
      <span class="day-chip" data-day="Monday">MON</span>
      <span class="day-chip" data-day="Tuesday">TUE</span>
      <span class="day-chip" data-day="Wednesday">WED</span>
      <span class="day-chip" data-day="Thursday">THU</span>
    </div>

    <style>
      .day-chip.active {
        background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
        color: #fff;
        border-color: transparent;
      }
    </style>

    <div id="scheduleList"></div>
    <p id="emptyState" class="lead" style="display:none;">No classes match your search or filter.</p>
  `;
}

function scheduleClassMatches(cls, q) {
  if (!q) return true;
  const haystack = `${cls.course_code} ${cls.class_name} ${cls.room}`.toLowerCase();
  return haystack.includes(q.toLowerCase());
}

function renderScheduleList() {
  const classes = getClasses();
  const list = document.getElementById("scheduleList");
  if (!list) return;
  list.innerHTML = "";
  let anyShown = false;

  DAYS.forEach(day => {
    if (scheduleActiveDay !== "all" && scheduleActiveDay !== day) return;

    const dayClasses = classes
      .filter(c => c.slots.some(s => s.day === day))
      .filter(c => scheduleClassMatches(c, scheduleQuery))
      .sort((a, b) => {
        const ta = a.slots.find(s => s.day === day).time;
        const tb = b.slots.find(s => s.day === day).time;
        return ta.localeCompare(tb);
      });

    if (dayClasses.length === 0) return;
    anyShown = true;

    const group = document.createElement("div");
    group.className = "day-group";
    group.innerHTML = `<div class="day-heading">${day}</div>`;

    dayClasses.forEach(cls => {
      const time = cls.slots.find(s => s.day === day).time;
      const row = document.createElement("a");
      row.className = "class-row glass";
      row.href = `#class?id=${encodeURIComponent(cls.id)}`;
      row.innerHTML = `
        <div class="class-time">${time}</div>
        <div class="class-main">
          <div class="class-title">${escapeHtml(cls.course_code)} &middot; ${escapeHtml(cls.class_name)}</div>
          <div class="class-sub">Sec. ${escapeHtml(cls.section)} &middot; ${escapeHtml(cls.lecturer)} &middot; Room ${escapeHtml(cls.room)}</div>
        </div>
        <span class="status-badge ${statusClass(cls.status)}">${escapeHtml(cls.status)}</span>
      `;
      group.appendChild(row);
    });

    list.appendChild(group);
  });

  document.getElementById("emptyState").style.display = anyShown ? "none" : "block";
}

function bindScheduleEvents() {
  scheduleQuery = "";
  scheduleActiveDay = "all";
  document.getElementById("searchInput").addEventListener("input", e => {
    scheduleQuery = e.target.value;
    renderScheduleList();
  });
  document.getElementById("dayNav").addEventListener("click", e => {
    const chip = e.target.closest(".day-chip");
    if (!chip) return;
    document.querySelectorAll(".day-chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    scheduleActiveDay = chip.dataset.day;
    renderScheduleList();
  });
  renderScheduleList();
}

/* ---------------------------------------------------------
   6. SCREEN: Class Detail
   --------------------------------------------------------- */

const STATUS_MESSAGE = {
  "Confirmed": "This class is on as scheduled. No changes reported.",
  "Room Changed": "",
  "Cancelled": "No make-up session scheduled yet."
};

function renderClassDetail(id) {
  const cls = id ? getClassById(id) : null;
  if (!cls) {
    return `
      <p class="lead">We couldn't find that class.</p>
      <a href="#schedule" class="btn btn-secondary">Back to Schedule</a>
    `;
  }

  const banner = cls.status === "Room Changed"
    ? (cls.note || `Moved to Room ${escapeHtml(cls.room)}.`)
    : (cls.note || STATUS_MESSAGE[cls.status] || "");

  const roomValue = cls.old_room
    ? `<span class="was">${escapeHtml(cls.old_room)}</span> ${escapeHtml(cls.room)}`
    : escapeHtml(cls.room);

  return `
    <p class="breadcrumb">Home / My Schedule / ${escapeHtml(cls.course_code)}</p>
    <p class="eyebrow">${escapeHtml(formatSlots(cls))}</p>
    <h1>${escapeHtml(cls.class_name)}</h1>
    <p class="lead">${escapeHtml(cls.course_code)} &middot; Section ${escapeHtml(cls.section)}</p>

    <div class="glass status-banner ${statusClass(cls.status)}">
      <span>${escapeHtml(cls.status)}</span>
      <span class="small">${escapeHtml(banner)}</span>
    </div>

    <div class="glass detail-card">
      <div class="detail-grid">
        <div class="detail-field">
          <div class="label">Day &amp; Time</div>
          <div class="value">${escapeHtml(formatSlots(cls))}</div>
        </div>
        <div class="detail-field">
          <div class="label">Room</div>
          <div class="value">${roomValue}</div>
        </div>
        <div class="detail-field">
          <div class="label">Lecturer</div>
          <div class="value">${escapeHtml(cls.lecturer)}</div>
        </div>
        <div class="detail-field">
          <div class="label">Section</div>
          <div class="value">${escapeHtml(cls.section)}</div>
        </div>
      </div>
    </div>

    <div class="btn-row">
      <a class="btn btn-primary" href="#report?course=${encodeURIComponent(cls.course_code)}&room=${encodeURIComponent(cls.room)}">Report an Issue with This Class</a>
      <a class="btn btn-secondary" href="#schedule">Back to Schedule</a>
    </div>
  `;
}

/* ---------------------------------------------------------
   7. SCREEN: Report a Mismatch
   --------------------------------------------------------- */

function renderReportShell(params) {
  const courseCode = params.get("course") || "";
  const roomNumber = params.get("room") || "";
  const options = ISSUE_TYPES.map(t => `<option value="${escapeHtml(t)}">${escapeHtml(t)}</option>`).join("");

  return `
    <p class="breadcrumb">Home / Report an Issue</p>
    <h1>Report a Schedule Mismatch</h1>
    <p class="lead">Spotted a class that's wrong, cancelled, or moved? Let us
    know and the team will correct it for everyone.</p>

    <form id="reportForm" class="glass form-card" novalidate>
      <div class="privacy-note">
        We only ask for class-related details &mdash; no personal information
        is required to submit a report.
      </div>

      <div class="form-group">
        <label>I am a *</label>
        <select id="role" required>
          <option value="Student">Student</option>
          <option value="Lecturer">Lecturer</option>
        </select>
      </div>

      <div class="form-group">
        <label>Course Code *</label>
        <input id="courseCode" type="text" placeholder="e.g. ICT 401" value="${escapeHtml(courseCode)}" required>
        <div class="hint" id="courseCodeError" style="color: var(--red-fg); display:none;">Course code is required.</div>
      </div>

      <div class="form-group">
        <label>Room Number *</label>
        <input id="roomNumber" type="text" placeholder="e.g. 11-304" value="${escapeHtml(roomNumber)}" required>
        <div class="hint" id="roomNumberError" style="color: var(--red-fg); display:none;">Room number is required.</div>
      </div>

      <div class="form-group">
        <label>Issue Type *</label>
        <select id="issueType" required>
          <option value="" selected disabled>Select an issue type…</option>
          ${options}
        </select>
        <div class="hint" id="issueTypeError" style="color: var(--red-fg); display:none;">Please select an issue type.</div>
      </div>

      <div class="form-group">
        <label>Description (optional)</label>
        <textarea id="description" maxlength="300" placeholder="Anything else the admin should know?"></textarea>
        <div class="hint"><span id="charCount">0</span>/300 characters. No need to include your name or student ID.</div>
      </div>

      <button type="submit" class="btn btn-primary" style="width: 100%;">Submit Report</button>
    </form>
  `;
}

function bindReportEvents() {
  const description = document.getElementById("description");
  const charCount = document.getElementById("charCount");
  description.addEventListener("input", () => { charCount.textContent = description.value.length; });

  document.getElementById("reportForm").addEventListener("submit", e => {
    e.preventDefault();

    const courseCode = document.getElementById("courseCode").value.trim();
    const roomNumber = document.getElementById("roomNumber").value.trim();
    const issueType = document.getElementById("issueType").value;

    let valid = true;

    if (courseCode) {
      document.getElementById("courseCodeError").style.display = "none";
    } else {
      document.getElementById("courseCodeError").style.display = "block";
      valid = false;
    }

    if (roomNumber) {
      document.getElementById("roomNumberError").style.display = "none";
    } else {
      document.getElementById("roomNumberError").style.display = "block";
      valid = false;
    }

    if (issueType) {
      document.getElementById("issueTypeError").style.display = "none";
    } else {
      document.getElementById("issueTypeError").style.display = "block";
      valid = false;
    }

    if (!valid) return;

    addReport({
      course_code: courseCode,
      room: roomNumber,
      issue_type: issueType,
      reported_by_role: document.getElementById("role").value,
      description: description.value.trim()
    });

    location.hash = `report-confirmation?course=${encodeURIComponent(courseCode)}`;
  });
}

/* ---------------------------------------------------------
   8. SCREEN: Report Confirmation
   --------------------------------------------------------- */

function renderReportConfirmation(params) {
  const course = params.get("course") || "your class";
  return `
    <div class="glass confirm-wrap">
      <div class="confirm-icon">&#10003;</div>
      <h1>Report Received</h1>
      <p class="lead" style="margin: 0 auto;">
        Thanks &mdash; your report for <strong>${escapeHtml(course)}</strong> has been
        recorded. An admin will review it and update the class status if
        needed. You won't be asked to submit this again.
      </p>
      <div class="btn-row" style="justify-content: center;">
        <a href="#schedule" class="btn btn-primary">Back to My Schedule</a>
        <a href="#home" class="btn btn-secondary">Return Home</a>
      </div>
    </div>
  `;
}

/* ---------------------------------------------------------
   9. SCREEN: Admin Login
   --------------------------------------------------------- */

function renderAdminLogin() {
  return `
    <form id="loginForm" class="glass form-card login-card">
      <p class="eyebrow">Admin &amp; Lecturer Area</p>
      <h1 style="font-size: 1.4rem;">Log In</h1>
      <p class="hint" style="margin-bottom: 18px;">
        Demo mode: this prototype has no real authentication yet &mdash;
        any email and password will log you in and lead straight to the admin dashboard.
      </p>

      <div class="form-group">
        <label>Email</label>
        <input id="email" type="email" value="admin@ric.ac.th">
      </div>

      <div class="form-group">
        <label>Password</label>
        <input id="password" type="password" value="demopass">
      </div>

      <button type="submit" class="btn btn-primary" style="width: 100%;">Log In</button>
    </form>
  `;
}

function bindAdminLoginEvents() {
  document.getElementById("loginForm").addEventListener("submit", e => {
    e.preventDefault();
    setAdminLoggedIn();
    location.hash = "admin-dashboard";
  });
}

/* ---------------------------------------------------------
   10. SCREEN: Admin Dashboard
   --------------------------------------------------------- */

function renderAdminDashboard() {
  return `
    <p class="breadcrumb">Admin / Dashboard</p>
    <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px; flex-wrap:wrap;">
      <div>
        <h1>Admin Dashboard</h1>
        <p class="lead">Overview of reports and classes for the week of 07&ndash;10 July 2026.</p>
      </div>
      <a href="#" id="logoutLink" class="btn btn-secondary btn-sm">Log Out</a>
    </div>

    <div class="summary-grid" id="summaryGrid"></div>

    <h2>Recent Reports</h2>
    <div class="glass table-card">
      <div class="table-scroll">
        <table class="admin-table">
          <thead>
            <tr><th>Course</th><th>Room</th><th>Issue Type</th><th>Status</th><th>Action</th></tr>
          </thead>
          <tbody id="reportsBody"></tbody>
        </table>
      </div>
    </div>

    <h2>Manage Classes</h2>
    <div class="glass table-card">
      <div class="table-scroll">
        <table class="admin-table">
          <thead>
            <tr><th>Course</th><th>Day / Time</th><th>Room</th><th>Status</th><th>Action</th></tr>
          </thead>
          <tbody id="classesBody"></tbody>
        </table>
      </div>
    </div>
  `;
}

function bindAdminDashboardEvents() {
  document.getElementById("logoutLink").addEventListener("click", e => {
    e.preventDefault();
    adminLogout();
  });

  const reports = getReports();
  const classes = getClasses();

  const pendingCount = reports.filter(r => r.status === "Pending").length;
  const courseCounts = {};
  reports.forEach(r => { courseCounts[r.course_code] = (courseCounts[r.course_code] || 0) + 1; });
  let mostReported = "—";
  let mostReportedCount = 0;
  Object.entries(courseCounts).forEach(([course, count]) => {
    if (count > mostReportedCount) { mostReported = course; mostReportedCount = count; }
  });

  document.getElementById("summaryGrid").innerHTML = `
    <div class="glass summary-card">
      <div class="num">${reports.length}</div>
      <div class="lbl">Reports received this week</div>
    </div>
    <div class="glass summary-card">
      <div class="num">${escapeHtml(mostReported)}</div>
      <div class="lbl">Most-reported class${mostReportedCount ? ` (${mostReportedCount} report${mostReportedCount === 1 ? "" : "s"})` : ""}</div>
    </div>
    <div class="glass summary-card">
      <div class="num">${pendingCount}</div>
      <div class="lbl">Reports pending review</div>
    </div>
  `;

  function classIdForCourse(courseCode) {
    const match = classes.find(c => c.course_code === courseCode);
    return match ? match.id : "";
  }

  const reportsBody = document.getElementById("reportsBody");
  if (reports.length === 0) {
    reportsBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color: var(--ink-500);">No reports submitted yet.</td></tr>`;
  } else {
    reportsBody.innerHTML = reports.map(r => `
      <tr>
        <td>${escapeHtml(r.course_code)}</td>
        <td>${escapeHtml(r.room)}</td>
        <td>${escapeHtml(r.issue_type)}</td>
        <td><span class="status-badge ${r.status === "Pending" ? "status-changed" : "status-confirmed"}">${escapeHtml(r.status)}</span></td>
        <td><a class="btn btn-ghost btn-sm" href="#admin-edit?id=${encodeURIComponent(classIdForCourse(r.course_code))}">Edit</a></td>
      </tr>
    `).join("");
  }

  document.getElementById("classesBody").innerHTML = classes.map(c => `
    <tr>
      <td>${escapeHtml(c.course_code)} &middot; ${escapeHtml(c.class_name)}</td>
      <td>${escapeHtml(formatSlots(c))}</td>
      <td>${escapeHtml(c.room)}</td>
      <td><span class="status-badge ${statusClass(c.status)}">${escapeHtml(c.status)}</span></td>
      <td><a class="btn btn-ghost btn-sm" href="#admin-edit?id=${encodeURIComponent(c.id)}">Edit Status</a></td>
    </tr>
  `).join("");
}

/* ---------------------------------------------------------
   11. SCREEN: Admin Edit
   --------------------------------------------------------- */

function renderAdminEdit(id) {
  const cls = id ? getClassById(id) : null;
  if (!cls) {
    return `
      <p class="lead">We couldn't find that class.</p>
      <a href="#admin-dashboard" class="btn btn-secondary">Back to Dashboard</a>
    `;
  }

  return `
    <p class="breadcrumb">Admin / Dashboard / Edit Class</p>
    <h1>Update Class Status</h1>
    <p class="lead">Review the report and update the class record below.</p>

    <form id="editForm" class="glass form-card">
      <div class="form-group">
        <label>Class</label>
        <select disabled>
          <option selected>${escapeHtml(cls.course_code)} &middot; ${escapeHtml(cls.class_name)} (Sec. ${escapeHtml(cls.section)}, ${escapeHtml(formatSlots(cls))})</option>
        </select>
      </div>

      <div class="form-group">
        <fieldset>
          <legend>Status</legend>
          <div class="radio-option">
            <input type="radio" name="status" value="Confirmed" id="statusConfirmed" ${cls.status === "Confirmed" ? "checked" : ""}>
            <label for="statusConfirmed" style="margin:0; font-weight:400;">Confirmed</label>
          </div>
          <div class="radio-option">
            <input type="radio" name="status" value="Room Changed" id="statusChanged" ${cls.status === "Room Changed" ? "checked" : ""}>
            <label for="statusChanged" style="margin:0; font-weight:400;">Room Changed</label>
          </div>
          <div class="radio-option">
            <input type="radio" name="status" value="Cancelled" id="statusCancelled" ${cls.status === "Cancelled" ? "checked" : ""}>
            <label for="statusCancelled" style="margin:0; font-weight:400;">Cancelled</label>
          </div>
        </fieldset>
      </div>

      <div class="form-group">
        <label>New Room (if changed)</label>
        <input id="newRoom" type="text" placeholder="e.g. 11-208" value="${cls.status === "Room Changed" ? escapeHtml(cls.room) : ""}">
      </div>

      <div class="form-group">
        <label>Notes to Students</label>
        <textarea id="notes" placeholder="e.g. Cancelled by lecturer for this week.">${escapeHtml(cls.note || "")}</textarea>
      </div>

      <div class="btn-row" style="margin-top: 0;">
        <button type="submit" class="btn btn-primary" style="flex:1;">Save Update</button>
        <a href="#admin-dashboard" class="btn btn-secondary">Cancel</a>
      </div>
    </form>
  `;
}

function bindAdminEditEvents(id) {
  const form = document.getElementById("editForm");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const cls = getClassById(id);
    const status = document.querySelector('input[name="status"]:checked').value;
    const newRoom = document.getElementById("newRoom").value;
    const notes = document.getElementById("notes").value;
    updateClassStatus(id, status, newRoom, notes);
    location.hash = `admin-confirmation?id=${encodeURIComponent(id)}&course=${encodeURIComponent(cls.course_code)}`;
  });
}

/* ---------------------------------------------------------
   12. SCREEN: Admin Confirmation
   --------------------------------------------------------- */

function renderAdminConfirmation(params) {
  const id = params.get("id") || "";
  return `
    <div class="glass confirm-wrap">
      <div class="confirm-icon">&#10003;</div>
      <h1>Class Updated</h1>
      <p class="lead" style="margin: 0 auto;">
        The status has been saved. Students viewing this class in their
        schedule will now see the updated status and notes.
      </p>
      <div class="btn-row" style="justify-content: center;">
        <a href="#admin-dashboard" class="btn btn-primary">Back to Dashboard</a>
        <a href="${id ? `#class?id=${encodeURIComponent(id)}` : "#schedule"}" class="btn btn-secondary">View Student-Facing Detail</a>
      </div>
    </div>
  `;
}
