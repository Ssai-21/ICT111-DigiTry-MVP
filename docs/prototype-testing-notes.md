# Prototype Testing Notes

## Test Environment
- Prototype link or folder: /prototype/index.html (single-page prototype)
- Browser/device used: Chrome (desktop) — automated headless test pass; mobile only checked via browser window resize, not a real device
- Tester role: Team self-testing (Lab 11 internal QA pass, ahead of the next external validation round)
- Test date: August 5, 2026

## Main Test Cases

| Test ID | User Flow / Feature | Steps to Test | Expected Result | Actual Result | Status | Issue Found | Fix / Next Action |
|---|---|---|---|---|---|---|---|
| T-01 | Open homepage | Open prototype homepage | Homepage shows title, target user, problem, and main action | Homepage renders with hero heading, problem statement, and "View My Schedule" / "Report a Schedule Issue" buttons | Pass | None | — |
| T-02 | Submit record | Fill form and submit | Record is saved or simulated and confirmation appears | Report saved to `localStorage`, redirected to #report-confirmation with the course name shown | Pass | None | — |
| T-03 | View record list | Open list page/section | Submitted or sample records are visible | Schedule list renders 12 class rows grouped by day, pulling from BASE_CLASSES | Pass | None | — |
| T-04 | Search/filter | Use keyword/category/status filter | Relevant records are shown | Searching "ICT 111" correctly narrowed the list to only ICT 111 class rows | Pass | None | — |
| T-05 | Detail view | Select one record | Record details are shown clearly | Class detail view showed course name, day/time, room, lecturer, and status label correctly | Pass | None | — |
| T-06 | Status update | Change record status in admin view | Status changes and dashboard updates | Changed ICT 401 from Cancelled to Confirmed via admin edit; confirmed the student-facing detail view immediately reflected "Confirmed" | Pass | None | — |
| T-07 | Dashboard metrics | Open dashboard | Metrics are visible and match data | Summary cards showed 13 total reports, 7 open, 1.2 avg days open, ICT 111 as most-reported course (3) — matched the underlying data exactly | Pass | None | — |

**Additional check (not in the base template, added this lab):** Submitted the report form with every field left blank. Submission was correctly blocked and the "Course code is required" error text appeared with aria-invalid="true" set on the field — but the input box itself got no border or background change, so a sighted user could still miss it at a glance. This reproduces the exact usability issue found in Lab 08 testing.

## Summary of Issues
- **FR-10 (validation visibility):** Confirmed still open. The report form's required-field errors work correctly and are now more accessible (ARIA attributes added), but there's still no visual highlight on the input itself — only small text below it. This is the same issue flagged in Lab 08's pilot testing (form completion accuracy landed exactly at the 80% target with no margin).
- **FR-08 (admin edit field order):** Confirmed still open. The "New Room" field still appears in the same position regardless of which status is selected, which is what confused two admin testers in Lab 08.
- **FR-09 (admin authentication):** Confirmed still simulated — logging in with any input works, matching the documented demo-mode limitation (`docs/risk-register.md` R-04).
- No new bugs were found — all 7 main test cases passed, including a full login → dashboard → edit → status-change → detail-view round trip.

## Improvements Completed During Lab 11
- Seeded the admin dashboard with 12 realistic historical reports (`prototype/data.json`, loaded via `loadSampleReports()`), with an inline fallback array so the dashboard still works when opened directly from disk (`file://`), where fetch() of a local JSON file is blocked
- Merged seeded and live reports into a single feed (`unifiedReports()`) so the dashboard reads as one consistent list instead of two separate sources
- Added status filter chips (All / Pending / In Progress / Resolved / Closed) to the admin Reported Issues table
- Added average days-open and most-reported-course metrics to the dashboard summary cards
- Added `aria-invalid`, `aria-describedby`, and role="alert" to the report form's validation for screen-reader accessibility
- Added 5 real screenshots to /screenshots/ (homepage, schedule list, class detail, report form, admin dashboard) — though currently named generically (`Image (8).jpg` through `Image (12).jpg`) rather than matching the expected filenames in the Lab 10 template (`homepage.png`, `input-form.png`, etc.); worth renaming for clarity
