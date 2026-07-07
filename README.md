# Smart Timetable
## Course Information
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

## Lab 05: Product Concept and UI/UX Wireframe

### Product Concept
SmartTimetable is a web-based tool for RSU students and lecturers who currently rely on a static PDF timetable that does not update for cancellations, room changes, or reschedules. It converts the PDF into a searchable, personalized digital schedule, letting students view their own classes, check a class's current status, and flag a mismatch so it can be corrected — solving the trust and accuracy problem confirmed during customer discovery in Lab 03.

### Requirement-Driven Screens
| Screen | Related Requirement IDs | Wireframe File |
|---|---|---|
| Homepage / Landing | FR-01, FR-02 | /wireframes/homepage.png |
| Input / Submission Form | FR-03, FR-10, FR-11 | /wireframes/input-form.png |
| Records / Information List | FR-05, FR-06 | /wireframes/record-list.png |
| Record Detail View | FR-07, FR-08 | /wireframes/detail-view.png |
| Dashboard / Summary | FR-12 | /wireframes/dashboard.png |
| Admin / Manager View | FR-09, FR-08 | /wireframes/admin-view.png |

### User Flow
See `/diagrams/user-flow.png` for the full diagram. The primary path is: Homepage → Schedule List → Class Detail View → (optional) Report a Mismatch → Confirmation

### Team Contribution
All members contributed to the same GitHub repository.

## Current Status
In Lab 05, the team defined the product concept, mapped every required screen to its requirement IDs, and produced wireframes for all the screens along with the user flow diagram. Supporting documentation was added to `/docs/product-concept.md`, `/docs/feature-requirement-mapping.md`, `/docs/wireframe-specification.md`, `/docs/wireframe-usability-review-checklist.md` and `/docs/screen-inventory-checklist.md`.
## Next Step
In Lab 06, the team will begin building the clickable prototype, wiring the six wireframe screens together according to the confirmed user flow.
