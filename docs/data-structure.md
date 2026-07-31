# Data Structure

## Project Title
Smart Timetable (Team DigiTry)

## 1. Main Data Entities / Tables

| Entity / Table | Purpose | Example Records |
|---|---|---|
| Class | Stores each scheduled class from the digitized timetable, including its current live status | ICT111 - Building 6 Room 502 - Confirmed |
| Report | Stores a mismatch report submitted by a student or lecturer for a specific class | ST001 - ICT111 - Room Change - Pending |
| Admin | Simulated login used to gate access to the admin dashboard and status-update form | admin / (demo password, prototype only) |

## 2. Field Definition

| Entity | Field Name | Data Type | Required? | Example Value | Validation Rule | Used For Search/Filter? |
|---|---|---|---|---|---|---|
| Class | class_id | Text/ID | Yes | C001 | Unique value | No |
| Class | course_code | Text | Yes | ICT111 | Must match course code format | Yes |
| Class | class_name | Text | Yes | Intro to Information Technology | None | No |
| Class | room | Text | Yes | Building 6 Room 502 | None | Yes |
| Class | day | Text/List | Yes | Monday | Monday–Sunday only | Yes |
| Class | time | Text/Time | Yes | 09:00–10:30 | HH:MM–HH:MM format | No |
| Class | lecturer | Text | Yes | Dr. Herison Surbakti | None | Yes |
| Class | status | Text/List | Yes | Confirmed | Confirmed / Room Changed / Cancelled only | Yes |
| Report | report_id | Text/ID | Yes | ST001 | Unique value | Yes |
| Report | course_code | Text | Yes | ICT111 | Must match an existing Class course_code | Yes |
| Report | issue_type | Text/List | Yes | Room Change | Room Change / Cancellation / Wrong Time / Wrong Lecturer / Other | Yes |
| Report | reported_by_role | Text/List | Yes | Student | Student / Lecturer only | No |
| Report | date_reported | Date | Yes | 2026-07-01 | YYYY-MM-DD format | No |
| Report | status | Text/List | Yes | Pending | Pending / In Progress / Resolved / Closed | Yes |
| Report | admin_action | Text | No | Verified by admin | None | No |
| Report | priority | Text/List | Yes | Medium | Low / Medium / High | Yes |
| Admin | username | Text | Yes | admin | None | No |
| Admin | password | Text | Yes | (hidden) | Not a real hash — demo value only | No |

## 3. Status Values

### Report Status
| Status | Meaning | Who Can Update? |
|---|---|---|
| Pending | Report submitted, not yet reviewed by admin | System (on submit) |
| In Progress | Admin is checking the report (e.g. contacting lecturer, checking CCTV) | Admin |
| Resolved | Issue confirmed and the class record has been corrected | Admin |
| Closed | Report reviewed and no further action needed | Admin |

### Class Status
| Status | Meaning | Who Can Update? |
|---|---|---|
| Confirmed | Class is scheduled and taking place as listed | Admin |
| Room Changed | Class is taking place, but in a different room than originally listed | Admin |
| Cancelled | Class will not take place as scheduled | Admin |

## 4. Sample Records
See `/data/smarttimetable_sample_records.csv` for sample Report entity records. A matching sample file for the Class entity (`/data/smarttimetable_sample_classes.csv`) should be added the same way once the digitized timetable data is finalized.

## 5. Data Privacy Note
No personally identifiable student or lecturer data (names, ID numbers, contact info) is collected or stored in the prototype. The `reported_by_role` field records only a role (Student/Lecturer), not an identity. The Admin entity uses a single demo username/password for prototype login only — it is not a real authentication system and does not represent a real account. All sample data used in `/data/` is fictional and created for demonstration purposes only.
