# SmartTimetable — Interactive Prototype

This folder contains the clickable prototype built on top of the Lab 05 wireframes, following the platform decision in `/docs/technical-architecture.md`: **frontend + JSON + localStorage**, no real backend.

## How to run it
No server or build step needed — just open `01-home.html` directly in a browser (double-click it, or drag it into a browser tab). All data is embedded in `js/data.js` (not loaded via `fetch`), so it works fully offline, including from a `file://` path.

## What's actually interactive
- **Schedule list** (`02-schedule.html`) — renders classes from data, live search (course code / name / room), and day filters
- **Class detail** (`class-detail.html?id=...`) — one dynamic page that shows the correct status banner (Confirmed / Room Changed / Cancelled) for any class, pulling live status from localStorage overrides if an admin has updated it
- **Report a mismatch** (`06-report-form.html`) — required-field validation, prefills course/room if you arrived from a class detail page, saves the report to localStorage
- **Admin login** (`08-admin-login.html`) — simulated: any input logs you in, matching the "demo mode" note already on that screen
- **Admin dashboard** (`09-admin-dashboard.html`) — summary cards, recent reports, and the class list are all computed live from localStorage/data, not hardcoded
- **Admin edit** (`10-admin-edit.html`) — updates a class's status, room, and note; also marks matching pending reports as Resolved

## Files
| File | Role |
|---|---|
| `01-home.html` | Landing screen |
| `02-schedule.html` | Weekly schedule list (dynamic) |
| `class-detail.html` | Dynamic class detail (replaces needing a separate file per status) |
| `03-detail-confirmed.html`, `04-detail-room-changed.html`, `05-detail-cancelled.html` | Original static Lab 05 mockups — kept unchanged for reference, no longer linked into the live flow |
| `06-report-form.html` | Report-a-mismatch form (validated, saves to localStorage) |
| `07-report-confirmation.html` | Report confirmation |
| `08-admin-login.html` | Simulated admin login |
| `09-admin-dashboard.html` | Admin dashboard (dynamic) |
| `10-admin-edit.html` | Admin status-update form (dynamic) |
| `11-admin-confirmation.html` | Admin update confirmation |
| `js/data.js` | Sample class data (10 classes) and issue-type options |
| `js/app.js` | Shared logic: localStorage helpers, status merging, formatting, admin auth gate |
| `style.css` | Unchanged from the Lab 05 mockups |

## Resetting the demo data
Since reports and status changes are saved to your browser's localStorage, they'll persist across page reloads on the same device but won't appear on a different device/browser — this is the tradeoff documented in `/docs/technical-architecture.md`. To reset everything back to the original sample data, open the browser console on any page and run:
```js
localStorage.removeItem("st_class_overrides");
localStorage.removeItem("st_reports");
localStorage.removeItem("st_admin_logged_in");
```

## Known limitations (by design, for this MVP stage)
- Admin login is a simulated pass-through, not real authentication
- Data does not sync across devices or browsers
- Editing which specific report was resolved isn't tracked individually — resolving a class's status marks *all* pending reports for that course as Resolved
