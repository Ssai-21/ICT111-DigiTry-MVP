# Requirement Traceability Matrix

| Evidence ID | Problem Pattern | Requirement ID | User Story ID | MVP Feature | Prototype Screen/Module | Final Screenshot | Status |
|---|---|---|---|---|---|---|---|
| E01 | PDF timetable doesn't update for changes; students don't know where to start | FR-01 | US-01 | Homepage | #home | final-homepage.png | Completed |
| E02 | Students need a clear path from "I have a problem" to "it's fixed" | FR-02 | US-02 | Guided navigation | Tab bar / router | final-homepage.png | Completed |
| E03 | No fast way to flag a wrong or outdated class listing | FR-03 | US-03 | Report-a-mismatch form | #report | final-input-form.png | Completed |
| E04 | Digitized PDF data needs somewhere to live | FR-04 | US-04 | Class + Report data model | `BASE_CLASSES`, `localStorage`, data.json | — | Completed |
| E05 | Students scroll a static PDF to find one class | FR-05 | US-05 | Weekly schedule list | #schedule | final-record-list.png | Completed |
| E06 | Finding a specific course or room in a full-week PDF is slow | FR-06 | US-06 | Search by course code/room | #schedule search + day chips | final-record-list.png | Completed |
| E07 | Room, time, and lecturer info scattered/unclear on the PDF | FR-07 | US-07 | Class detail view | #class | final-detail-view.png | Completed |
| E08 | Students can't tell whether a listing is still accurate | FR-08 | US-08 | Live status label (Confirmed/Room Changed/Cancelled) | `#class`, #admin-edit | final-detail-view.png | Completed |
| E09 | Someone has to actually review and fix reported mismatches | FR-09 | US-09 | Admin login, dashboard, edit | `#admin-login`, `#admin-dashboard`, #admin-edit | final-admin-view.png | Completed |
| E10 | Incomplete reports waste the reviewer's time | FR-10 | US-10 | Required-field validation | #report | final-input-form.png | Completed |
| E11 | Students want confirmation their report was actually received | FR-11 | US-11 | "Report Received" message | #report-confirmation | — | Completed |
| E12 | Admin/staff need to see the overall picture, not just one report at a time | FR-12 | US-12 | Dashboard summary cards + Power BI metrics | #admin-dashboard | final-dashboard.png | Completed |
| E13 | A patchwork of inconsistent screens undermines trust in the tool | FR-13 | US-13 | Shared design system | style.css | — | Completed |
| E14 | Most Lab 03 respondents check schedules primarily on their phones | FR-14 | US-14 | Responsive layout | style.css (`@media`) | user-testing-evidence.png | Completed |
| E15 | Reports shouldn't require unnecessary personal data | FR-15 | US-15 | Privacy-minimal report form | `#report`, docs/data-handling-policy.md | — | Completed |
| E16 | Every feature needs to trace back to real evidence, not assumption | FR-16 | US-16 | This matrix + docs/mvp-feature-list.md | docs/ | — | Completed |

**All 16 requirements: Completed.** Evidence sources: docs/problem-notes.md and docs/customer-discovery-summary.md (Lab 03, n=21), docs/user-testing-results.md and data/user-testing-results.csv (Lab 13), docs/analytics-insights.md (Lab 08 Power BI validation), docs/final-improvement-list.md (IMP-01–03, confirmed fixed and merged into `prototype/final-prototype/`).
