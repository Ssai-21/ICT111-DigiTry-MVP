# Lab 04 - MVP Feature List

## MoSCoW Prioritization

| Feature ID | Feature Name | Problem Solved | Related User Story | Priority (Must/Should/Could/Won't) | Technical Complexity (1-5) | User Value (1-5) | Evidence Strength (1-5) | Include in Final Prototype? |
|---|---|---|---|---|---:|---:|---:|---|
| F01 | Homepage/landing screen | Students don't immediately understand what the tool does or how it helps | US-01 | Must | 1 | 3 | 4 | Yes |
| F02 | Navigation flow (homepage → list → detail) | Confusing navigation makes the prototype feel disconnected | US-02 | Must | 2 | 3 | 3 | Yes |
| F03 | Class schedule list view | Students need one reliable place to see all classes instead of a static PDF | US-05 | Must | 2 | 5 | 5 | Yes |
| F04 | Class detail view with status label (Confirmed / Room Changed / Cancelled) | No advance notice of changes is the most-cited pain point in Lab 03 evidence | US-07, US-08 | Must | 3 | 5 | 5 | Yes |
| F05 | Report-a-mismatch form with validation | No structured way for students to report when the timetable is wrong; prevents incomplete reports | US-03, US-10 | Must | 2 | 4 | 5 | Yes |
| F06 | Admin update function | Without an admin-side update, status labels can never reflect real changes | US-09 | Must | 2 | 4 | 4 | Yes |
| F07 | Search by course code or room | Hard to find specific information quickly in the current PDF format | US-06 | Should | 2 | 3 | 3 | Yes |
| F08 | Lecturer broadcast tool | Lecturers currently rely on manual LINE messages to inform students of changes | US-17 | Could | 4 | 3 | 2 | Yes |
| F09 | Push notifications for schedule changes | Most-requested feature in Lab 03 evidence for building trust | US-18 (future) | Could | 4 | 5 | 5 | No |

## Must-Have Features
- Feature 1: Homepage and clear navigation flow, so the prototype feels like one complete system
- Feature 2: Class schedule list and detail view, including a clear status label (Confirmed / Room Changed / Cancelled) — this directly replaces the unreliable PDF and addresses the strongest pain point from Lab 03
- Feature 3: Report-a-mismatch form with basic validation, so students can flag outdated info and the team avoids unusable submissions
- Feature 4: Admin function to update a class's status after a report comes in, so the status labels stay accurate

## Should-Have Features
- Feature 1: Search by course code or room, to make finding a specific class faster than scrolling the PDF

## Could-Have / Future Features
- Feature 1: Lecturer broadcast tool, so lecturers can post a change directly instead of relying on LINE
- Feature 2: Push notifications for schedule changes

## Not in MVP
Push notifications are left out of the first prototype because they need extra setup (a notification service) that isn't necessary to prove the core idea works. The lecturer broadcast tool is included as a "Could-Have" since it's simple enough to attempt (a basic post form for lecturers) and was raised by both lecturer respondents, but it stays lower priority than the student-facing features since the Lab 03 sample of lecturers and staff was small. Calendar sync is skipped entirely for now and can be revisited in a later lab once the core schedule and reporting features are working.
