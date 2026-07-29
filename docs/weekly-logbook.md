# Weekly Venture Logbook

## Lab 1: Lab Setup and IT Venture Repository

### What We Completed

1. Formed the DigiTry team and assigned roles — Technical Lead (Sai Thi Han Win), Product Lead (Soe Yu Nwe), and Documentation Lead (Rigzang Lhmao)

2. Initialized the GitHub repository with the required folder structure: docs, prototype, data, finance, diagrams, screenshots, and pitch directories

3. Drafted the initial idea log (`/docs/idea-log.md`) with three IT venture ideas — SmartTimetable, MindCare, and EventHub — each covering problem area, target users, current alternatives, proposed solution, possible technology, and suitability justification

4. Agreed on SmartTimetable as the primary venture direction: a real-time campus scheduling platform with LINE Notify alerts for Rangsit University students and staff

5. Completed the team profile and submitted the Lab 1 report covering Parts A through F

### What We Learned

1. Setting up a structured GitHub repository from scratch requires planning — agreeing on folder names, file naming conventions, and commit practices early saves confusion later

2. Defining a problem clearly is harder than it seems; the team learned to distinguish between a symptom (students miss class updates) and the root cause (no centralized real-time schedule system)

3. Evaluating three ideas side by side helped the team understand what makes an IT venture feasible within a semester — scope, user access, and technical simplicity all matter equally

### Problems or Difficulties

1. Some team members were not familiar with GitHub at the start of the lab, which meant the team spent extra time learning how to create a repository, set up folders, and make commits before actual project work could begin

2. Understanding the difference between branching, committing, and pushing caused some initial confusion; the team resolved this by having the Technical Lead walk everyone through the workflow together during the lab session

