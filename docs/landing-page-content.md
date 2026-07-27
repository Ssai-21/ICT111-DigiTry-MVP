# Landing Page Content

## Project Title
SmartTimetable (Team DigiTry)

## Target User
Primarily RIC students who check their class schedule daily; secondarily lecturers and admin/staff who need to publish changes and review reports.

## Headline
Stop guessing whether the timetable is still right.

## Subheadline
SmartTimetable replaces the static PDF timetable with a searchable, always-up-to-date class schedule for RIC students and lecturers — so a cancelled class or a last-minute room change never catches you by surprise again.

## Problem Statement
The current PDF timetable doesn't update when a class is moved, cancelled, or rescheduled, and changes only spread informally through group chats — if at all (confirmed in Lab 03 customer discovery). By the time a student checks the PDF, it's often already wrong, and they find out by walking into an empty room. Lab 08 validation testing confirmed this is a real, felt problem: testers consistently rated the live status labels as the most useful part of the prototype.

## Solution Description
SmartTimetable gives every class a live status — Confirmed, Room Changed, or Cancelled — so students know at a glance whether to trust the schedule. Anyone who spots a mismatch can report it in seconds, and admin/staff review and fix it from one dashboard instead of chasing messages across scattered chats.

## Key Features
| Feature | Requirement ID | User Value | Prototype Screen/Module |
| --- | --- | --- | --- |
| Weekly schedule list | FR-05 | See every class for the week in one place instead of scrolling a static PDF | `#schedule` |
| Search by course or room | FR-06 | Find exactly what you need in seconds, instead of scanning a full table | `#schedule` (search box) |
| Live status labels (Confirmed / Room Changed / Cancelled) | FR-07, FR-08 | Know whether to trust the schedule before you walk to class | `#class` (detail view) |
| Report a mismatch | FR-03, FR-10 | Flag a wrong or outdated class listing in seconds, no personal info required | `#report` |
| Admin dashboard | FR-09, FR-12 | Review and resolve reports from one place instead of scattered messages | `#admin-dashboard` |

## Benefits
- **Less wasted time and fewer wrong-room trips** — the status label tells you what to expect before you leave for class
- **One place to check, instead of five group chats** — no more scrolling for the one message where someone mentioned a room change
- **A voice when something's wrong** — reporting a mismatch takes seconds and doesn't require your name or student ID
- **Validated, not just claimed** — Lab 08 testing showed a 95% task success rate and 4.5/5 usefulness rating from real testers, not just the team's own opinion

## Call-to-Action
**Try the Prototype** — walk through the schedule, the report form, and the admin dashboard yourself. It's a working prototype, not a mockup.

Secondary actions available on the landing page:
- See the Problem & Solution (jumps to that section)
- View the project on GitHub (full source and documentation)

## Responsible Data Message
The landing page and prototype do not collect names, student ID numbers, emails, or phone numbers. Reporting a mismatch only asks for class-related details (course code, room, issue type, and an optional description) plus a role (Student or Lecturer) — never an identity. CTA clicks are logged locally in the visitor's own browser (`localStorage`) purely to help the team see which buttons get used during a demo; nothing is sent to a server or shared outside the class project. Full detail in `docs/data-handling-policy.md` and `docs/privacy-and-data-protection.md`.
