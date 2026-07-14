# Experiment Script — SmartTimetable Prototype

## 1. Opening Script
Thank you for helping us test our prototype. This is not a test of you. We are testing whether our product idea and interface are clear. Please think aloud while using the prototype.

## 2. Test Scenario
You are a student at RIC who wants to check your class schedule for the week, look into a class that may have changed, report a problem you noticed, and — for admin/lecturer testers — review and act on a student's report.

## 3. Tasks for Tester
| Task No. | Task Instruction | Related Requirement | Expected Result |
|---|---|---|---|
| T01 | Starting from the Home screen, find and select the option to view your weekly class schedule. | FR-01 | User understands the purpose of the Home screen and successfully navigates to the weekly schedule. |
| T02 | Using the persistent navigation, move between the Home, Schedule, Report, and Admin sections. | FR-02 | User locates and uses the tab bar without hesitation. |
| T03 | On the Schedule screen, search for a specific class by course code. | FR-05 | User finds the search box and returns the correct class. |
| T04 | On the Schedule screen, search for a specific class by room number. | FR-05 | User successfully searches by room instead of course code. |
| T05 | Filter the weekly schedule to show only classes on a single day (e.g. Tuesday). | FR-06 | User locates and uses the day-chip filter correctly. |
| T06 | Open a class that is Confirmed and locate its full detail (day/time, room, lecturer, section). | FR-07 | User can read and explain all detail fields shown. |
| T07 | Open a class that has had a Room Change and identify the new room and explanation. | FR-07 | User correctly identifies both the old and new room from the status banner. |
| T08 | Open a class that is Cancelled and identify the status banner explanation. | FR-07 | User correctly explains why the class is cancelled. |
| T09 | From a class detail screen, start a report for a schedule issue (e.g. wrong room) using the "Report an Issue" action. | FR-03 | User finds and taps the correct action button to begin a report. |
| T10 | Fill in the report form (Course Code, Room Number, Issue Type) and identify which fields are required. | FR-03, FR-10 | User correctly identifies required vs. optional fields. |
| T11 | Submit the completed report and confirm a confirmation message appears. | FR-03, FR-11 | User successfully submits and recognizes the confirmation screen. |
| T12 | Log in to the Admin/Lecturer area using the admin login screen. | FR-09 | User completes the login step and reaches the admin dashboard. |
| T13 | From the Admin Dashboard, review the summary cards (reports this week, most-reported class, pending review). | FR-12 | User can correctly read and interpret the summary numbers. |
| T14 | From the Manage Classes table, select a class and edit it: update its status and add a student-facing note. | FR-08 | User completes the status update using the correct controls. |
| T15 | Save the admin status update and confirm a confirmation message appears. | FR-08, FR-11 | User successfully saves and recognizes the confirmation screen. |

## 4. Observation Notes
Record where the tester hesitates, clicks the wrong place, asks questions, or gives useful feedback. Based on the pilot sessions already recorded in `experiment-results.xlsx`, pay particular attention to:
- **T10 (report form required fields):** more than one tester hesitated over whether Description was optional, relying on the character-limit hint rather than a clear label — watch for this same hesitation with new testers.
- **T10 (validation):** since the form is a static mockup with no live validation, note any tester who expects an inline error message and doesn't get one — this is expected in this round, but should be logged as a known gap.
- General pattern so far: tasks involving the schedule view and status labels (T01–T08) are completed quickly and confidently; tasks involving form input and admin actions (T10, T12, T14) take longer and get lower ease ratings — worth watching whether this holds across more testers.

## 5. Closing Questions
- What was easy to understand?
- What was confusing?
- Which feature was most useful?
- What should be improved before the final prototype?