### Evidence of Work
- GitHub repository link: [https://github.com/digitry-rsu/smart-timetable](https://github.com/Ssai-21/ICT111-DigiTry-MVP.git)
- Screenshot: <img width="1337" height="888" alt="image" src="https://github.com/user-attachments/assets/ddb9e108-9004-4c91-89c6-4cfcd771229e" />
<img width="1287" height="674" alt="image" src="https://github.com/user-attachments/assets/9a54b317-e0d3-471b-8bed-7f7ccde79d41" />
- File created: <img width="943" height="521" alt="image" src="https://github.com/user-attachments/assets/4a672727-c15c-41dd-8b15-0017aa231ad3" />  <img width="1886" height="421" alt="image" src="https://github.com/user-attachments/assets/268ffbfb-7acb-42b5-a318-18db4949c28c" />
<img width="455" height="286" alt="image" src="https://github.com/user-attachments/assets/6216a6b7-0815-4ead-adb1-c89528676e26" />


- Commit link: [https://github.com/digitry-rsu/smart-timetable/commits/main](https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main/)

### Lab 01 Mini Technical Checkpoint
<img width="597" height="196" alt="image" src="https://github.com/user-attachments/assets/73ff73d8-bfec-4bcb-b7c7-707573f83354" />

### Decision Made This Week

The team decided to pursue **SmartTimetable** as the primary IT venture — a web-based real-time timetable and room finder for Rangsit University — because it solves a daily problem experienced by all target users, is technically achievable within the semester, and gives the team direct access to real users for ongoing validation.

### Plan for Next Week

In Lab 2, the team will conduct opportunity scanning by running a short survey targeting RSU students and lecturers to validate the SmartTimetable problem and gather data on current scheduling pain points. The Product Lead will draft a value proposition canvas, the Technical Lead will research the LINE Notify API and evaluate database options, and the Documentation Lead will update the logbook and begin organizing survey results in the `/data` folder.

---

## Lab 02: IT Opportunity Scanning

### What We Completed

1. Expanded the idea log from three to six possible IT venture ideas and reviewed each one against problem area, target user, current alternative, and initial technology direction

2. Built an opportunity scan covering observed problems and prototype feasibility for all six ideas, and scored each idea using the NUF (New, Useful, Feasible) framework in a scoring matrix

3. Selected SmartTimetable as the team's semester project and documented the decision in `/docs/selected-opportunity.md`

### Selected Opportunity

SmartTimetable – a digital class schedule and room finder that converts the static PDF timetable into a searchable, personalized, and easily updatable system for students and lecturers.

### Why We Selected It

SmartTimetable scored highest across all three NUF criteria. It is **New** because it turns a static, unsearchable PDF into an interactive digital tool. It is **Useful** because every student and lecturer relies on the timetable regularly, making the problem easy to validate and widely felt. It is **Feasible** because the team already has access to a real PDF timetable to use as source data, and the core build only requires basic web development and database skills, with no IoT hardware or advanced cybersecurity needed.

### What We Rejected

The team rejected **LinguaHub** (an English practice and peer conversation matching idea). While it scored reasonably on usefulness, it ranked lower on feasibility since the AI-assisted writing feedback feature would require more integration effort than the team could confidently commit to building well within the semester timeline, compared to the more straightforward data-display nature of SmartTimetable.

### What We Learned

1. Scoring multiple ideas side by side using a structured framework (NUF) made it much easier to compare options objectively instead of relying on personal preference alone

2. A good idea is not just about solving an interesting problem — feasibility within the team's current skill level and timeline matters just as much

3. Working from a real, existing data source (the actual PDF timetable) makes a project feel more concrete and easier to scope than starting from a fully abstract idea

### Evidence of Work

- Opportunity scan file: `/docs/opportunity-scan.md`

- NUF scoring file: `/docs/opportunity-scan.md`

- Selected opportunity file: `/docs/selected-opportunity.md`

- GitHub issue screenshot: <img width="1349" height="794" alt="image" src="https://github.com/user-attachments/assets/c4992a89-858b-4762-88d3-a2f3396516b5" />


- Commit link: https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main

### Plan for Lab 03

In Lab 3, the team will conduct customer problem discovery by interviewing or surveying a small group of students and at least one lecturer who currently rely on the PDF timetable. The team will ask how they currently manage schedule changes, how often they refer to the timetable, and whether a searchable digital version would be valuable. Responses will be recorded and saved as evidence in the `/data` folder to validate the problem before moving into prototyping.


# Weekly Venture Logbook

## Lab 03: Customer Problem Discovery

### What We Completed
1. Designed a customer discovery survey with 12 organised questions covering current timetable access habits, recent mismatch incidents, time lost, frequency, desired features, and likelihood to switch to a digital alternative
2. Distributed the survey and collected 21 responses from students, lecturers, and staff, then organized the raw data in `/data/raw-responses.xlsx`
3. Analysed the responses to build the assumption-evidence table, customer discovery summary, and problem notes, identifying repeated pain points, current workarounds, and consequences

### What We Learned About the Problem
1. The PDF timetable's biggest weakness is that it does not update automatically when a class is cancelled, a room is changed, or a room is double-booked, which directly causes lateness and missed classes
2. Existing university digital systems (RSU Connect, intranet, registration website) do not fully solve the problem either — several respondents reported these systems showing outdated semester data or failing to display correct room information
3. Not every user experiences the problem equally; a minority of respondents reported almost no issues with the current system, showing the problem's severity varies by individual habits and how often their schedule changes

### What Evidence We Collected
- Number of respondents/interviews: 21
- Evidence file: `/data/raw-responses.xlsx`
- Key repeated pattern: Outdated or unannounced changes (cancellations, room changes, double-bookings) consistently led to lateness, missed classes, or lost teaching time; 76% of respondents rated a real-time digital alternative 7/10 or higher in potential value

### What We Changed Based on Evidence
The team revised the assumption that all users experience the timetable problem at the same frequency and severity, since responses ranged from "Almost never" to "All the time." The team also revised the assumption that one single feature (such as push notifications) is the clear top priority, since requests were split between notifications, calendar sync, room/course search, and mobile readability. The team additionally revised the assumption that existing university digital systems already solve this problem, since multiple respondents reported RSU Connect and the intranet showing outdated or incorrect data. The core problem direction and target users were confirmed and kept, since the majority of evidence strongly supported the original assumption.

### Problems or Difficulties
1. The lecturer and staff sample size remained small (2 lecturers, 1 staff member out of 21 total) compared to students, making it harder to confirm whether their needs are fully represented in the evidence collected so far
2. Some survey responses contained inconsistent, vague, or unclear answers (for example, a low reported frequency paired with a high improvement rating, or comments unrelated to the question asked), which required careful interpretation when identifying genuine patterns versus noise

### Evidence of Work
- GitHub repository link: [https://github.com/Ssai-21/ICT111-DigiTry-MVP](https://github.com/Ssai-21/ICT111-DigiTry-MVP.git)
- Customer questions file: `/docs/customer-questions.md`
- Raw responses file: `/data/raw-responses.xlsx`
- Assumption-evidence table: `/docs/assumption-evidence-table.md`
- Commit link: [https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main](https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main/)

### Plan for Lab 04
In Lab 04, the team will define the primary customer segment based on the strongest evidence collected (students who experience frequent schedule changes), build a representative user persona, and write user stories describing how this persona would interact with SmartTimetable to solve their specific pain points around room changes, cancellations, and real-time updates. strongest evidence collected (students who experience frequent schedule changes), build a representative user persona, and write user stories describing how this persona would interact with SmartTimetable to solve their specific pain points around room changes, cancellations, and real-time updates.

# Lab 04 - Weekly Logbook

## Group Information
- Course: ICT105 Fundamental Technology Entrepreneurship
- Lab: Lab 04 - User Persona, Requirements, and User Stories
- Group Name: DigiTry
- Repository Link: https://github.com/Ssai-21/ICT111-DigiTry-MVP
- Date: Lab 04

## 1. Work Completed Today
| Member Name | Contribution | GitHub Evidence (Commit/Issue/PR Link) |
|---|---|---|
| Soe Yu Nwe | Reviewed Lab 03 evidence and defined the primary target user and persona (Yu, Year 1 IT student) | Commit: "Add user-persona.md" |
| Sai Thi Han Win | Wrote functional and non-functional requirements based on the lecturer's fixed system-requirements template, mapped to SmartTimetable | Commit: "Add system-requirements.md" |
| Rigzang Lhmao | Wrote user stories with acceptance criteria for each requirement and maintained documentation/logbook | Commit: "Add user-stories.md", "Add weekly-logbook.md" |
| Seint Myat Wai | Prioritized MVP features using MoSCoW scoring and linked each feature back to Lab 03 evidence | Commit: "Add mvp-feature-list.md" |

## 2. Main Decisions
- Primary target user: Students who experience frequent schedule mismatches (the largest and most evidence-backed group from Lab 03), represented by the persona Ploy
- Main persona: Ploy, a Year 2 IT student who relies on the PDF timetable and RSU Connect, and has personally experienced room changes, cancellations, and mobile usability issues with the current system
- Most important problem: The timetable does not update automatically for cancellations, room changes, or double-bookings, which is the most repeated and strongest pain point across all 21 Lab 03 survey responses
- Must-have requirements: Homepage (FR-01), navigation flow (FR-02), schedule list view (FR-05), class detail view with status label (FR-07, FR-08), report-a-mismatch form with validation (FR-03, FR-10), admin update function (FR-09), data storage (FR-04), confirmation messages (FR-11), UI consistency (FR-13), mobile-friendly design (FR-14), and privacy-conscious data handling (FR-15)
- Features included in MVP: Homepage, navigation flow, schedule list view, class detail view with status labels, report-a-mismatch form, admin update function, and search by course code/room (Should-have)
- Features postponed: Push notifications (too much added infrastructure for this stage) and calendar sync (third-party integration not needed to prove the core idea); the lecturer broadcast tool was kept in as a Could-have since it was simple enough to attempt

## 3. Requirement Changes / Clarifications
The team initially considered including push notifications as a Must-have feature, since it was the most-requested feature in Lab 03 evidence. After reviewing technical complexity, the team reclassified it as a Could-have/future feature, since it requires notification infrastructure not necessary to demonstrate the core problem-solution fit. The team also added a lecturer broadcast feature (originally postponed) back into the MVP scope as a Could-have, since both lecturer respondents in Lab 03 raised the same manual-communication pain point and the feature was assessed as feasible to build alongside the admin update function.

## 4. Problems Encountered
- Technical problem: The team had to decide how to simulate real-time status updates (Confirmed/Room Changed/Cancelled) without building full notification infrastructure, which took some discussion to scope correctly for an MVP
- Team coordination problem: Aligning the requirement IDs (FR-XX) consistently across the persona, requirements, user stories, and feature list files took a few rounds of cross-checking to make sure nothing was mismatched or missing
- Evidence/requirement problem: The lecturer and staff sample from Lab 03 was small (3 of 21 respondents), making it harder to confidently prioritize features specific to their workflow, such as the lecturer broadcast tool

## 5. Next Actions Before Lab 05
| Task | Owner | Deadline | GitHub Issue |
|---|---|---|---|
| Set up the spreadsheet structure for class and report data | Soe Yu Nwe | Before Lab 05 | #TBD |
| Build the homepage and navigation flow wireframe | Sai Thi Han Win | Before Lab 05 | #TBD |
| Draft the schedule list and class detail view layout | Seint Myat Wai | Before Lab 05 | #TBD |
| Update README and repository documentation with Lab 04 outputs | Rigzang Lhmao | Before Lab 05 | #TBD |

# Weekly Logbook - Lab 05

## Group Name
DigiTry

## Project Title
SmartTimetable

## Lab 05 Focus
Product Concept and UI/UX Wireframe

## What We Completed Today
- [x] Reviewed Lab 04 requirements
- [x] Defined product concept
- [x] Mapped features to requirements
- [x] Created required wireframe screens
- [x] Created user flow diagram
- [ ] Built clickable prototype draft or screen navigation plan
- [x] Updated GitHub repository

## Member Contributions
| Member Name | Contribution | Evidence / Commit Link |
|---|---|---|
| Sai Thi Han Win | Created wireframe designs and mockups and updated README.md | https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main/ |
| Soe Yu Nwe | Did product concept and feature requirements mapping | https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main/ |
| Rigzang Lhmao | Did wireframe specification | https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main/ |
| Seint Myat Wai | Did screen inventory checklist and updated weekly logbook| https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main/
| Decision | Reason | Related Requirement |
|---|---|---|
| | | |

## Problems Found


## Next Steps Before Lab 06
Start building the clickable prototype by linking the six wireframe screens together according to the confirmed user flow.

# Weekly Logbook - Lab 06

## Group Name
DigiTry

## Project Title
Smart Timetable

## Date
July 9, 2026

## Members Present

| Member Name | Contribution Today | GitHub Evidence / Commit / File Updated |
|---|---|---|
| Sai Thi Han Win | Did data flow and system architecture diagrams | https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main/ |
| Soe Yu Nwe | Weekly log book and README.md update| https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main/ |
| Rigzang Lhmao | Business model canvas and feature value mapping | https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main/ |
| Seint Myat Wai | Defined data structure and uploaded sample data sets| https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main/ |

## Decisions Made Today

1. Business model decision:
2. Technical architecture decision: Selected a frontend-only prototype using a JSON file for the class schedule and browser localStorage for reports and admin status updates, instead of a full database (MySQL/Firebase), since it matches the team's current skill set and fits the remaining timeline.
3. Data structure decision: Defined three entities — Class, Report, and Admin — with a Class-level status (Confirmed / Room Changed / Cancelled) and a separate Report-level status (Pending / In Progress / Resolved / Closed).
4. Diagram decision:

## Problems or Risks Found
Since data is stored in localStorage, a report submitted or a status change made on one device will not appear on another device. The team will demo from a single browser and pre-load a consistent sample dataset before presenting to avoid this looking like a bug.

## Next Actions Before Lab 07
Build the JSON class-schedule file, wire the schedule list and search/filter to read from it, and connect the report form and admin edit form to localStorage so status changes actually update across the prototype.

# Weekly Logbook - Lab 07

## Group Information
- Group name: DigiTry
- Project title: Smart Timetable
- Date: July 15, 2026
- Repository link: https://github.com/Ssai-21/ICT111-DigiTry-MVP

## What We Completed Today
- [x] Reviewed requirements, user stories, MVP features, architecture, and wireframes
- [x] Identified critical assumptions
- [x] Selected MVP experiment type
- [x] Defined test users and success metrics
- [x] Prepared experiment script and feedback form
- [x] Updated GitHub repository and README

## Member Contributions
| Member Name | Contribution | Evidence/Commit/Issue Link |
|---|---|---|
| Sai Thi Han Win |created working prototype and updated README.md |https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main/ |
| Soe Yu Nwe |imported experiement results data sets|https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main/ |
| Rigzang Lhmao |created feedback-form and experiment script |https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main/ |
| Seint Myat Wai |created critical assumptions, MVP experiment plan and success metrics, updated weekly-logbook |https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main/ |

## Key Decisions
| Decision | Reason | Evidence/Requirement Link |
|---|---|---|
| Selected "Clickable prototype" as the MVP experiment type | The required screens were already linked mockups, and this matches the frontend + localStorage architecture from Lab 06 without needing a real backend | /docs/mvp-experiment-plan.md |
| Turned the static wireframe mockups into a real interactive clickable prototype (JSON-style data + localStorage) instead of testing on the static version | Makes the experiment tasks — searching, submitting a report, updating a class status — actually functional end-to-end instead of just visual | /prototype/smarttimetable-prototype/ |
| Defined 5 success metrics with fixed numeric targets instead of relying on general impressions | Gives the team an objective decision rule for whether to move to implementation, revise, or revisit requirements | /docs/success-metrics.md |

## Problems and Next Action
| Problem | Next Action | Responsible Member |
|---|---|---|
| Report form task rated lowest in the sample pilot data (~3/5); testers were unsure if the Description field was optional | Add an explicit "optional" label next to Description before running the real test round | |
| localStorage data does not sync across devices, so a report submitted on one tester's device won't show up on another | Run each test session from a single shared device/browser rather than switching devices mid-session | |

# Weekly Logbook - Lab 08

## Group Information
- Group name: DigiTry
- Project title: Smart Timetable
- Repository link: https://github.com/Ssai-21/ICT111-DigiTry-MVP
- Lab date: July 24, 2026

## Work Completed Today
- [x] Reviewed Lab 07 MVP experiment plan
- [x] Prepared validation dataset structure
- [x] Created or updated analytics sheet
- [x] Wrote customer validation summary
- [x] Wrote analytics insights
- [x] Wrote MVP decision
- [x] Updated README
- [x] Created GitHub issues for prototype improvements

## Member Contributions
| Member Name | Contribution | GitHub Evidence |
|---|---|---|
| Sai Thi Han Win | Uploaded validation-results.csv, validation-results-analytics.xlsx, feedback-form.csv and Validation Dashboard PBIX files in data/  | https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main/|
| Soe Yu Nwe |Created customer-validation-summary.md and analytics-insights.md in docs/ | https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main/ |
| Rigzang Lhmao | Created mvp-decisions.md and test-user-notes.md in docs/| https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main/ |
| Seint Myat Wai | Updated weekly-logbook.md and README.md| https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main/|

## Problems Found
Validation testing surfaced two recurring, specific issues rather than a broad concept problem:
- **Report form (FR-10):** 1 of 5 report submissions failed because the tester missed the required-field error, and a separate tester wasn't sure if the Description field was optional. Form completion accuracy landed at exactly 80% — the minimum target from `success-metrics.md`, with no safety margin.
- **Admin edit form (FR-09):** Two separate admin sessions flagged the same confusion about whether to enter the new room before or after selecting "Room Changed."
No technical or documentation problems were found — the Power BI dashboard numbers matched the underlying `lab08_validation_results.csv` data exactly when spot-checked.

## Next Actions
- Increase the visual weight of required-field markers and the inline error state on the report form
- Auto-reveal or reposition the "New Room" field on the admin edit form so it only appears once "Room Changed" is selected
- Add a short "(optional)" hint next to the Description field
- Re-test the report form with fresh testers to confirm the fix pushes completion accuracy comfortably above 80%
- Create GitHub issues for each of the above so they're tracked before the next lab
- Update the main README with the Lab 08 validation results section

# Weekly Logbook - Lab 09
 
## Group Name
Team DigiTry
 
## Date
July 29, 2026
 
## Members Present
Sai Thi Han Win, Soe Yu Nwe, Rigzang Lhmao, Seint Myat Wai
 
## Work Completed Today
- Data inventory: Cataloged all Class, Report, and Admin data fields with personal/sensitive-data flags and minimization notes — `docs/data-handling-policy.md` and `data/data_inventory.csv`
- Privacy review: Data collection summary and data minimization decisions — `docs/privacy-and-data-protection.md`
- Ethical review: 6-item checklist completed; result "Safe to continue: With revision" — `docs/legal-ethical-checklist.md`
- IP review: Cataloged every third-party tool/asset used (system fonts, Mermaid, draw.io, Google Forms, Power BI, GitHub) — `docs/ip-and-third-party-assets.md` and `data/third_party_assets_register.csv`
- Security review: Found the admin dashboard has no real authentication (High risk) — `docs/security-risk-check.md`
- Risk register: 6 risks logged across Privacy, Ethical, IP, Security, Legal, and Data quality categories — `docs/risk-register.md` and `data/risk_register.csv`
- Requirements update note: Proposed a clarification to NFR-07 documenting the simulated admin login as an accepted MVP-stage limitation — `docs/updated-requirements-note.md`
- Process diagram: Mapped the full Lab 09 review flow (feature review → data inventory → privacy → ethics → IP → security → risk register → requirements update → GitHub) — `diagrams/privacy-security-review.mmd`
## Member Contributions
| Member Name | Contribution | Evidence / Commit Link |
|---|---|---|
| Sai Thi Han Win | Drew Privacy and security review diagram and updated weekly-logbook and README.md| https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main |
| Soe Yu Nwe | Created and uploaded data inventory, risk register, third party assests register data sets into data/ and data handling policy, ip and third part assets into docs/| https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main |
| Rigzang Lhmao | Created legal ethical checklist, privacy and data protection and risk register in docs/| https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main |
| Seint Myat Wai | Created security risk check, updated requirements note and user consent statement in docs/| https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main |
 
## Decisions Made
- Documented the admin login's lack of real authentication as an accepted MVP-stage limitation rather than fixing it immediately — flagged as High risk/severity and required before any deployment beyond the class demo.
- Chose to propose a clarification to NFR-07 rather than silently changing `system-requirements.md`, per the traceability rule in `docs/updated-requirements-note.md`.
## Issues / Blockers
The admin access-control gap (R-04 in the risk register) is the one unresolved high-risk item from this review. It needs a GitHub issue and a real fix before final submission — everything else found this week is low/medium risk with a mitigation already identified.
 
## Next Action Before Lab 10
Create GitHub issues for R-04 (admin authentication) and R-01 (report form Description field privacy hint); implement these alongside the two outstanding Lab 08 UI fixes (report form required-field visibility, admin edit field order) before the next review.
 
---
 
# Weekly Logbook - Lab 10
 
## Lab Topic
MVP Implementation Sprint 1
 
## What We Built Today
- Rebuilt the interactive prototype as a single-page app: `/prototype/index.html`, `/prototype/style.css`, and `/prototype/script.js`, using hash-based routing (`#schedule`, `#class`, `#report`, `#admin-dashboard`, etc.) instead of separate page loads
- Verified the full loop end-to-end in a headless browser test: submit a report → log in as admin → dashboard shows the report → update a class's status → change reflects back on the student-facing detail view → the related report auto-resolves
- Documented feature-to-requirement implementation status for all 16 requirements (`docs/feature-implementation-status.md`) and the Sprint 1 implementation plan (`docs/implementation-plan.md`)
## Requirement IDs Addressed
- FR-01: Homepage — implemented and working
- FR-03: Report submission form — implemented, validated, saves to localStorage
- FR-05: Schedule record list — implemented, dynamic
- FR-06: Search/filter — implemented, live client-side
- FR-07: Detail view — implemented, dynamic per class
- FR-08: Status tracking — implemented; admin update reflects on the student-facing view
- FR-09: Admin function — implemented, but login is still simulated (no real authentication yet)
- FR-12: Dashboard/summary — implemented, computed live from data
## Contribution by Members
| Member | Contribution | GitHub Evidence |
|---|---|---|
| Sai Thi Han Win | Built prototype| https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main |
| Soe Yu Nwe | Created future implementation plan and implementation plans| https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main |
| Rigzang Lhmao | Uploaded required screenshots of the prototype| https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main |
| Seint Myat Wai | Updated weekly log book and README.md| https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main |
 
## Screenshots Added
- /screenshots/homepage.png
- /screenshots/input-form.png
- /screenshots/record-list.png
- /screenshots/detail-view.png
- /screenshots/admin-view.png
 
## Problems Faced
- Consolidating 9 separate HTML files into a single-page app meant rewriting navigation as hash-based routing instead of separate page loads — resolved by building a small router and testing every route in a headless browser before treating it as done.
- The admin dashboard and edit screens need to stay protected from direct access even in a single-page app — resolved by checking the login flag inside the router before rendering those views, same behavior as the multi-page version.
## Plan for Next Lab
- Capture and add the 5 required screenshots to `/screenshots/`
- Implement the outstanding responsible-design fixes: report form required-field visibility (FR-10), admin edit field order (FR-08), and real admin authentication (FR-09)
- Confirm `/prototype/prototype-link.md` is not needed, since this prototype is plain HTML/CSS/JS and not built on Figma, Google Sheets, Airtable, or a similar platform
---
 
# Weekly Logbook - Lab 11
 
## Lab Topic
MVP Implementation Sprint 2 and Startup Metrics
 
## Group Case
Smart Timetable (Team DigiTry) — a searchable, status-aware digital replacement for RIC's static PDF class timetable.
 
## Work Completed Today
- Seeded the admin dashboard with 12 realistic historical reports (`prototype/data.json`), with an inline fallback array so it still works when opened directly from disk via `file://`
- Merged seeded and live reports into a single feed (`unifiedReports()`) so the dashboard reads as one consistent list
- Added status filter chips (All/Pending/In Progress/Resolved/Closed) and new metrics (average days open, most-reported course) to the admin dashboard
- Added `aria-invalid`, `aria-describedby`, and `role="alert"` to the report form's validation for accessibility
- Ran a full headless test pass on the live prototype (`docs/prototype-testing-notes.md`) — all 7 main test cases passed, including a real login → dashboard → status update → confirm-it-reflects round trip
- Updated `docs/feature-implementation-status.md` with real Lab 10 vs. Lab 11 status per requirement
- Documented `docs/startup-metrics.md` with metrics computed from the live prototype data plus the Lab 08 validation results
- Built the Power BI startup/product metrics dashboard (`Lab11_TeamDigiTry_Startup_Metrics.pbix`), using 12 DAX measures against `data/lab11_prototype_records.csv` and `data/lab11_activity_log.csv`
## Member Contributions
| Member Name | Contribution | GitHub Evidence |
|---|---|---|
| Sai Thi Han Win | | https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main |
| Soe Yu Nwe | Created future implementation status and prototype testing notes| https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main |
| Rigzang Lhmao | Created startup metrics and uploaded the required screenshots of the updated prototype| https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main |
| Seint Myat Wai | Updated weekly logbook and README.md| https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main |
 
## Requirements Addressed
FR-03 (partially — accessibility only, not visual), FR-06 (dashboard filter chips), FR-08 (seeded historical status data, confirmed persistence), FR-12 (new dashboard metrics)
 
## Metrics Added
Total Records, Total Activity Events, New Submissions, Pending Cases, Resolved Cases, Resolution Rate, Average Resolution Days, Search Actions, Admin Updates, Dashboard Views, Average Processing Time, Mobile Activity Rate — 12 DAX measures defined in `docs/lab11_dax_measures.txt`, with 4 surfaced as dashboard cards (Total Records, New Submissions, Pending Cases, Resolution Rate) plus category/status breakdown charts. Full detail in `docs/startup-metrics.md`.
 
## Problems Found
- **UI/UX:** Confirmed via direct testing that FR-10's Lab 08 finding is still open — the report form's required-field error text is now more accessible (ARIA attributes), but the input itself still gets no visual highlight, so a sighted tester could still miss it.
- **UI/UX:** FR-08's admin edit field order (New Room field position) also still hasn't been fixed since Lab 08.
- **Documentation:** Found a leftover internal note accidentally pasted into the live README.md — removed while updating the file.
- **Documentation:** Lab 10's `docs/feature-implementation-status.md` was committed as `docs/future-implementation-plan.md` instead — filenames don't match what later labs reference.
- **No teamwork or technical blockers this lab** — all planned work was completed and verified working.
## Next Action Before Lab 12
Fix the report form's visual validation state and the admin edit field order (both confirmed still open this lab), add real admin authentication, test responsive design on an actual phone, and rename the screenshot files to descriptive names.
 
---
 
# Weekly Logbook - Lab 12
 
## Group Name
Team DigiTry
 
## Project Title
Smart Timetable
 
## Lab Date
August 14, 2026
 
## Work Completed Today
 
| Member Name | Contribution | File/Commit Evidence |
| --- | --- | --- |
| Sai Thi Han Win | | https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main |
| Soe Yu Nwe | Uploaded acquisition metrics data set and created acquisition metrics.md in docs/ | https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main |
| Rigzang Lhmao | Created go to market plan and marketing message| https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main |
| Seint Myat Wai | Created landing page content and Updated weekly log book and README.md | https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main |
 
## Landing Page Progress
Built `/landing-page/index.html`, `style.css`, and `script.js` — a standalone landing page reusing the prototype's actual design tokens and components (not a separate visual style) so it reads as part of the same product. Includes a hero section with the main CTA ("Try the Prototype"), a problem/solution section grounded in the Lab 03 discovery findings, a features section mapped to real requirement IDs, a target-user section (Students / Lecturers / Admin & Staff), and a closing CTA banner. `script.js` adds smooth-scroll navigation, a scroll-reveal animation for the cards, and a local CTA-click log (`localStorage`) that mirrors the prototype's own "no real backend" architecture rather than sending data anywhere.
 
## Go-to-Market Progress
Documented in `docs/go-to-market-plan.md`, `docs/marketing-message.md`, and `docs/landing-page-content.md`. Target early users are RIC students in the team's own sections first, then lecturers and admin/staff as a secondary group for the report-review workflow. Selected channels: ICT111 class group chat, campus QR poster, Instagram story, RIC student Line group, and word of mouth — chosen to reach real RIC students rather than a broad public audience. Main message leads with the PDF timetable's unreliability before introducing the product, tested against the "5-second clarity" checklist in `docs/marketing-message.md`.
 
## Metrics Plan
Documented in `docs/acquisition-metrics.md`: landing page views, CTA click rate, demo attempts, feedback responses, and interest conversion rate, tracked per channel in `data/acquisition-metrics.csv`. Targets: 20+ views per channel per week, 30%+ CTA click-through, 10+ demo attempts combined, 5+ feedback responses, 20%+ interest conversion. Sample data already validates the tracking structure works (155 views, 42% click-through, 26% conversion across the seeded example).
 
## Problems Encountered
- No real campaign has been run yet — all current acquisition numbers are seeded sample data (`data/acquisition-metrics.csv`), not real traffic, so the metrics plan is untested against actual channel performance.
- The landing page's CTA leads straight to the prototype, which still has the two known open usability issues from Lab 08/11 (report form validation visibility, admin edit field order) — promoting it now risks first-time visitors hitting those rough edges before they're fixed.
## Next Action Before Lab 13
Run the actual channel outreach (starting with the ICT111 class group chat as a soft launch), log real numbers into `data/acquisition-metrics.csv`, and fix the two outstanding Lab 08/11 usability issues before pushing to wider channels (QR poster, Instagram, Line group).
 
---
 
# Weekly Logbook - Lab 13
 
## Group Name
Team DigiTry
 
## Project Title
Smart Timetable
 
## Date
August 20, 2026
 
## Members and Contributions
| Member | Contribution This Lab | GitHub Evidence |
| --- | --- | --- |
| Sai Thi Han Win | Fixed the prototype for the final version, created final improvement list, uploaded user testing results data and demo flow diagram| https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main |
| Soe Yu Nwe | Created sales scenario and demo script| https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main |
| Rigzang Lhmao | Created user testing plan and user testing results.md| https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main |
| Seint Myat Wai | Updated weekly logbook and README.md| https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main |
 
## Work Completed
- Sales scenario: Written around a real Lab 03-grounded situation (a student walking to a moved class), with a value message and a sample pitch conversation — `docs/sales-scenario.md`
- Demo script: 8-step flow mapped to real hash routes in the prototype, with presenter roles assigned across all 4 members — `docs/demo-script.md`
- User testing plan: 5 base tasks plus 2 added tasks (T06, T07) specifically targeting the two known open issues from Lab 08/11, plus real-device mobile testing for the first time — `docs/user-testing-plan.md`
- User testing results: T01–T05 completion verified directly against the live prototype code via an automated test pass; T06/T07 and tester quotes are illustrative sample data pending a real testing session — `docs/user-testing-results.md` and `data/user-testing-results.csv`
- Final improvement list: 8 items pulled from across the whole project (Lab 08 findings, Lab 09 risk register, Lab 10 filename issue, Lab 11 remaining dashboard cards), prioritized Critical/Important/Useful/Future — `docs/final-improvement-list.md`
- Screenshots: Not yet captured at the time — `demo-flow.png` and `user-testing-evidence.png`
  
## Key Decisions
- Confirmed the two Critical issues from Lab 08/11 (report form validation visibility, admin edit field order) are still genuinely open — verified directly against the current prototype code rather than assumed — and prioritized them as Critical (IMP-01, IMP-02) to fix before Lab 14.
- Decided this testing round should include real-device mobile testing for the first time, since every previous round only checked responsiveness via browser resize.
## Problems Encountered
- No real user testing session had happened yet for this lab — `docs/user-testing-results.md` mixed verified automated results with illustrative tester quotes, pending replacement with real notes once the 7-person session in `docs/user-testing-plan.md` actually runs.
- The two Critical usability issues (FR-10, FR-08) had persisted across three labs (8, 11, and this one) without being fixed — treated as a priority blocker, not routine polish.
## Next Actions Before Lab 14
Fix IMP-01 and IMP-02 from `docs/final-improvement-list.md`, run the real 7-person testing session defined in `docs/user-testing-plan.md`, capture the two missing screenshots (`demo-flow.png`, `user-testing-evidence.png`), and rehearse the demo script as a full run-through.
 
## Requirement Traceability Notes
FR-10 and FR-08 need final checking before Lab 14, since both have open, unresolved usability issues despite technically "working." FR-09 (admin authentication) also needs a team decision — either implement real authentication or explicitly document it as an accepted MVP-stage limitation in the final submission, rather than leaving it ambiguous. FR-14 (mobile-friendly) needs one more check after the day-chip touch-target sizing is addressed.
 
*(Update: IMP-01, IMP-02, and IMP-03 were addressed after this lab — see the prototype fixes applied for FR-10, FR-08, and FR-09.)*
## Next Action Before Lab 13
Run the actual channel outreach (starting with the ICT111 class group chat as a soft launch), log real numbers into `data/acquisition-metrics.csv`, and fix the two outstanding Lab 08/11 usability issues before pushing to wider channels (QR poster, Instagram, Line group).
