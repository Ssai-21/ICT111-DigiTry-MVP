# Lab 08 - Customer Validation Summary

## 1. Project Title
Smart Timetable (Team DigiTry)

## 2. Prototype Tested
- Prototype version: v1 — interactive clickable prototype (`/prototype/smarttimetable-prototype/`), built on the frontend + localStorage architecture from docs/technical-architecture.md
- Prototype link or screenshot location: /prototype/smarttimetable-prototype/index.html
- Main task tested: Finding the weekly schedule and a class's live status, submitting a mismatch report (students); logging in, reviewing the dashboard, and updating a class's status (admin/staff)
- Related requirements from `system-requirements.md`: FR-03, FR-06, FR-07, FR-08, FR-09, FR-10, FR-11, FR-12

## 3. Test Users
| Test User ID | User Role | Why this user is relevant |
|---|---|---|
| S01–S05 | Student | Main target users — the ones who check schedules and report mismatches most often |
| A01–A02 | Admin / Staff | Needed to test the admin-only tasks (status updates, dashboard review) that students never see |

## 4. Validation Method
- Testing method: Moderated, task-based usability testing using `docs/experiment-script.md`, with a think-aloud protocol on the actual interactive prototype (not the static wireframes)
- Date/time: July 20–24, 2026
- Location or platform: Mix of device types per tester (Mobile, Laptop, and Desktop), recorded per session
- Number of testers: 7 (5 Students, 2 Admin/Staff)
- Data collected: Task completion, completion time, ease-of-use and usefulness scores, confusion points, interest level, "would use again," and free-text comments — logged in data/lab08_validation_results.csv (20 total task attempts across the 7 testers) and visualized in the Power BI dashboard

## 5. Summary of Results
| Metric | Result | Interpretation |
|---:|---:|---|
| Total test attempts | 20 (7 unique testers) | Each tester ran multiple tasks, not one test per person — see Section 3 |
| Task success rate | 95% (19/20) | Well above the 70% target set in docs/success-metrics.md |
| Average ease of use | 4.1 / 5 | Meets the 4/5 usability target |
| Average usefulness / feedback score | 4.5 / 5 | Comfortably above the 4/5 target |
| Would use again | 95% (19/20 said yes) | Strong signal of real interest, not just politeness |
| Most common confusion point | Report form required fields | 2 of 20 attempts flagged this; a 3rd flagged the admin edit form's field order |

## 6. Key User Comments
- "Much faster than checking the PDF and group chat." — on the schedule search
- "Once I saw the red error text it made sense, just missed it the first time." — on the report form's required-field validation
- "Needs a clearer optional/required hint on the Description field." — repeated concern about the report form
- "Dashboard numbers make it easy to see what needs attention first." — on the admin dashboard summary cards
- "Would actually use this over checking a shared chat for reported issues." — admin tester on the Recent Reports table
- "Useful overall, but the field order needs a clearer hint." — admin tester on the status-update form

## 7. Affected Requirements
| Requirement ID | Evidence Found | Required Prototype Improvement |
|---|---|---|
| FR-10 | 1 of 5 report submissions failed because the tester missed the required-field error; a separate tester was unsure if Description was optional | Make required-field markers and the inline error state more visually prominent |
| FR-09 | Admin tester noted uncertainty about entering the new room before vs. after selecting "Room Changed," across two separate edit sessions | Reorder or auto-reveal the New Room field only when Room Changed is selected |

## 8. Conclusion
The current MVP direction is **validated**, with **minor revisions** needed before implementation continues. All five success metrics from docs/success-metrics.md were met — including task success rate (95% vs. 70% target) and usability (4.1/5 vs. 4/5 target) — but form completion accuracy landed right at its 80% target with no safety margin, and the same two friction points (report form validation clarity, admin field order) surfaced independently across different testers. Both are small, low-risk UI fixes rather than a sign the core concept or workflow is wrong.
