# Critical Assumptions

## Instruction
Identify assumptions that could cause your final prototype to fail if they are wrong.

| Assumption ID | Category | Assumption | Related Requirement/User Story | Risk Level | Current Evidence | How to Test |
|---|---|---|---|---|---|---|
| A-01 | User problem | Students will actually switch to SmartTimetable instead of continuing to rely on the PDF timetable and class group chats for updates. | FR-01, FR-02 | High | Lab 03 discovery confirmed the PDF problem exists, but no evidence yet on whether students would change their actual habit. | Landing-page style interest check, or track whether pilot testers say they'd stop checking the group chat first. |
| A-02 | Value proposition | A live status label (Confirmed / Room Changed / Cancelled) is enough on its own to make students trust the schedule over asking a friend or lecturer directly. | FR-08 / US tied to status display | Medium | Early pilot feedback rated the status labels as clear (avg 4.67/5, n=3 in `feedback-form.csv`), but this hasn't been tested against actual trust/behavior change. | Ask directly in the feedback form whether the status label alone would stop them from double-checking elsewhere. |
| A-03 | Usability | Users can understand the report form's required fields and the admin dashboard terms without needing instructions. | FR-03, FR-10, FR-12 | Medium | Pilot task ratings were lowest on the report form task (avg ~3/5 on T10 in `experiment-results.xlsx`), with one tester unsure if a field was optional. | Task-based prototype test using `docs/experiment-script.md`, focused on T10 and T13. |
| A-04 | Technical feasibility | Client-side storage (a JSON schedule file plus browser localStorage) is enough to demonstrate the full report-to-status-update loop without a real backend. | FR-04, FR-08, FR-09 | High | Flagged as the biggest technical risk in `docs/technical-architecture.md` — data won't sync across devices. | Build the interactive JSON/localStorage version and confirm a status update made by admin correctly displays back on the student side within one browser session. |
| A-05 | Business logic | Admin or lecturer staff are willing to manually review reports and update class status, rather than seeing it as unwanted extra work. | FR-09, FR-12 | Medium | No evidence yet — not tested with an actual RIC admin or lecturer. | Short interview or feedback form with a real lecturer/admin tester about willingness to use the admin dashboard regularly. |
| A-06 | Data handling | Fictional sample data (made-up courses, rooms, and reports) is sufficient to demonstrate the prototype without needing any real student data. | FR-15, NFR-07 | Low | Data privacy note in `docs/data-structure.md` confirms no personal student data is required for the report or class records. | Review the data structure and sample dataset against academic-office expectations before any real pilot rollout. |

## Categories
Use these categories:
- User problem
- Value proposition
- Usability
- Technical feasibility
- Business logic
- Data handling
