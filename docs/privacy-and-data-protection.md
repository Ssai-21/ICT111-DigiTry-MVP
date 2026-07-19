# Privacy and Data Protection

## Data Collection Summary
| Data Field | Why It Is Needed | Personal Data? | Sensitive Data? | Keep / Remove / Replace | Notes |
|---|---|---|---|---|---|
| course_code | Identifies which class a schedule entry or report belongs to | No | No | Keep | Public information, already on the current PDF timetable |
| room | Shows students where a class meets | No | No | Keep | Public information |
| lecturer | Identifies who teaches a class | Yes | No | Keep | Already public on the current PDF timetable; confirm with RIC before wider release |
| status (Confirmed / Room Changed / Cancelled) | Shows the live state of a class | No | No | Keep | Core feature of the prototype |
| reported_by_role | Records whether a report came from a Student or Lecturer | No | No | Keep | Role only, never an identity |
| issue_type | Categorizes the reported problem | No | No | Keep | Fixed dropdown options, no free text |
| description (free text) | Optional extra detail from the reporter | Potentially | Potentially | Replace | Add a hint reminding reporters not to include names or ID numbers |
| admin username / password | Simulated login gate for the admin dashboard | No (shared demo account) | Yes | Replace | Demo credentials only; replace with real authentication before production |
| localStorage report/status data | Lets the prototype demo persistently on one device | No | No | Keep | Device-local only, does not sync or leave the browser |

## Privacy Rule for Prototype
SmartTimetable collects only class-related data (course, room, time, lecturer, status) and report data needed to flag and fix schedule mismatches (course, room, issue type, optional description, and the reporter's role). No student names, ID numbers, or contact details are collected anywhere. Students and lecturers can view the schedule and submit reports; only admin/lecturer staff can view and act on submitted reports through the dashboard. The prototype avoids unnecessary personal or sensitive information by design — the one field that could accidentally capture something personal (the optional Description field) is called out below for minimization.

## Data Minimization Decision
- **Removed:** student name, student ID number, email address, phone number — none are needed to identify a class or a reported issue.
- **Changed:** reporter identity was replaced with reported_by_role (Student/Lecturer only), so no individual reporter is identifiable.
- **Changed:** admin/lecturer identity is not tracked per action — the dashboard shows aggregate report and class data only, not "who reviewed what."
- **Flagged for future change:** the report form's Description field remains free text; a UI hint will be added asking testers not to include personal information there.
