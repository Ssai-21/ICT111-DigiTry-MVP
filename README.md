#Smart Timetable
# Course Information
Course Code: ICT11
Course Name: Introduction to Information Technology
Instructor: Dr. Herison Surbakti
Project Type: 14-Labs Continuous IT Startup MVP Development
## Team Name
DigiTry
## Team Members and Roles
| Name | Role | Responsibility |
|---|---|---|
| Sai Thi Han Win | Technical Lead | Manage repository and prototype feasibility |
| Soe Yu Nwe | Product Lead | Define problem, target users, and value proposition |
| Rigzang Lhmao | Documentation Lead | Maintains README, weekly logbook, report files, and final submission package |
| Seint Myat Wai | Validation Lead | Manages customer discovery, survey/interview evidence, and metric collection |
## Initial Problem Area
Students and lecturers currently rely on a static PDF timetable that does not update when a class is moved, cancelled, or rescheduled. The PDF is difficult to search on a phone, gives no personalized daily view, and any last-minute changes are only communicated informally through group chats or verbal announcements in class.
## Target Users
University students, lecturers, and academic staff.
## Selected IT Venture Direction
After scoring six possible ideas using the NUF (New, Useful, Feasible) framework in Lab 02, the team selected **SmartTimetable** as the semester project. SmartTimetable converts the original PDF timetable into a searchable, personalized digital schedule. Students and lecturers can view their own classes in a clean weekly or daily layout and search for a room to see what is scheduled there. We selected this idea because it is useful to every student and lecturer who already relies on the timetable, feasible to prototype using the real PDF data the team has access to, and can be built as a web-based display and search system without IoT devices or advanced cybersecurity work.
## Technology Possibility
Possible technologies:
- Web application (HTML/CSS/JS prototype)
- Database for storing digitized timetable data (MySQL or Firebase)
- Search and filter features for viewing classes by student, lecturer, or room
- Admin view for updating schedule entries
- AI-assisted conflict detection (optional future enhancement)
## Repository Structure
- docs: reports, profiles, idea logs, and weekly logbooks
- prototype: source code or clickable prototype files
- data: survey responses, validation data, and metrics
- finance: financial assumptions and model
- diagrams: user flow and technical architecture diagrams
- wireframes: UI/UX wireframe screens for each required screen
- screenshots: evidence of prototype and repository progress
- pitch: pitch deck and final demo files
## Weekly Progress Log
| Lab | Main Activity | Output | Status |
|---|---|---|---|
| Lab 1 | Lab setup and idea log | Repository, team profile, initial idea log | Completed |
| Lab 2 | IT opportunity scanning | Opportunity scan, NUF scoring, selected opportunity file | Completed |
| Lab 3 | Customer problem discovery | Survey questions, 15 raw responses, assumption-evidence table, problem notes | Completed |
| Lab 4 | Persona and user stories | User persona, user stories, MVP feature list, system requirements | Completed |
| Lab 5 | Product concept and UI/UX wireframe | Product concept, feature-requirement mapping, wireframe specification, wireframe usability checklist, screen inventory checklist, wireframes, user flow diagram | Completed |
| Lab 6 | Technical architecture and data structure | Business model canvas, feature-value mapping, technical architecture, data structure, customer segments/value table, sample dataset | Completed |
| Lab 7 | MVP experiment design | Critical assumptions, MVP experiment plan, experiment script, success metrics, feedback form, interactive clickable prototype | Completed |
| Lab 8 | Customer validation and analytics | Validation dataset, analytics sheet, customer validation summary, analytics insights, MVP decision, test user notes | Completed |
 
## Lab 05: Product Concept and UI/UX Wireframe
 
### Product Concept
SmartTimetable is a web-based tool for RSU students and lecturers who currently rely on a static PDF timetable that does not update for cancellations, room changes, or reschedules. It converts the PDF into a searchable, personalized digital schedule, letting students view their own classes, check a class's current status, and flag a mismatch so it can be corrected — solving the trust and accuracy problem confirmed during customer discovery in Lab 03.
 
