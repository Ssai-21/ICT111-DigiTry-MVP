# SmartTimetable — Interactive Prototype

A plain static website: open `index.html` and click through. No server, build step, or framework required. Follows the platform decision in `/docs/technical-architecture.md`: frontend + JSON-style data + localStorage, no real backend.

## How to run it
Double-click `index.html` (or drag it into a browser tab). Data is embedded in `js/data.js` (not fetched), so it works fully offline — including opened directly from disk (`file://`).

**To deploy it as a real link** (recommended for sharing with your lecturer/TA): turn on **GitHub Pages** for this repo, pointed at this folder — then `index.html` becomes your live homepage automatically, which is why it's named `index.html` and not `01-home.html`.

## Pages
| File | Role |
|---|---|
| `index.html` | Landing screen |
| `schedule.html` | Weekly schedule list — dynamic, with search and day filters |
| `class-detail.html` | Class detail (`?id=...`) — one page handles all three statuses live |
| `report.html` | Report-a-mismatch form — validated, saves to localStorage |
| `report-confirmation.html` | Report confirmation |
| `admin-login.html` | Simulated admin login |
| `admin-dashboard.html` | Admin dashboard — summary cards, reports, and classes, all computed live |
| `admin-edit.html` | Admin status-update form |
| `admin-confirmation.html` | Admin update confirmation |
| `js/data.js` | Sample class data (10 classes) and issue-type options |
| `js/app.js` | Shared logic: localStorage helpers, status merging, formatting, admin auth gate |
| `style.css` | Visual design — unchanged from the Lab 05 mockups |
| `archive/` | The three original static Lab 05 detail mockups (`detail-confirmed.html`, `detail-room-changed.html`, `detail-cancelled.html`), kept for reference. Not linked from the live site — `class-detail.html` replaced them. |

## Resetting the demo data
Reports and status changes are saved to your browser's localStorage, so they persist on reload but won't appear on a different device/browser — the tradeoff documented in `/docs/technical-architecture.md`. To reset, open the browser console on any page and run:
```js
localStorage.removeItem("st_class_overrides");
localStorage.removeItem("st_reports");
localStorage.removeItem("st_admin_logged_in");
```

## Known limitations (by design, for this MVP stage)
- Admin login is a simulated pass-through, not real authentication
- Data does not sync across devices or browsers
- Resolving a class's status marks *all* pending reports for that course as Resolved, not one report individually
