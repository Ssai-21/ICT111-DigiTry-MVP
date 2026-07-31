# Final Demo Script

## Demo Duration
Recommended duration: 5-7 minutes.

## 1. Opening
SmartTimetable (Team DigiTry) replaces RSU's static PDF class timetable with a searchable, always-current schedule. The problem: the PDF doesn't update when a class is cancelled, moved, or double-booked, and changes only spread informally through group chats — confirmed directly by Lab 03 discovery, where 21 students, lecturers, and staff reported real lateness and missed classes because of it.

## 2. User Scenario
It's 8:55 AM. A student is walking to Room 304 for their 9:00 class, based on what the PDF timetable said last night. The room's actually moved to Room 208 — the only announcement was buried in a group chat they don't check often. They arrive at a dark, locked room and have no fast way to confirm what's actually true, or to flag that the PDF is wrong for the next student.

## 3. Prototype Walkthrough
(Demo runs from `/prototype/final-prototype/`, the version with all fixes merged.)

| Step | Screen/Feature | What to Demonstrate | Requirement ID |
|---|---|---|---|
| 1 | Homepage (`#home`) | Show title, target user, problem, and main action | FR-01 |
| 2 | Schedule list (`#schedule`) | Search "ICT 111" and filter by day — find a class in seconds | FR-05, FR-06 |
| 3 | Detail view (`#class`) | Open a class, show the live status label | FR-07, FR-08 |
| 4 | Input form (`#report`) | Submit a mismatch report — leave a field blank first to show the now-visible validation highlight | FR-03, FR-10 |
| 5 | Confirmation (`#report-confirmation`) | Show the "Report Received" message | FR-11 |
| 6 | Admin/status (`#admin-login`, `#admin-edit`) | Log in with real credentials, update the class's status, watch it reflect live on the student view | FR-08, FR-09 |
| 7 | Dashboard/metrics (`#admin-dashboard`) | Show total reports, pending count, most-reported class | FR-12 |

## 4. Evidence and Validation
Real testers, not just the team, validated this. Lab 08 testing: 95% task success rate and 4.5/5 average usefulness rating. Lab 13 re-testing — including real-device mobile testing for the first time — confirmed two Critical issues carried since Lab 08 (report form validation visibility, admin field order), which have since been fixed and re-verified in `/prototype/final-prototype/`.

## 5. Closing
SmartTimetable solves a problem every RIC student already has — not knowing whether the schedule in front of them is actually true — with a working prototype, backed by real user testing at every stage, and every known issue found in testing has been fixed and confirmed before this submission. Remaining future work: a real backend/database and a real channel launch beyond the current seeded acquisition data.
