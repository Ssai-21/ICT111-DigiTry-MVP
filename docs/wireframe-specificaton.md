# Wireframe Specification — SmartTimetable


| Code | Requirement |
|---|---|
| FR-01 | View a personalized weekly class schedule |
| FR-02 | Navigate between Home, Schedule, Report, and Admin sections |
| FR-03 | Submit a report for a schedule mismatch (wrong room, cancelled class, etc.) |
| FR-05 | Search/browse the schedule by course code or room number |
| FR-06 | Filter the schedule by day of week |
| FR-07 | View full detail and live status (Confirmed / Room Changed / Cancelled) for a class |
| FR-08 | Admin/lecturer updates a class's status and adds a student-facing note |
| FR-09 | Restrict admin/lecturer functions behind a login |
| FR-10 | Show required fields and input guidance on the report form |
| FR-11 | Show a confirmation message after a report or admin update is submitted |
| FR-12 | Dashboard summary of reports and classes for admin/lecturer use |

## Required Wireframe Screens
Built as a clickable HTML/CSS prototype (`/prototype/`) rather than static PNGs, per the "HTML/CSS" option allowed in the wireframe quality rules. Each row below maps to the required screen category.

| Wireframe File | Purpose | Minimum Elements Shown | Related Requirements |
|---|---|---|---|
| `/prototype/01-home.png` | Entry point of the system | Project title/brand ("SmartTimetable"), problem statement in hero copy, two primary action buttons (View My Schedule, Report a Schedule Issue), feature highlights, persistent tab navigation | FR-01, FR-02 |
| `/prototype/06-report-form.png` | User data submission (report a schedule issue) | Required fields marked with `*` (Course Code, Room Number, Issue Type), optional description with character hint, privacy note, submit button | FR-03, FR-10, FR-11 |
| `/prototype/02-schedule.png` | List existing records (weekly class schedule) | Day-grouped list of classes (Mon–Thu), search box for course/room, day-chip filters, status badge per class | FR-05, FR-06, FR-08 |
| `/prototype/03-detail-confirmed.png`, `/prototype/04-detail-room-changed.png`, `/prototype/05-detail-cancelled.png` | Show selected record (class detail, one wireframe per status state) | Full class detail grid (day/time, room, lecturer, section), status banner with explanation, next action buttons (Report an Issue, Back to Schedule) | FR-07, FR-08 |
| `/prototype/09-admin-dashboard.png` | Summary/analytics view | Summary cards (reports this week, most-reported class, pending review), recent reports table, simple counts | FR-12 |
| `/prototype/09-admin-dashboard.png` (management table), `/prototype/10-admin-edit.png` | Admin/manager function | Manage Classes table with Edit action, status-update form (radio buttons for Confirmed/Room Changed/Cancelled), new room field, notes-to-students field, Save/Cancel buttons | FR-09, FR-08 |

## Additional Supporting Screens
Not required by the minimum list above, but included because they complete the end-to-end flow and support the requirements they connect to:

| Wireframe File | Purpose | Related Requirements |
|---|---|---|
| `/prototype/07-report-confirmation.png` | Confirms a student's report was received | FR-11 |
| `/prototype/08-admin-login.png` | Gate before the admin/lecturer area | FR-09 |
| `/prototype/11-admin-confirmation.png` | Confirms an admin status update was saved | FR-11 |
