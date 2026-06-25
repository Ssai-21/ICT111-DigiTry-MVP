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
| Soe Yu Nwe | Reviewed Lab 03 evidence and defined the primary target user and persona (Ploy, Year 2 IT student) | Commit: "Add user-persona.md" |
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

