# Final Prototype Report

## 1. Project Title
SmartTimetable (Team DigiTry)

## 2. Group Members and Roles
| Name | Role | Main Contribution |
|---|---|---|
| Sai Thi Han Win | Technical Lead | Built the interactive prototype (data layer, router, admin dashboard logic), diagrams, and the final round of usability fixes |
| Soe Yu Nwe | Product Lead | Defined the product concept, feature-requirement mapping, report form design, and go-to-market messaging |
| Rigzang Lhmao | Documentation Lead | Maintained documentation, wireframe specification, README updates, and screenshot evidence throughout |
| Seint Myat Wai | Validation Lead | Ran customer discovery, MVP experiments, user testing rounds, and startup metrics |

## 3. Problem Background
Selected in Lab 02 through NUF (New, Useful, Feasible) scoring against five other ideas, and validated in Lab 03 with a 21-response survey of RSU students, lecturers, and staff. The core problem: the static PDF class timetable doesn't update when a class is cancelled, moved, or double-booked, and changes only spread informally through group chats — if at all. This causes lateness, missed classes, and lost teaching time. 76% of respondents rated a real-time digital alternative 7/10 or higher in potential value.

## 4. Target Users
**Primary:** RIC students, who check their schedule most often and are most affected by outdated information. **Secondary:** Lecturers, who need one channel to publish a change instead of repeating themselves across group chats. **Tertiary:** Admin/staff, who review reports and keep the schedule accurate.

## 5. Evidence Summary
- **Lab 03 customer discovery:** 21 survey responses — confirmed the problem is real and felt, and that severity varies by individual, directly shaping Must-Have vs. Could-Have features.
- **Lab 08 MVP validation:** 7 testers — 95% task success rate, 4.5/5 average usefulness, 95% said they'd use it again.
- **Lab 13 final user testing:** Re-tested plus real-device mobile testing for the first time — confirmed and then fixed the two Critical issues carried since Lab 08.

## 6. Final Prototype Overview
A single-page web app (`/prototype/final-prototype/index.html`, `style.css`, `script.js`, `data.json`) using hash-based routing, no framework, no build step. Students and lecturers view a live weekly schedule, search by course or room, check any class's status, and report a mismatch with no personal information required. Admin/staff log in with real credential validation, review reports on a dashboard, and update a class's status — reflected back on the student view immediately. A companion landing page and Power BI startup metrics dashboard support the go-to-market side.

## 7. Requirement Traceability Summary
Full detail in `docs/requirement-traceability-matrix.md`. **All 16 requirements are Completed** as of this final submission — FR-08, FR-09, and FR-10 were Partial through Lab 13, but the prepared fixes are now confirmed merged into `/prototype/final-prototype/`.

| Requirement ID | Implemented Feature/Screen | User Story ID | Evidence Source | Status |
|---|---|---|---|---|
| FR-01 | Homepage (`#home`) | US-01 | docs/problem-notes.md | Completed |
| FR-08 | Live class status, admin edit | US-08 | docs/final-improvement-list.md (IMP-02, fixed) | Completed |
| FR-09 | Admin login/dashboard/edit | US-09 | docs/final-improvement-list.md (IMP-03, fixed) | Completed |
| FR-10 | Report form validation | US-10 | docs/final-improvement-list.md (IMP-01, fixed) | Completed |
| FR-16 | Full traceability chain | US-16 | This report | Completed |

## 8. Data Handling
Two entities: Class (course, room, day/time, lecturer, status) and Report (course code, issue type, reporter role, optional description, status, priority). No names, student IDs, emails, or phone numbers are collected anywhere. Class data is embedded sample data standing in for a JSON file; reports and admin overrides are saved to browser localStorage — a documented MVP-stage limitation (no cross-device sync), not an oversight. Full detail in docs/data-handling-policy.md and `docs/privacy-and-data-protection.md`.

## 9. Validation and User Testing Results
Testing ran across three rounds (Lab 07 pilot, Lab 08 full validation, Lab 13 final round including real-device mobile testing). All success metrics met or exceeded their docs/success-metrics.md targets by the final round. The two issues that surfaced (report form validation visibility, admin field order) were the same two issues across two separate testing rounds, which is what made them credible enough to prioritize as Critical — both are now fixed and verified. Full detail: `docs/customer-validation-summary.md`, `docs/analytics-insights.md`, `docs/user-testing-results.md`.

## 10. Startup/Product Metrics
Documented in `docs/startup-metrics.md`, with a companion Power BI dashboard (12 DAX measures across Class and Activity data). Live on the prototype's own admin dashboard: Total Reports, Pending Cases, Resolution status breakdown, Most-Reported Course. 4 of 12 defined measures are visualized; the other 8 are computable but not yet on a card.

## 11. Business Value and Venture Direction
SmartTimetable creates value by replacing a broken, low-trust information source (the PDF) with a live, self-correcting one — the report loop means the system gets more accurate the more it's used. Value is delivered through a landing page and go-to-market plan targeting RIC students first via channels they already use, rather than a broad public launch. As a course MVP, value isn't captured financially — it's captured as validated evidence (Lab 08/13 testing) that the concept works.

## 12. Limitations and Future Improvements
- **No real backend:** data doesn't sync across devices/browsers, by deliberate MVP-stage design
- **Admin authentication:** now checks real credentials, but is still client-side only — not production-grade security
- **No real channel launch yet:** acquisition metrics are seeded sample data, not real traffic
- **Dashboard coverage:** 4 of 12 defined DAX measures are visualized; the other 8 are computable but not yet on a card
- **Future direction:** a real database (Firebase/Google Sheet, as scoped in `docs/technical-architecture.md`) would be the next milestone beyond this course's MVP stage
