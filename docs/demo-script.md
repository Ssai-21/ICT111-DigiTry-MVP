# Demo Script

## Demo Objective
Prove that SmartTimetable actually works end-to-end, live, on the real prototype — not slides — for the exact problem confirmed in Lab 03 discovery: students can't trust the PDF timetable, and there's no fast way to flag or fix a wrong listing. The demo must show a student finding and trusting their schedule, reporting a mismatch, and an admin closing the loop, backed by real Lab 08 validation numbers (95% task success, 4.5/5 usefulness).

## Presenter Roles
| Member | Role in Demo | Part Presented |
| --- | --- | --- |
| Sai Thi Han Win | Technical Lead | Step 2 (Main User Pathway) and technical Q&A at the end |
| Soe Yu Nwe | Product Lead | Step 1 (Landing/Homepage) and Step 3 (Input Form) |
| Rigzang Lhmao | Documentation Lead | Step 4 (Record List) and Step 5 (Detail View) |
| Seint Myat Wai | Validation Lead | Step 6 (Status/Admin), Step 7 (Dashboard), and the Closing |

## Demo Flow
| Step | Screen / Feature | What Presenter Says | Requirement ID | Expected User Value |
| --- | --- | --- | --- | --- |
| 1 | Landing/Homepage (`/landing-page/index.html`) | "RIC students told us the PDF timetable is already wrong by the time they check it. We built SmartTimetable to fix that." | FR-01 | Sets the problem and target user before touching the app |
| 2 | Main User Pathway (tab bar, `#schedule`) | "One tap from anywhere gets you to your live schedule — no separate app, no login needed to just look." | FR-02 | Shows how little friction there is to get to the value |
| 3 | Input Form (`#report`) | "Say a room's wrong — I tap Report an Issue, pick the course, the type of issue, and submit. No name, no student ID." | FR-03, FR-10, FR-11 | Reporting a mismatch takes seconds, and privacy is respected |
| 4 | Record List (`#schedule`, search box) | "Search 'ICT 111' and it filters instantly — same for a room number if you just want to know what's happening in a specific room." | FR-05, FR-06 | Finds any class in seconds instead of scrolling a PDF |
| 5 | Detail View (`#class`) | "Every class has a live status — Confirmed, Room Changed, or Cancelled — so you know before you walk there, not after." | FR-07 | Builds trust in the schedule at a glance |
| 6 | Status/Admin (`#admin-login`, `#admin-edit`) | "On the admin side, staff log in, see the report we just submitted, and update the class status — watch it change back on the student view live." | FR-08, FR-09 | Shows the full loop closes, not just the student half |
| 7 | Dashboard/Metrics (`#admin-dashboard`) | "The dashboard shows total reports, what's still pending, and which class gets reported most — so staff know where to look first." | FR-12 | Turns scattered reports into something staff can actually manage |
| 8 | Closing | "In real testing, 95% of testers completed these exact tasks without help, and rated it 4.5 out of 5 for usefulness. This isn't a mockup — it's already working." | FR-16 | Leaves the audience with evidence, not just a demo |

## Closing Statement
SmartTimetable solves a problem every RIC student already has: not knowing whether the schedule in front of them is actually true. It replaces a static PDF and scattered group-chat announcements with one searchable, always-current source of truth — validated with real testers, not just built and assumed to work. The next step is fixing the two known usability issues from testing (report form validation visibility, admin field order) and expanding real-channel outreach before final submission.
