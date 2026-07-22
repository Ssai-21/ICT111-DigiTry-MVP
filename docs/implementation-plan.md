# Lab 10 - Implementation Plan

## 1. Project Information
- Group name: DigiTry
- Project title: Smart Timetable
- Repository link: https://github.com/Ssai-21/ICT111-DigiTry-MVP
- Selected platform/tools: HTML / CSS / JavaScript (frontend-only), no framework, single-page app with hash-based routing
- Backend status: Simulated backend (sample data embedded in `script.js`, standing in for a JSON file, plus browser localStorage for reports and admin status updates — see `docs/technical-architecture.md`)

## 2. Prototype Scope for Sprint 1
| Feature | Requirement ID | User Story ID | Screen/Module | Sprint 1 Status |
|---|---|---|---|---|
| Homepage / landing screen | FR-01 | US-01 | #home | Working Draft |
| Input/submission form | FR-03 | US-03 | #report | Working Draft |
| Record list | FR-05 | US-05 | #schedule | Working Draft |
| Search/filter | FR-06 | US-06 | #schedule | Working Draft |
| Detail view | FR-07 | US-07 | #class | Working Draft |
| Status tracking | FR-08 | US-08 | #class / #admin-edit | Working Draft |
| Admin function | FR-09 | US-09 | #admin-login / #admin-dashboard / #admin-edit | Needs Fix (simulated login only) |
| Dashboard/summary | FR-12 | US-12 | #admin-dashboard | Working Draft |

## 3. Implementation Approach
- **Frontend:** Single-page app — one index.html shell, one shared style.css (glassmorphism design), and one script.js containing all data, logic, and view rendering. Navigation between views uses hash-based routing (`#schedule`, `#class?id=...`, `#admin-dashboard`, etc.) instead of separate page loads, so the whole prototype runs from exactly `/prototype/index.html`, `/prototype/style.css`, and /prototype/script.js with no build step.
- **Data source/storage:** Sample class schedule data is embedded directly in script.js (standing in for a JSON file, since fetch() of a local JSON file breaks when opened from disk without a server). Submitted reports and admin status/room/note overrides are saved to the browser's localStorage via shared helper functions in the same file.
- **Admin/status handling:** Admin login is currently a simulated pass-through — any input sets a localStorage flag and grants access, matching the demo-mode disclaimer already shown on that screen. The router checks this flag before rendering #admin-dashboard or `#admin-edit`, redirecting to #admin-login if it's missing. The admin edit form updates a class's status through an "override" layer merged with the base sample data every time a view renders, so changes appear instantly on the student-facing side too.
- **Search/filter approach:** Client-side search over course code, class name, and room, combined with day-of-week filter chips — both re-render the schedule list instantly with no page reload or server call.
- **Validation approach:** Required fields (course code, room number, issue type) are checked before submission; if any are empty, an inline error message appears and submission is blocked until fixed.
- **Screenshots/evidence approach:** Each required view is documented with a direct hash-route reference in `docs/feature-implementation-status.md`. Screenshots of each view still need to be captured and added to /screenshots/ before final submission.

## 4. Member Responsibilities
(Draft split proposed below, based on each member's role from docs/team-profile.md — confirm or adjust with the team.)

| Member | Responsibility | Evidence of Contribution |
|---|---|---|
| Sai Thi Han Win (Technical Lead) | Own the FR-09 admin authentication fix and any other JavaScript/router bugs found this sprint | Commit / issue / file |
| Soe Yu Nwe (Product Lead) | Own the FR-03/FR-10 report form UI fixes (required-field visibility) and FR-08 admin edit field-order fix | Commit / issue / file |
| Rigzang Lhmao (Documentation Lead) | Keep docs/feature-implementation-status.md and this plan updated; capture and add screenshots to /screenshots/ | Commit / issue / file |
| Seint Myat Wai (Validation Lead) | Manually test FR-14 on a real phone; re-test the report form fix once implemented | Commit / issue / file |

## 5. Risks or Blockers
- **Admin authentication (FR-09):** No real access control yet — anyone can reach `#admin-dashboard`/`#admin-edit` directly by typing the hash, though the router does redirect unauthenticated visitors to `#admin-login`. Already logged as R-04 in `docs/risk-register.md`; needs a real fix before this can be considered production-ready, though it's an accepted limitation for the current MVP demo.
- **No cross-device data sync:** Since reports/status updates live in `localStorage`, they won't appear on a different browser or device. The team plans to demo from a single shared device to avoid this looking like a bug.
- **Report form validation visibility (FR-10):** Lab 08 testing found form completion accuracy sitting exactly at the 80% target with no safety margin — the required-field error is easy to miss. A visual fix is planned but not yet implemented.
- **Mobile testing gap (FR-14):** Responsive breakpoints exist in style.css and have been checked via browser resize, but not yet tested on an actual phone.
