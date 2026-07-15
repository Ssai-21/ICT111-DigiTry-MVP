/* SmartTimetable — shared app logic
   Requires data.js to be loaded first. Uses localStorage as the "database":
   - st_class_overrides : { [classId]: { status, room, note, updated_at } }
   - st_reports         : [ { report_id, course_code, room, issue_type, description,
                               reported_by_role, date_reported, status, admin_action, priority } ]
   - st_admin_logged_in : "true" | (unset)
   See /docs/data-structure.md for the entity/field definitions this follows. */

const KEYS = {
  overrides: "st_class_overrides",
  reports: "st_reports",
  adminAuth: "st_admin_logged_in"
};

function qs(name) {
  return new URLSearchParams(window.location.search).get(name);
}

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

/* ---------- Classes (base data + localStorage overrides) ---------- */

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

  // Resolve any pending reports tied to the same course code
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

/* ---------- Reports ---------- */

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

/* ---------- Admin auth (simulated — see docs/technical-architecture.md) ---------- */

function setAdminLoggedIn() {
  localStorage.setItem(KEYS.adminAuth, "true");
}

function isAdminLoggedIn() {
  return localStorage.getItem(KEYS.adminAuth) === "true";
}

function requireAdminLogin() {
  if (!isAdminLoggedIn()) {
    window.location.href = "08-admin-login.html";
  }
}

function adminLogout() {
  localStorage.removeItem(KEYS.adminAuth);
  window.location.href = "08-admin-login.html";
}