### Requirement-Driven Screens
| Screen | Related Requirement IDs | Mockup File |
|---|---|---|
| Homepage / Landing | FR-01, FR-02 | /prototype/wireframe-html/01-home.html |
| Report a Mismatch (Submission Form) | FR-03, FR-10, FR-11 | /prototype/wireframe-html/06-report-form.html |
| Schedule List | FR-05, FR-06, FR-08 | /prototype/wireframe-html/02-schedule.html |
| Class Detail View | FR-07, FR-08 | /prototype/wireframe-html/03-detail-confirmed.html, /prototype/wireframe-html/04-detail-room-changed.html, /prototype/wireframe-html/05-detail-cancelled.html |
| Admin Dashboard / Report Summary | FR-12 | /prototype/wireframe-html/09-admin-dashboard.html |
| Admin View (Update Class Status) | FR-09, FR-08 | /prototype/wireframe-html/09-admin-dashboard.html, /prototype/wireframe-html/10-admin-edit.html |
 
#### Additional Supporting Screens
Not required by the minimum list above, but included to complete the end-to-end flow:
 
| Screen | Related Requirement IDs | Mockup File |
|---|---|---|
| Report Confirmation | FR-11 | /prototype/wireframe-html/07-report-confirmation.html |
| Admin Login | FR-09 | /prototype/wireframe-html/08-admin-login.html |
| Admin Confirmation | FR-11 | /prototype/wireframe-html/11-admin-confirmation.html |
 
### User Flow
See /diagrams/user-flow.png for the full diagram. The primary path is: Homepage → Schedule List → Class Detail View → (optional) Report a Mismatch → Confirmation
 
### Team Contribution
All members contributed to the same GitHub repository.
 
## Lab 06 Update - Business Model Canvas and Technical Architecture
 
### Lab 06 Summary
In Lab 06, our group connected our product concept, requirements, user stories, and wireframes into business logic and technical structure.
 
### Files Added or Updated
- [Business Model Canvas](docs/business-model-canva.md)
- [Feature-Value Mapping](docs/feature-value-mapping.md)
- [Technical Architecture](docs/technical-architecture.md)
- [Data Structure](docs/data-structure.md)
- [Weekly Logbook](docs/weekly-logbook.md)
- /data/customer_segments_value.csv
- /data/smarttimetable_sample_records.csv
### Technical Direction
Frontend + localStorage/JSON. The team already has the required screens built as static HTML/CSS/JS files, and no member has backend or database experience beyond this course, so the class schedule will be stored in a JSON file and reports/admin status updates will be saved to browser localStorage rather than a real database.
 
### Final Prototype Connection
The business model canvas confirms who the prototype is for and what value each screen needs to deliver; the feature-value mapping ties each of those screens directly to a requirement ID and a priority, so the team knows the report form, schedule search, status labels, and admin dashboard are all Must-Have for the final build. The technical architecture and data structure then define exactly how those same screens will actually work — what the Class and Report entities look like, what fields and statuses they use, and how data will move between the JSON file, localStorage, and each screen — so Lab 07's clickable prototype is just wiring the already-built mockups to this defined data structure, not redesigning anything.
 
## Current Status
In Lab 06, the team completed the business model canvas, mapped each MVP feature to its user and business value, selected the prototype platform, defined the technical architecture and main components, and documented the data structure (entities, fields, and status values) along with sample datasets for customer segments and reports.
 
## Lab 07: MVP Experiment Design
 
### Experiment Objective
We want to test whether students can find their weekly schedule, understand a class's current status, and successfully submit a mismatch report without help — and whether admin/lecturer testers can review and act on those reports from the admin dashboard.
 
### Critical Assumptions
Top 3 (full list in `/docs/critical-assumptions.md`):
1. **(High risk)** Students will actually switch to SmartTimetable instead of continuing to rely on the PDF timetable and class group chats for updates.
2. **(High risk)** Client-side storage (a JSON schedule file plus browser localStorage) is enough to demonstrate the full report-to-status-update loop without a real backend.
3. **(Medium risk)** Users can understand the report form's required fields and the admin dashboard terms without needing instructions.
### MVP Experiment Type
**Selected: Clickable prototype.** The required screens already exist as a real interactive prototype (not just static mockups) in `/prototype/smarttimetable-prototype/`, so testers can navigate the full flow — search, view status, submit a report, and for admin testers, log in and update a class's status — using the actual frontend + localStorage architecture decided in Lab 06, without needing a working backend.
 
### Success Metrics
Full targets and how-to-measure detail in `/docs/success-metrics.md`:
- Task completion rate: 70% or higher
- Form completion accuracy: 80% or higher
- Search success rate: 70% or higher
- Usability rating (task ease): average 4 out of 5
- Feature usefulness rating: average 4 out of 5
 
