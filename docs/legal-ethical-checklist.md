# Legal and Ethical Checklist

## Project Title
Smart Timetable (Team DigiTry)

## Ethical Review
| Check Item | Yes/No | Evidence / Notes | Mitigation Action | Owner | GitHub Issue/Commit |
|---|---|---|---|---|---|
| Users are informed about the purpose of the prototype. | Yes | Homepage states the problem and purpose; docs/user-consent-statement.md explains the purpose to testers before any session. | None needed. | Soe Yu Nwe | docs/user-consent-statement.md |
| The prototype avoids misleading claims. | Yes | Admin login screen explicitly states "Demo mode: this prototype has no real authentication yet," instead of implying real security. | Keep the demo-mode disclaimer visible in any future iteration. | Sai Thi Han Win | prototype/smarttimetable-prototype/admin-login.html |
| The prototype does not collect unnecessary sensitive data. | Yes, with one open item | Report form only asks for course/room/issue type/role — no name or ID required (`docs/data-structure.md`). | Add an "(optional)" hint and a reminder not to include personal info in the free-text Description field. | Rigzang Lhamo | docs/risk-register.md (R-01) |
| Users can understand what happens after submission. | Yes | Report confirmation screen states "Report Received... an admin will review it." | None needed. | Soe Yu Nwe | prototype/smarttimetable-prototype/report-confirmation.html |
| Admin or manager actions are clearly separated from user actions. | Partially | Admin screens are visually and structurally separate (own tab, own dashboard), but there is currently no real authentication boundary — any user can reach the admin URLs directly. | Documented as an accepted MVP-stage limitation; real authentication required before any deployment beyond the class demo. | Sai Thi Han Win | docs/risk-register.md (R-04), docs/security-risk-check.md |
| The prototype avoids unfair or harmful treatment of users. | Yes | No feature singles out, penalizes, or ranks any user or group; report data is used only to correct schedule information. | None needed. | Team | — |

## Summary Decision
- Safe to continue: **With revision**
- Required revision before implementation: Add real authentication/access control to the admin function before any deployment beyond the classroom demo (see docs/risk-register.md R-04), and add the Description-field privacy hint on the report form (R-01).
