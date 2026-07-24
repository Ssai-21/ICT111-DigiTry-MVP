/* ============================================================
   SmartTimetable — single-file prototype logic
   Combines: sample data, localStorage helpers, and a small
   hash-based router so the whole prototype runs from one
   index.html + style.css + script.js, with no build step.
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

/* Sample issue-report dataset (RIC Summer/2026 records). data.json is the
   source of truth and is fetched on load; this inline copy keeps the admin
   dashboard populated when the prototype is opened via file://, where
   Chrome blocks fetch() of local files with a CORS error. */
const SAMPLE_REPORTS_FALLBACK = [
  { record_id: "ST001", issue_type: "Room Change", course_name: "ICT 111 - Introduction to Information Technology", reported_by_role: "Student", room: "Building 11 Room A504", report_date: "2026-07-01", status: "Resolved", days_open: 1, admin_action: "Room corrected in system", priority: "High" },
  { record_id: "ST002", issue_type: "Cancellation", course_name: "ICT 401 - Seminar in ICT", reported_by_role: "Lecturer", room: "Building 11 Room 304", report_date: "2026-07-01", status: "Closed", days_open: 0, admin_action: "Confirmed and marked cancelled", priority: "High" },
  { record_id: "ST003", issue_type: "Wrong Time", course_name: "ICT 110 - Web Systems and Technologies", reported_by_role: "Student", room: "Building 11 Room A504", report_date: "2026-07-02", status: "In Progress", days_open: 2, admin_action: "Checking with lecturer", priority: "Medium" },
  { record_id: "ST004", issue_type: "Room Change", course_name: "ILE 126 - English in TED", reported_by_role: "Student", room: "Building 11 Room 208", report_date: "2026-07-02", status: "Resolved", days_open: 1, admin_action: "Room updated after report", priority: "High" },
  { record_id: "ST005", issue_type: "Wrong Lecturer", course_name: "ICT 105 - Fundamental Technology Entrepreneurship", reported_by_role: "Student", room: "Building 3 Room 216D", report_date: "2026-07-03", status: "Pending", days_open: 3, admin_action: "Not yet reviewed", priority: "Low" },
  { record_id: "ST006", issue_type: "Cancellation", course_name: "ICT 111 - Introduction to Information Technology", reported_by_role: "Student", room: "Building 11 Room A504", report_date: "2026-07-03", status: "Closed", days_open: 0, admin_action: "Confirmed and marked cancelled", priority: "High" },
  { record_id: "ST007", issue_type: "Other", course_name: "IRS 164 - Digital Skills in Everyday Life", reported_by_role: "Lecturer", room: "Building 6 Room A501", report_date: "2026-07-04", status: "In Progress", days_open: 2, admin_action: "Investigating double booking", priority: "High" },
  { record_id: "ST008", issue_type: "Room Change", course_name: "ICT 105 - Fundamental Technology Entrepreneurship", reported_by_role: "Student", room: "Building 3 Room 216D", report_date: "2026-07-04", status: "Pending", days_open: 1, admin_action: "Duplicate of ST005, merged", priority: "Low" },
  { record_id: "ST009", issue_type: "Wrong Time", course_name: "ICT 402 - Research Methodology", reported_by_role: "Student", room: "Building 6 Room 302B", report_date: "2026-07-05", status: "Resolved", days_open: 1, admin_action: "Time corrected in schedule", priority: "Medium" },
  { record_id: "ST010", issue_type: "Cancellation", course_name: "ICT 401 - Seminar in ICT", reported_by_role: "Student", room: "Building 11 Room 305", report_date: "2026-07-05", status: "Pending", days_open: 2, admin_action: "Waiting for lecturer confirmation", priority: "Medium" },
  { record_id: "ST011", issue_type: "Room Change", course_name: "ITE 201 - IT Community", reported_by_role: "Lecturer", room: "Building 11 Room 302", report_date: "2026-07-06", status: "In Progress", days_open: 1, admin_action: "Reviewing requested room change", priority: "Medium" },
  { record_id: "ST012", issue_type: "Wrong Lecturer", course_name: "ICT 110 - Web Systems and Technologies", reported_by_role: "Student", room: "Building 11 Room A504", report_date: "2026-07-06", status: "Resolved", days_open: 0, admin_action: "Lecturer name corrected", priority: "Low" }
];

