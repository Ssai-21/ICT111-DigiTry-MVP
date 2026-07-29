# User Testing Plan

## 1. Testing Objective
Confirm whether the two known usability issues from Lab 08/11 testing (report form validation visibility, admin edit field order) are still real problems for fresh testers who haven't seen the prototype before, and — for the first time — test mobile usability on an actual phone instead of just a resized browser window.

## 2. Test User Profile
| User Type | Number of Testers | Why This User Type Matters |
| --- | --- | --- |
| Target user (Student) | 5 | Main audience; confirms the core loop (search, check status, report) still works for people seeing it fresh |
| Admin/manager role | 2 | Needed to test the login, dashboard, and status-update flow that students never see, including the still-open field-order issue |

## 3. Testing Tasks
| Task ID | User Task | Related Requirement | Success Criteria | Observation Focus |
| --- | --- | --- | --- | --- |
| T01 | Open the homepage and explain what the system is for. | FR-01 | User can explain purpose correctly. | Confusion about value message. |
| T02 | Submit a new record/request/report. | FR-03, FR-10, FR-11 | User completes form without major help. | Field clarity and validation. |
| T03 | Search/filter records. | FR-05, FR-06 | User finds relevant record. | Search/filter usability. |
| T04 | View record detail and status. | FR-07, FR-08 | User understands status. | Detail clarity and status label. |
| T05 | Review dashboard or summary. | FR-12 | User understands main metric. | Metric usefulness. |
| T06 | Submit the report form with a required field left blank. | FR-10 | User notices the error without being told where to look. | Whether the error is visually noticeable, not just present. |
| T07 (admin only) | Update a class's status to "Room Changed" and enter a new room. | FR-08, FR-09 | User enters the new room in the correct field without hesitating. | Whether the New Room field's position causes confusion. |

## 4. Testing Procedure
1. Introduce the test purpose — explain this is a class prototype being tested for a course, not a real RIC system yet.
2. Ask the tester to complete each task from `docs/experiment-script.md`-style think-aloud, using their own device where possible (at least 2 testers on an actual phone, to close the mobile-testing gap from Lab 11).
3. Do not guide unless the user is stuck for more than ~30 seconds.
4. Record completion, comments, and problems in `docs/user-testing-results.md`.
5. Ask final feedback questions: what they liked, what confused them, and whether they'd actually use it.

## 5. Ethical Reminder
Do not collect unnecessary personal data — testers are identified only by role and an anonymous ID (e.g. S01, A01), never by name or student ID, matching `docs/user-consent-statement.md`. Explain that feedback is for class learning and prototype improvement only, and that participation is voluntary.
