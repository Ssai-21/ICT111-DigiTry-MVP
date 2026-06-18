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
 
