# MVP Experiment Plan

## 1. Group and Project Information
- Group name: DigiTry
- Project title: Smart Timetable
- Repository link: https://github.com/Ssai-21/ICT111-DigiTry-MVP
- Main target user: RIC students (secondary: lecturers and admin staff)
- Prototype platform: Frontend + localStorage/JSON

## 2. Experiment Objective
We want to test whether students can find their weekly schedule, understand a class's current status, and successfully submit a mismatch report without help — and whether admin/lecturer testers can review and act on those reports from the admin dashboard.

## 3. Requirement Scope for the Experiment

| Requirement ID | Requirement Summary | Related Screen/Feature | Tested in This Experiment? |
|---|---|---|---|
| FR-01 | Clear problem-specific homepage | Home screen | Yes |
| FR-02 | Primary user pathway | Tab bar navigation across all screens | Yes |
| FR-05 | View records / information list | Weekly schedule list | Yes |
| FR-06 | Search, filter, or category function | Schedule search box and day-chip filters | Yes |
| FR-07 | Detail view for each record | Class detail (Confirmed / Room Changed / Cancelled) | Yes |
| FR-03 | User input or data submission | Report-a-mismatch form | Yes |
| FR-10 | Basic validation and error prevention | Required fields on the report form | Yes |
| FR-11 | Confirmation or feedback message | Report confirmation and admin confirmation screens | Yes |
| FR-09 | Admin or manager function | Admin login and status-update form | Yes |
| FR-08 | Status or progress tracking | Admin status update, class status labels | Yes |
| FR-12 | Dashboard, summary, or analytics view | Admin dashboard summary cards | Yes |

## 4. MVP Experiment Type
Select one or combine more than one:
- Clickable prototype
- Landing page test
- Form-based simulation
- Dashboard demo
- Manual service simulation
- Simple web prototype
- Backend/database prototype

**Selected experiment type:** Clickable prototype

**Reason for selection:** The 11 required screens already exist as linked static HTML mockups in `/prototype/wireframe-html/`, so testers can navigate the full flow — Home → Schedule → Class Detail → Report → Confirmation, and separately Admin Login → Dashboard → Edit → Confirmation — realistically, without needing a working backend yet. This matches the frontend + localStorage/JSON platform decided in `docs/technical-architecture.md`.

## 5. Test Users

| Test User Group | Number of Testers | Why They Are Relevant |
|---|---:|---|
| Students | 5 | Main target users; they are the ones who check schedules and report mismatches most often. |
| Admin / Lecturer staff | 2 | Needed to test the admin-only tasks (login, dashboard review, status update) that students never see. |

## 6. Experiment Procedure Summary
Each tester is given the opening script and scenario from `docs/experiment-script.md`, then works through the 15 numbered tasks (T01–T15) while thinking aloud. A note-taker records completion, time, whether help was needed, and any confusion for each task, then the tester fills out `docs/feedback-form.md` at the end. Results are logged in `data/experiment-results.xlsx` (task-by-task) and `data/feedback-form.csv` (overall ratings).

## 7. Expected Learning
Based on the decision rules in `docs/success-metrics.md`: if the metrics meet target, the team continues straight to the implementation sprint; if some metrics fail, the team revises the affected wireframe, flow, or labels (for example, the report form's required-field clarity) before implementation; if most metrics fail, the team revisits the requirements, user stories, and problem evidence before building further.