let SAMPLE_REPORTS = SAMPLE_REPORTS_FALLBACK;

async function loadSampleReports() {
  try {
    const res = await fetch("data.json");
    if (!res.ok) return;
    const json = await res.json();
    if (Array.isArray(json) && json.length) {
      SAMPLE_REPORTS = json;
      if (parseHash().view === "admin-dashboard") render();
    }
  } catch (e) {
    /* file:// or offline — SAMPLE_REPORTS_FALLBACK above is already in use */
  }
}

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

function splitCourseName(name) {
  const idx = name.indexOf(" - ");
  return idx === -1 ? { code: name, title: "" } : { code: name.slice(0, idx), title: name.slice(idx + 3) };
}

function reportStatusClass(status) {
  if (status === "Resolved" || status === "Closed") return "status-confirmed";
  if (status === "In Progress") return "status-progress";
  return "status-changed"; // Pending
}

function priorityClass(priority) {
  if (priority === "High") return "priority-high";
  if (priority === "Medium") return "priority-medium";
  return "priority-low";
}

function daysSince(dateStr) {
  const then = new Date(dateStr + "T00:00:00");
  const now = new Date();
  return Math.max(0, Math.round((now - then) / 86400000));
}

/* Merges live (student/lecturer-submitted) reports with the seeded sample
   dataset into one shape so the admin dashboard reads as a single feed. */
function unifiedReports() {
  const sample = SAMPLE_REPORTS.map(r => {
    const { code } = splitCourseName(r.course_name);
    return {
      id: r.record_id,
      course: code,
      room: r.room,
      role: r.reported_by_role,
      issueType: r.issue_type,
      status: r.status,
      priority: r.priority,
      daysOpen: r.days_open,
      adminAction: r.admin_action,
      date: r.report_date
    };
  });
  const live = getReports().map(r => ({
    id: r.report_id,
    course: r.course_code,
    room: r.room,
    role: r.reported_by_role,
    issueType: r.issue_type,
    status: r.status,
    priority: r.priority,
    daysOpen: daysSince(r.date_reported),
    adminAction: r.admin_action,
    date: r.date_reported
  }));
  return [...live, ...sample].sort((a, b) => b.date.localeCompare(a.date));
}

