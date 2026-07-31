#Smart Timetable
# Course Information
Course Code: ICT11
Course Name: Introduction to Information Technology
Instructor: Dr. Herison Surbakti
Project Type: 14-Labs Continuous IT Startup MVP Development
## Team Name
Team DigiTry
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

 ### Files Added in Lab 07
- [MVP Experiment Plan](docs/mvp-experiment-plan.md)
- [Critical Assumptions](docs/critical-assumptions.md)
- [Experiment Script](docs/experiment-script.md)
- [Success Metrics](docs/success-metrics.md)
- [Feedback Form](docs/feedback-form.md)
- [Weekly Logbook](docs/weekly-logbook.md)
- `/prototype/smarttimetable-prototype/` — the interactive clickable prototype used to actually run the experiment
### Connection to Final Prototype
This experiment is the checkpoint between the wireframes and the final build: the critical assumptions name exactly what could make the final prototype fail, and the success metrics turn "did it work?" into a number the team can actually check against a target. Based on the decision rules in `/docs/success-metrics.md` — if metrics meet target, the team moves straight into the implementation sprint; if some metrics fail, the team revises the affected screen, flow, or label (for example, the report form's required-field clarity) before implementation; if most metrics fail, the team revisits the requirements and problem evidence before building further. Either way, the final prototype is built on top of the same interactive codebase already in `/prototype/smarttimetable-prototype/`, not a rewrite.
 
## Lab 08: Customer Validation and Analytics Sheet
 
### Validation Objective
The team ran the Lab 07 experiment plan on the real interactive prototype: 5 student testers and 2 admin/staff testers completed tasks across searching the schedule, checking a class's status, submitting a mismatch report, and — for admin/staff — logging in, reviewing the dashboard, and updating a class's status. The goal was to confirm whether the MVP direction holds up under real use before continuing into implementation.
 
### Prototype Version Tested
- Version: v1 — interactive clickable prototype (frontend + localStorage, per `docs/technical-architecture.md`)
- Link: `/prototype/smarttimetable-prototype/index.html`
- Screenshots: *(not yet added — see Files Added below)*
### Analytics Summary
| Metric | Result |
|---|---:|
| Total test users | 7 (5 Student, 2 Admin/Staff) — 20 total task attempts logged |
| Task success rate | 95% (19/20) |
| Average feedback score | 4.5 / 5 (usefulness) |
| Average interest level | 4.45 / 5 (95% said they'd use it again) |
| Main confusion point | Report form required fields (2 of 20 attempts), plus one admin note on the New Room field's order |
 
### MVP Decision
**Continue with minor revisions.** All five success metrics from `docs/success-metrics.md` were met, so the core concept and workflow are validated — but form completion accuracy landed at exactly its 80% target with no safety margin, and the same two issues (report form validation clarity, admin edit field order) surfaced independently across different testers. Both are small, well-understood UI fixes, not a sign of a wrong requirement or a need to pivot. Full reasoning in `/docs/mvp-decision.md`.
 
### Files Added
- [Validation Results (raw data)](data/lab08_validation_results.csv)
- [Validation Results Analytics](data/validation-results-analytics.xlsx)
- [Customer Validation Summary](docs/customer-validation-summary.md)
- [Analytics Insights](docs/analytics-insights.md)
- [MVP Decision](docs/mvp-decision.md)
- [Test User Notes](docs/test-user-notes.md)
- [Weekly Logbook](docs/weekly-logbook.md)

## Lab 09 - Responsible IT Check
 
### Responsible Design Summary
The team reviewed SmartTimetable for privacy, ethical, IP, and basic security risks before continuing into implementation. The main finding: the admin dashboard currently has no real authentication — it's a simulated pass-through login, so any user who reaches the admin URLs can view and edit class status, which conflicts with NFR-07. This is documented as an accepted MVP-stage limitation with a required fix before any deployment beyond the class demo, not a silent gap. Lower-priority findings include the report form's optional free-text Description field (could unintentionally capture personal information), lecturer names being shown publicly on the schedule (already public on the current PDF timetable, but not yet explicitly confirmed with lecturers), and the need to clearly label all sample/demo data so it's never mistaken for real schedule data. Full reasoning for each is in `docs/risk-register.md`.
 
### Files Added
- [Legal and Ethical Checklist](docs/legal-ethical-checklist.md)
- [Privacy and Data Protection](docs/privacy-and-data-protection.md)
- [IP and Third-Party Assets](docs/ip-and-third-party-assets.md)
- [Security Risk Check](docs/security-risk-check.md)
- [Risk Register](docs/risk-register.md)
- [Updated Requirements Note](docs/updated-requirements-note.md)
- [Weekly Logbook](docs/weekly-logbook.md)
- [Data Handling Policy](docs/data-handling-policy.md)
- [User Consent Statement](docs/user-consent-statement.md)
- `data/data_inventory.csv` — *(supporting dataset for the Data Handling Policy)*
- `data/risk_register.csv` — *(supporting dataset for the Risk Register)*
- `data/third_party_assets_register.csv` — *(supporting dataset for the IP and Third-Party Assets register)*
- [Privacy/Security Review Diagram](diagrams/privacy-security-review.png)
### Requirement Update
`system-requirements.md` has **not** been changed yet. A proposed clarification to **NFR-07** — documenting that admin access control is currently simulated, not a real security boundary, for the MVP stage — is recorded in `docs/updated-requirements-note.md`, pending team approval before the requirements file itself is edited.
 
### Team Contributions
- **Sai Thi Han Win** — Drew the Privacy and Security Review diagram, updated the weekly logbook and README.md
- **Soe Yu Nwe** — Created and uploaded the data inventory, risk register, and third-party assets register datasets to `data/`, and the Data Handling Policy and IP and Third-Party Assets docs to `docs/`
- **Rigzang Lhmao** — Created the Legal and Ethical Checklist, Privacy and Data Protection, and Risk Register docs
- **Seint Myat Wai** — Created the Security Risk Check, Updated Requirements Note, and User Consent Statement docs
and edit README.md in main, remove Next Step section and paste with this

## Lab 10 - MVP Implementation Sprint 1
 
### Sprint Goal
Our goal in Lab 10 is to begin building the first working version of the prototype based on the approved requirements, wireframes, architecture, and responsible-design checks.
 
### Implementation Approach
- Platform/tools: HTML / CSS / JavaScript (frontend-only), no framework
- Backend status: Simulated backend — sample class data embedded directly in `script.js` (standing in for a JSON file), no real server or database
- Data storage/simulation: Submitted reports and admin status/room/note updates are saved to browser `localStorage`, merged with the base sample data at render time
- Prototype link or folder: `/prototype/index.html` — rebuilt this sprint as a single-page app with hash-based routing (`#schedule`, `#class`, `#report`, `#admin-dashboard`, etc.), consolidating the earlier multi-page version
### Features Implemented in Sprint 1
| Feature | Requirement ID | Status | Evidence |
|---|---|---|---|
| Homepage | FR-01 | Working | `/prototype/index.html` (`#home`) |
| Input form | FR-03 | Working | `/prototype/index.html` (`#report`) |
| Record list | FR-05 | Working | `/prototype/index.html` (`#schedule`) |
| Search/filter | FR-06 | Working | `/prototype/index.html` (`#schedule`) |
| Detail view | FR-07 | Working | `/prototype/index.html` (`#class`) |
| Status tracking | FR-08 | Working | `/prototype/index.html` (`#class`, `#admin-edit`) |
| Admin view | FR-09 | Working, authentication simulated | `/prototype/index.html` (`#admin-login`, `#admin-dashboard`, `#admin-edit`) |
| Dashboard | FR-12 | Working | `/prototype/index.html` (`#admin-dashboard`) |
 
Full requirement-by-requirement status for all 16 FRs is in `docs/feature-implementation-status.md`; the full sprint plan is in `docs/implementation-plan.md`.
 
### Screenshots
- Homepage
- Input form
- Record list
- Detail view
- Admin/status view
### Team Contribution
All group members contributed to the same GitHub repository/page.

## Lab 11: MVP Implementation Sprint 2 and Startup Metrics
 
### Prototype Progress
Lab 10 shipped a working single-page prototype; Lab 11 focused on making its data and admin dashboard feel real rather than adding new screens. The admin dashboard is now seeded with 12 realistic historical reports (`prototype/data.json`, loaded via `loadSampleReports()`, with an inline fallback so it still works when opened directly from disk). Live and seeded reports are merged into a single feed (`unifiedReports()`), so the dashboard reads as one consistent list instead of two separate sources. Status filter chips (All / Pending / In Progress / Resolved / Closed) and new metrics (average days open, most-reported course) were added to the dashboard. The report form's validation also gained `aria-invalid`, `aria-describedby`, and `role="alert"` for accessibility — though a real headless test pass this lab confirmed the *visual* prominence issue from Lab 08 (testers missing the required-field error) is still open, since the input itself gets no border/background change, only the small text below it.
 
### Implemented / Improved Features
| Requirement ID | Feature | Status | Evidence |
|---|---|---|---|
| FR-03 | Report form validation accessibility | Partially Completed | `setFieldError()` adds ARIA attributes; visual highlight still missing (`docs/prototype-testing-notes.md`) |
| FR-06 | Admin dashboard status filter chips | Completed | Filter chips (All/Pending/In Progress/Resolved/Closed) tested and working |
| FR-08 | Status tracking, seeded historical data | Completed | 12 seeded reports in `prototype/data.json`; status updates confirmed to persist and reflect on the student-facing view |
| FR-12 | Dashboard metrics expansion | Completed | Added average days-open and most-reported-course metrics, computed live from `unifiedReports()` |
 
Full requirement-by-requirement status for all 16 FRs is in `docs/feature-implementation-status.md`.
 
### Startup/Product Metrics
A dedicated Power BI dashboard was built for this lab — `Lab11_TeamDigiTry_Startup_Metrics.pbix` — using 12 DAX measures defined in `docs/lab11_dax_measures.txt` against `data/lab11_prototype_records.csv` (15 reports) and `data/lab11_activity_log.csv` (36 activity events). It currently surfaces 4 measures as headline cards (Total Records, New Submissions, Pending Cases, Resolution Rate), plus a category breakdown, a status breakdown, an activity-over-time line chart, and a requirement-traceability pivot table. Current values: Total Records = 15, New Submissions = 14, Pending Cases = 6, Resolution Rate = 60.0%, Average Resolution Days = 2.27, Mobile Activity Rate = 44.4%. Full metric definitions, all 12 measures, and interpretation are in `docs/startup-metrics.md`. Task Completion Rate (95%) and Average Feedback Score (4.5/5) remain documented separately, carried over from the Lab 08 Power BI validation dashboard.
 
### Prototype Screenshots
- Homepage: `screenshots/Image (8).jpg`
- Schedule/record list: `screenshots/Image (9).jpg`
- Detail view: `screenshots/Image (10).jpg`
- Report/input form: `screenshots/Image (11).jpg`
- Admin dashboard: `screenshots/Image (12).jpg`
- Power BI Customer Validation Dashboard: `screenshots/Customer_Validation_Dashboard.png`
### Member Contributions
- **Sai Thi Han Win** — Built startup/product metrics dashboard and updated the prototype
- **Soe Yu Nwe** — Completed future implementations and prototype testing
- **Rigzang Lhmao** — Captured and added the 5 updated prototype screenshots to `/screenshots/`; created `docs/startup-metrics.md`
- **Seint Myat Wai** — Updated weekly log book and README.md
### Remaining Work
- Add a visual highlight (border/background) to invalid report form fields — the ARIA fix alone didn't resolve the Lab 08 usability finding
- Reorder or auto-reveal the admin edit form's "New Room" field so it only appears when "Room Changed" is selected
- Add real authentication to the admin login before any deployment beyond the class demo
- Test responsive design on an actual phone, not just browser resize
- Rename the generically-named screenshots (`Image (8).jpg`, etc.) to descriptive filenames
- Add an issue-type breakdown card to the dashboard (Room Change is currently the most common category among seeded reports, but this isn't surfaced in the UI yet)
- Add cards for the remaining 8 defined DAX measures (Average Resolution Days, Search Actions, Admin Updates, Dashboard Views, Average Processing Time, Mobile Activity Rate, Resolved Cases, Total Activity Events) — all are computable today but not yet visualized
- Push `Lab11_TeamDigiTry_Startup_Metrics.pbix` to the repository (e.g. under `/data/`, matching where the Lab 08 dashboard is stored)

## Lab 12 - Landing Page and Digital Go-to-Market
 
### Landing Page
- Landing page folder/link: `/landing-page/index.html`
- Main CTA: "Try the Prototype"
- Prototype/demo link: `/prototype/index.html`
### Go-to-Market Plan
- Target early users: RIC students in the team's own sections first (ICT111, ICT402, etc.), then lecturers and admin/staff as a secondary group for the report-review workflow
- Selected channels: ICT111 class group chat, campus QR poster, Instagram story, RIC student Line group, word of mouth
- Main marketing message: "SmartTimetable is a searchable, always-up-to-date class schedule for RIC students and lecturers, so a cancelled class or last-minute room change never catches you by surprise."
### Acquisition Metrics
- Metric 1: Landing page views — target at least 20 views per channel per week
- Metric 2: CTA click rate (CTA clicks / landing page views) — target at least 30%
- Metric 3: Interest conversion (demo attempts / landing page views) — target at least 20%
Full metric definitions and current sample-data values are in `docs/acquisition-metrics.md`; live tracking in `data/acquisition-metrics.csv`.
 
### Screenshots
- Landing page screenshot: `/screenshots/landing-page.png` *(not yet added)*
- CTA screenshot: `/screenshots/call-to-action.png` *(not yet added)*
### Requirement Alignment
The landing page's feature section maps directly to real requirement IDs rather than generic marketing copy: weekly schedule list (FR-05), search by course/room (FR-06), live status labels (FR-07, FR-08), report a mismatch (FR-03, FR-10), and the admin dashboard (FR-09, FR-12) — see `docs/landing-page-content.md` for the full table. The main CTA leads directly into the working prototype (`/prototype/index.html`), not a separate mockup, so anyone who clicks through is testing the actual FR-01–FR-16 implementation, not a promotional stand-in for it. The landing page's Responsible Data Message also reflects FR-15 (privacy and responsible data handling) — no names, IDs, or contact info are collected, and CTA click tracking stays local to the visitor's browser.
 
## Lab 13: Sales Scenario, Demo Script, and User Testing
 
### Lab 13 Objective
We prepared the final demo scenario, demo script, user testing plan, testing results, and final improvement list before Lab 14.
 
### Files Completed
- [x] /docs/sales-scenario.md
- [x] /docs/demo-script.md
- [x] /docs/user-testing-plan.md
- [x] /docs/user-testing-results.md
- [x] /docs/final-improvement-list.md
- [x] /docs/weekly-logbook.md
- [x] /screenshots/demo-flow.png
- [x] /screenshots/user-testing-evidence.png
 
### Final Preparation Status
The prototype is close to ready for Lab 14 but not fully there yet. The core workflow is validated again this lab — every main task (homepage, search, report submission, status tracking, dashboard) passed testing with no new structural problems. Two Critical issues carried over from Lab 08/11 still need fixing before Lab 14: the report form's required-field error has no visual highlight on the input itself (FR-10), and the admin edit form's "New Room" field order still confuses testers (FR-08). Both are tracked as IMP-01 and IMP-02 in `docs/final-improvement-list.md`. The two required screenshots for this lab (`demo-flow.png`, `user-testing-evidence.png`) still need to be captured and added.
 
## Lab 14: Final MVP Release and Venture Pitch
 
### Project Title
Smart Timetable (Team DigiTry)
 
### Group Members
| Name | Role | Main Contribution |
|---|---|---|
| Sai Thi Han Win | Technical Lead | Built the interactive prototype, diagrams, and the final round of usability fixes |
| Soe Yu Nwe | Product Lead | Product concept, requirement mapping, report form design, go-to-market messaging |
| Rigzang Lhmao | Documentation Lead | Documentation, wireframe specification, README, screenshot evidence |
| Seint Myat Wai | Validation Lead | Customer discovery, MVP experiments, user testing, startup metrics |
 
### Project Overview
SmartTimetable replaces RIC's static PDF class timetable with a searchable, always-current schedule and a report-and-resolve loop connecting students, lecturers, and admin/staff.
 
### Target Users
Primary: RIC students. Secondary: lecturers. Tertiary: admin/staff who review reports and keep the schedule accurate.
 
### Problem Solved
The PDF timetable doesn't update for cancellations, room changes, or double-bookings, and changes only spread informally through group chats — confirmed in Lab 03 discovery (21 respondents, 76% rating a real-time alternative 7/10+ in value).
 
### Final Prototype
- Prototype folder: `/prototype/final-prototype/` (all usability and login fixes merged and verified — this is the definitive version)
- Landing page: `/landing-page/index.html`
- Final demo link: run locally via `/prototype/final-prototype/index.html`
### Final Documentation
- System requirements: `/docs/system-requirements.md`
- User stories: `/docs/user-stories.md`
- MVP feature list: `/docs/mvp-feature-list.md`
- Feature implementation status: `/docs/feature-implementation-status.md` (all 16 requirements now Completed)
- Requirement traceability matrix: `/docs/requirement-traceability-matrix.md`
- Final prototype report: `/docs/final-prototype-report.md`
- Final demo script: `/docs/final-demo-script.md`
- Final reflection: `/docs/final-reflection.md`
- Final submission checklist: `/docs/final-submission-checklist.md`
### Screenshots
`final-homepage.png`, `final-input-form.png`, `final-record-list.png`, `final-detail-view.png`, `final-dashboard.png`, `final-admin-view.png` — *(not yet captured, see Final Submission Notes)*
 
### Pitch
- Final pitch outline: `/pitch/final-pitch-outline.md`
### Data and Diagrams
- Final sample data: `/data/` (includes `customer_segments_value.csv`, `lab11_prototype_records.csv`, `lab11_activity_log.csv`, `lab11_data_dictionary.csv`, validation and acquisition datasets)
- Final diagrams: `/diagrams/` (user flow, use case, system architecture, data flow, privacy/security review, experiment flow, validation-result flow, implementation flow, implementation-metrics flow, landing-page-to-prototype flow, user-testing flow, final-demo flow)
 
