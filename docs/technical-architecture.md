# Technical Architecture

## Project Title
Smart Timetable (Team DigiTry)

## 1. Selected Prototype Platform
Frontend + localStorage or JSON

## 2. Architecture Decision
The team has already built the required screens as static HTML/CSS/JS files in `/prototype/wireframe-html/`, and no member has backend or database experience beyond what's covered in this course, so a frontend-only approach keeps the final prototype within the team's actual skill set. A JSON file will hold the digitized class schedule (replacing the original PDF), and the browser's localStorage will hold student reports and admin status updates, so the prototype can feel interactive — search, filter, submit a report, and see a status change reflected — without standing up a real server or database. This matches the MVP scope defined in Lab 04 (Must-Have features only) and is realistic to finish within the remaining lab weeks, while still proving the core idea: that a searchable, status-aware digital schedule solves the PDF timetable problem confirmed in Lab 03.

## 3. Main Components

| Component | Description | Tool / Technology | Related Requirement |
|---|---|---|---|
| User Interface | Homepage, navigation, and shared layout/styling across all screens | HTML5, CSS3 (`style.css`) | FR-01, FR-02 |
| Data Input Form | Report-a-mismatch form with required-field validation | HTML form + JavaScript validation | FR-03, FR-10, FR-11 |
| Data Storage | Digitized class schedule as a JSON file; student reports and admin status updates saved to localStorage | JSON, browser localStorage | FR-05, FR-07, FR-08 |
| Record List | Weekly schedule list rendered from the JSON data, with search by course/room and day filters | JavaScript (DOM rendering, array filter) | FR-05, FR-06 |
| Detail View | Class detail screen showing live status (Confirmed / Room Changed / Cancelled) | JavaScript (reads status from localStorage/JSON) | FR-07, FR-08 |
| Admin Function | Simulated login gate, plus a status-update form that edits a class's status and adds a note | JavaScript (simulated auth check, form writes to localStorage) | FR-09, FR-08 |
| Dashboard / Summary | Summary cards and recent-reports table for admin review | JavaScript (aggregates counts from localStorage) | FR-12 |

## 4. What Will Be Fully Implemented?
- Full navigation between all required screens (Homepage, Schedule List, Class Detail, Report Form, Admin Dashboard, Admin Edit)
- Schedule list rendered dynamically from the JSON class data, with working search by course code/room and day-of-week filters
- Class detail view that reads and displays the current status (Confirmed / Room Changed / Cancelled) for a class
- Report-a-mismatch form with required-field validation and a confirmation message on submit
- Admin login gate and a status-update form that changes a class's status and note, saved to localStorage
- Admin dashboard that reflects real counts (reports submitted, classes by status) from localStorage

## 5. What Will Be Simulated?
- Multi-device/multi-user data sharing — since data lives in localStorage, a report or status change made in one browser will not appear in another; a shared demo dataset will be used instead of a real synced database
- Admin authentication — the login gate checks a simple hardcoded condition rather than a real authentication system
- Duplicate-report detection or conflict resolution when two students report different issues for the same class
- Lecturer broadcast tool and push notifications — both are Could-Have/future features (per Lab 04 MoSCoW) and are out of scope for this prototype

## 6. Final Prototype Risk
The biggest technical risk is that localStorage is browser-specific: a report submitted or a status change made by admin on one device will not be visible from a different device, which could look broken during a live demo if two people try to interact with the prototype from separate laptops at the same time. The team will reduce this risk by running the full demo from a single browser/device, pre-loading a consistent demo dataset in the JSON file before presenting, and clearly stating during the demo that shared, multi-device data sync is simulated for this prototype rather than backed by a real database.