function openReportCountForCourse(courseCode) {
  return unifiedReports().filter(r =>
    r.course === courseCode && (r.status === "Pending" || r.status === "In Progress")
  ).length;
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
      app.innerHTML = `<p class="lead">Page not found.</p><a class="btn btn-secondary" href="#home">Back to Home</a>`;
  }
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", () => {
  render();
  loadSampleReports();
});

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
        <div class="icon" aria-hidden="true">&#128197;</div>
        <h3>Weekly schedule list</h3>
        <p>See every class for the week in one place &mdash; time, room, and
        course &mdash; instead of scrolling a static PDF.</p>
      </div>
      <div class="card glass">
        <div class="icon" aria-hidden="true">&#128269;</div>
        <h3>Search by course or room</h3>
        <p>Type a course code or room number to find exactly what you need,
        instantly.</p>
      </div>
      <div class="card glass">
        <div class="icon" aria-hidden="true">&#9989;</div>
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
      Are you a lecturer or admin? <a href="#admin-login" style="color: var(--accent-text); font-weight: 700;">Go to the admin area &rarr;</a>
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
      <span aria-hidden="true">&#128269;</span>
      <input id="searchInput" type="text" aria-label="Search classes by course code, course name, or room" placeholder="Search by course code, course name, or room (e.g. ICT 111, 11-A504)…">
    </div>
    <p class="search-hint">Live search runs in your browser only &mdash; nothing is sent anywhere.</p>

    <div class="day-nav" id="dayNav">
      <span class="day-chip active" data-day="all">ALL</span>
      <span class="day-chip" data-day="Monday">MON</span>
      <span class="day-chip" data-day="Tuesday">TUE</span>
      <span class="day-chip" data-day="Wednesday">WED</span>
      <span class="day-chip" data-day="Thursday">THU</span>
    </div>

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
  let rowIndex = 0;

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
      const openCount = openReportCountForCourse(cls.course_code);
      const row = document.createElement("a");
      row.className = "class-row glass";
      row.href = `#class?id=${encodeURIComponent(cls.id)}`;
      row.style.animationDelay = `${Math.min(rowIndex, 10) * 35}ms`;
      rowIndex++;
      row.innerHTML = `
        <div class="class-time">${time}</div>
        <div class="class-main">
          <div class="class-title">${escapeHtml(cls.course_code)} &middot; ${escapeHtml(cls.class_name)}</div>
          <div class="class-sub">Sec. ${escapeHtml(cls.section)} &middot; ${escapeHtml(cls.lecturer)} &middot; Room ${escapeHtml(cls.room)}</div>
        </div>
        <div class="class-status-col">
          <span class="status-badge ${statusClass(cls.status)}">${escapeHtml(cls.status)}</span>
          ${openCount ? `<span class="report-flag">${openCount} open report${openCount === 1 ? "" : "s"}</span>` : ""}
        </div>
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
        <label for="role">Your Role *</label>
        <select id="role" required>
          <option value="Student">Student</option>
          <option value="Lecturer">Lecturer</option>
        </select>
      </div>

      <div class="form-group">
        <label for="courseCode">Course Code *</label>
        <input id="courseCode" type="text" placeholder="e.g. ICT 401" value="${escapeHtml(courseCode)}" required aria-describedby="courseCodeError">
        <div class="hint" id="courseCodeError" role="alert" style="color: var(--danger-fg); display:none;">Course code is required.</div>
      </div>

      <div class="form-group">
        <label for="roomNumber">Room Number *</label>
        <input id="roomNumber" type="text" placeholder="e.g. 11-304" value="${escapeHtml(roomNumber)}" required aria-describedby="roomNumberError">
        <div class="hint" id="roomNumberError" role="alert" style="color: var(--danger-fg); display:none;">Room number is required.</div>
      </div>

      <div class="form-group">
        <label for="issueType">Issue Type *</label>
        <select id="issueType" required aria-describedby="issueTypeError">
          <option value="" selected disabled>Select an issue type…</option>
          ${options}
        </select>
        <div class="hint" id="issueTypeError" role="alert" style="color: var(--danger-fg); display:none;">Please select an issue type.</div>
      </div>

      <div class="form-group">
        <label for="description">Description (optional)</label>
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

  function setFieldError(inputId, errorId, hasError) {
    document.getElementById(errorId).style.display = hasError ? "block" : "none";
    document.getElementById(inputId).setAttribute("aria-invalid", hasError ? "true" : "false");
  }

  document.getElementById("reportForm").addEventListener("submit", e => {
    e.preventDefault();

    const courseCode = document.getElementById("courseCode").value.trim();
    const roomNumber = document.getElementById("roomNumber").value.trim();
    const issueType = document.getElementById("issueType").value;

    let valid = true;

    setFieldError("courseCode", "courseCodeError", !courseCode);
    if (!courseCode) valid = false;

    setFieldError("roomNumber", "roomNumberError", !roomNumber);
    if (!roomNumber) valid = false;

    setFieldError("issueType", "issueTypeError", !issueType);
    if (!issueType) valid = false;

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
      <div class="confirm-icon" aria-hidden="true">&#10003;</div>
      <h1>Report Received</h1>
      <p class="lead" style="margin: 0 auto;">
        Thanks &mdash; your report for <strong>${escapeHtml(course)}</strong> has been
        recorded. An admin will review it and update the class status if
        needed. You won't be asked to submit this again.
      </p>
      <div class="btn-row" style="justify-content: center;">
        <a href="#schedule" class="btn btn-primary">Back to My Schedule</a>
        <a href="#home" class="btn btn-secondary">Back to Home</a>
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
        <label for="email">Email</label>
        <input id="email" type="email" value="admin@ric.ac.th">
      </div>

      <div class="form-group">
        <label for="password">Password</label>
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
    <div class="dash-head">
      <div>
        <h1>Admin Dashboard</h1>
        <p class="lead">Overview of reports and classes for the week of 07&ndash;10 July 2026.</p>
      </div>
      <a href="#" id="logoutLink" class="btn btn-secondary btn-sm">Log Out</a>
    </div>

    <div class="summary-grid" id="summaryGrid"></div>

    <div class="section-head">
      <h2>Reported Issues</h2>
    </div>
    <div class="chip-row" id="reportFilter">
      <span class="filter-chip active" data-status="all">All</span>
      <span class="filter-chip" data-status="Pending">Pending</span>
      <span class="filter-chip" data-status="In Progress">In Progress</span>
      <span class="filter-chip" data-status="Resolved">Resolved</span>
      <span class="filter-chip" data-status="Closed">Closed</span>
    </div>
    <div class="glass table-card">
      <div class="table-scroll">
        <table class="admin-table">
          <thead>
            <tr><th scope="col">Course</th><th scope="col">Room</th><th scope="col">Reported By</th><th scope="col">Issue Type</th><th scope="col">Priority</th><th scope="col">Days Open</th><th scope="col">Status</th><th scope="col">Action</th></tr>
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
            <tr><th scope="col">Course</th><th scope="col">Day / Time</th><th scope="col">Room</th><th scope="col">Status</th><th scope="col">Action</th></tr>
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

  const classes = getClasses();
  let statusFilter = "all";

  function classIdForCourse(courseCode) {
    const match = classes.find(c => c.course_code === courseCode);
    return match ? match.id : "";
  }

  function renderSummary() {
    const all = unifiedReports();
    const open = all.filter(r => r.status === "Pending" || r.status === "In Progress");
    const avgDays = all.length ? all.reduce((sum, r) => sum + r.daysOpen, 0) / all.length : 0;

    const courseCounts = {};
    all.forEach(r => { courseCounts[r.course] = (courseCounts[r.course] || 0) + 1; });
    let mostReported = "—";
    let mostReportedCount = 0;
    Object.entries(courseCounts).forEach(([course, count]) => {
      if (count > mostReportedCount) { mostReported = course; mostReportedCount = count; }
    });

    document.getElementById("summaryGrid").innerHTML = `
      <div class="glass summary-card">
        <div class="num">${all.length}</div>
        <div class="lbl">Total reports</div>
      </div>
      <div class="glass summary-card">
        <div class="num">${open.length}</div>
        <div class="lbl">Open &middot; needs review</div>
      </div>
      <div class="glass summary-card">
        <div class="num">${avgDays.toFixed(1)}</div>
        <div class="lbl">Avg. days open</div>
      </div>
      <div class="glass summary-card">
        <div class="num">${escapeHtml(mostReported)}</div>
        <div class="lbl">Most-reported course${mostReportedCount ? ` (${mostReportedCount})` : ""}</div>
      </div>
    `;
  }

  function renderReportsTable() {
    const rows = unifiedReports().filter(r => statusFilter === "all" || r.status === statusFilter);
    const reportsBody = document.getElementById("reportsBody");
    if (rows.length === 0) {
      reportsBody.innerHTML = `<tr><td colspan="8" style="text-align:center; color: var(--ink-500);">No reports match this filter.</td></tr>`;
      return;
    }
    reportsBody.innerHTML = rows.map(r => {
      const canReview = (r.status === "Pending" || r.status === "In Progress") && classIdForCourse(r.course);
      return `
      <tr>
        <td>${escapeHtml(r.course)}</td>
        <td>${escapeHtml(r.room)}</td>
        <td>${escapeHtml(r.role)}</td>
        <td>${escapeHtml(r.issueType)}</td>
        <td><span class="priority-tag ${priorityClass(r.priority)}">${escapeHtml(r.priority)}</span></td>
        <td>${r.daysOpen}</td>
        <td><span class="status-badge ${reportStatusClass(r.status)}">${escapeHtml(r.status)}</span></td>
        <td>${canReview
          ? `<a class="btn btn-ghost btn-sm" href="#admin-edit?id=${encodeURIComponent(classIdForCourse(r.course))}">Review</a>`
          : `<span class="hint">&mdash;</span>`}</td>
      </tr>
    `;
    }).join("");
  }

  document.getElementById("reportFilter").addEventListener("click", e => {
    const chip = e.target.closest(".filter-chip");
    if (!chip) return;
    document.querySelectorAll("#reportFilter .filter-chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    statusFilter = chip.dataset.status;
    renderReportsTable();
  });

  renderSummary();
  renderReportsTable();

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
        <label for="classDisplay">Class</label>
        <select id="classDisplay" disabled>
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
        <label for="newRoom">New Room (if changed)</label>
        <input id="newRoom" type="text" placeholder="e.g. 11-208" value="${cls.status === "Room Changed" ? escapeHtml(cls.room) : ""}">
      </div>

      <div class="form-group">
        <label for="notes">Notes to Students</label>
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
      <div class="confirm-icon" aria-hidden="true">&#10003;</div>
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
