# Feature Implementation Status

> Update this file during Lab 11. Every prototype feature must connect to `system-requirements.md`.

| Req ID | Required Functionality | Screen/Module | Lab 10 Status | Lab 11 Status | Owner | Evidence Screenshot/Commit | Notes/Next Action |
|---|---|---|---|---|---|---|---|
| FR-01 | Homepage or landing screen | Homepage (`#home`) | Completed | Completed | Sai Thi Han Win | screenshots/Image (8).jpg | None |
| FR-02 | Primary user pathway | Tab bar + hash router | Completed | Completed | Sai Thi Han Win | prototype/script.js (router) | None |
| FR-03 | User input/submission | Report form (`#report`) | Completed | Partially Completed | Soe Yu Nwe | screenshots/Image (11).jpg | Added `aria-describedby`/`aria-invalid` for accessibility, but no visual highlight on the input itself when invalid — see FR-10 |
| FR-04 | Data storage/record management | BASE_CLASSES + localStorage + data.json | Completed | Completed | Sai Thi Han Win | `prototype/data.json`, loadSampleReports() | Added a seeded sample-reports dataset (12 records) with a fallback array so the dashboard has realistic data even when opened via file:// |
| FR-05 | View records/list | Schedule list (`#schedule`) | Completed | Completed | Soe Yu Nwe | screenshots/Image (9).jpg | None |
| FR-06 | Search/filter/category | Schedule search + day chips | Completed | Completed | Soe Yu Nwe | renderScheduleList() | Also added status filter chips (All/Pending/In Progress/Resolved/Closed) to the admin Reported Issues table this lab |
| FR-07 | Detail view | Class detail (`#class`) | Completed | Completed | Rigzang Lhmao | screenshots/Image (10).jpg | None |
| FR-08 | Status/progress tracking | Class detail + Admin edit | Completed | Partially Completed | Sai Thi Han Win | updateClassStatus() | Status updates persist and reflect correctly (tested: Cancelled → Confirmed works), but the New Room field order that confused testers in Lab 08 has not been reordered yet |
| FR-09 | Admin/manager function | Admin login/dashboard/edit | Partially Completed | Partially Completed | Sai Thi Han Win | screenshots/Image (12).jpg | Still a simulated pass-through login, no real authentication — unchanged since Lab 09/10 (`docs/risk-register.md` R-04) |
| FR-10 | Validation/error prevention | Report form fields | Partially Completed | Partially Completed | Soe Yu Nwe | setFieldError() in script.js | Tested directly: submitting blank fields correctly blocks submission and shows the error text, but the input itself gets no border/background change — still easy to miss visually, matching the original Lab 08 finding |
| FR-11 | Confirmation/feedback message | Report/Admin confirmation | Completed | Completed | Rigzang Lhmao | `renderReportConfirmation()`, renderAdminConfirmation() | None |
| FR-12 | Dashboard/analytics view | Admin dashboard | Completed | Completed | Seint Myat Wai | screenshots/Image (12).jpg | Significantly expanded this lab — merges seeded historical reports with live submissions into one feed (`unifiedReports()`), adds avg days-open and most-reported-course metrics, and status filter chips |
| FR-13 | UI consistency | All screens (`style.css`) | Completed | Completed | Rigzang Lhmao | prototype/style.css | None |
| FR-14 | Mobile/responsive consideration | All screens | Partially Completed | Partially Completed | Seint Myat Wai | style.css @media rules | Still only verified via browser resize, not tested on an actual phone |
| FR-15 | Privacy/responsible data handling | Report form + docs/ | Completed | Completed | Rigzang Lhmao | docs/data-handling-policy.md | Description field still doesn't have the "(optional)" hint planned in Lab 09 |
| FR-16 | Final prototype traceability | docs/ | Partially Completed | Partially Completed | Rigzang Lhmao | This file, docs/screen-inventory-checklist.md | The Lab 10 version of this file was committed as docs/future-implementation-plan.md instead of docs/feature-implementation-status.md — worth renaming for consistency |
