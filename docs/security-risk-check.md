# Basic Security Risk Check

| Area | Risk Question | Current Status | Risk Level | Mitigation | Owner |
|---|---|---|---|---|---|
| Form input | Can incomplete or invalid data be submitted? | Required fields (course code, room number, issue type) are validated client-side; submission is blocked with an inline error if any are left empty. | Low | Already implemented in `report.html`; Lab 08 testing found the error state could be more visually prominent — planned fix. | Soe Yu Nwe |
| Admin function | Can normal users access admin actions? | Yes — the admin login is a simulated pass-through with no real credential check, so any user who navigates to the admin URL directly can view and edit class status. | High | Documented as an accepted MVP-stage limitation (`docs/risk-register.md` R-04); real authentication required before production. | Sai Thi Han Win |
| Data display | Is private information visible to everyone? | No personal or sensitive data is displayed — the schedule shows only course, room, lecturer, and status, matching what's already public on the current PDF timetable. | Low | None needed; continue monitoring the free-text Description field (R-01). | Rigzang Lhmao |
| Status update | Can records be edited without control? | Yes — same root cause as the Admin function row: there is no real access control gating who can update a class's status. | High | Same mitigation as Admin function; real authentication required before production. | Sai Thi Han Win |
| Public links | Does a public link expose data that should be private? | The GitHub repository is public; only fictional sample data and demo credentials are present — no real student data is committed. | Low | Confirm before every commit that no real credentials, survey PII, or real student data are ever pushed. | Rigzang Lhmao |
| File upload | If used, can unsafe or unrelated files be uploaded? | Not applicable — the prototype has no file upload feature anywhere. | None | None needed. | N/A |

## Security Decision
**Continue with mitigation.** The admin access-control gap (Admin function and Status update rows) is the one item that needs a real fix before any deployment beyond the classroom demo; everything else is low risk and already handled or planned.
