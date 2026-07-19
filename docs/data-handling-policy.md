# Data Handling Policy

## Data Collection
The prototype collects two kinds of data:
- **Class schedule data**: course code, class name, room, day/time, lecturer, and status (Confirmed / Room Changed / Cancelled).
- **Mismatch reports**: course code, room, issue type, reporter role (Student or Lecturer only — not identity), an optional free-text description, and the resulting status.

No student names, ID numbers, emails, or phone numbers are collected anywhere in the prototype.

## Data Storage
Class schedule data is embedded as sample data (`js/data.js`), standing in for a JSON file/simple database as described in `docs/technical-architecture.md`. Submitted reports and any admin status updates are saved to the browser's localStorage — there is no real backend or database at this MVP stage, so data is local to whichever device/browser is used for the demo.

## Data Access
- **Students/lecturers** (general users) can view the schedule and submit reports. They cannot view other users' submitted reports.
- **Admin/lecturer staff** can view all reports and update any class's status through the admin dashboard.
- **Note:** admin access is currently gated by a simulated login only (no real credential check) — see docs/security-risk-check.md and docs/risk-register.md (R-04) for the documented limitation and required fix before any real deployment.

## Data Minimization
Fields deliberately **not** collected: student name, student ID number, email address, phone number, or any device/location identifier. The reported_by_role field records only a role (Student/Lecturer), never an identity. The Description field on the report form is optional free text — the only place personal information could accidentally be entered — and is flagged in the risk register (R-05) with a planned UI hint reminding testers not to include names or ID numbers there.

## Responsible Data Rule
The prototype must avoid unnecessary sensitive data and use sample/masked data when possible. In practice for SmartTimetable: all class and report data used in testing and demos is fictional sample data (see `data/lab08_validation_results.csv`), no real student records are used, and the one open field that could capture personal text (report Description) is called out for a minimization fix rather than left unaddressed.
