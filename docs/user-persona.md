# Lab 04 - User Persona

> SmartTimetable - Digital Class Schedule and Room FInder

## 1. Persona Name
Yu, Year 1 International Undergraduate Student

## 2. User Type
A university freshman who relies heavily on digital tools but struggles with unpredictable, uncoordinated campus schedule changes.

## 3. Background and Context
- Where does this user experience the problem?

  On campus when trying to locate classrooms, lecture halls, or navigating between different university faculties.
- When does the problem usually happen?

  During the university week when classes are suddenly cancelled, rescheduled, or moved to different rooms.
- What digital tools does this user already use?

  Official university portals (RSU Connect, intranet, registration website), downloadable PDF timetables, Google Calendar, and LINE group chats.

## 4. Goals
- What does the user want to achieve?
- What would make the situation easier or faster for the user?
  To have a single, reliable source of truth for daily schedules that updates automatically.
  To avoid wasting time walking to the wrong classroom or showing up to a cancelled lecture.
  To receive immediate, trustworthy alerts regarding sudden timetable changes directly on their phone.
  

## 5. Pain Points from Lab 03 Evidence
| Pain Point | Evidence ID / Respondent | Explanation |
|---|---|---|
| Outdated Official Systems | Lab 03 Summary / Survey Respondents | Existing platforms like RSU Connect and the intranet frequently display outdated semester data or fail to show correct room assignments. |
| Negative Time Impact | Lab 03 Discovery Summary | Schedule discrepancies lead directly to stressful consequences: arriving late, missing parts of lectures, and wandering to wrong rooms. |
|Fragmented Communication | Lab 03 "Weak Evidence" Section | Critical updates are split across different formats; some users want instant push notifications, while others prioritize map searches or calendar syncing. |

## 6. Current Alternatives / Workarounds
| Current Alternative | Weakness / Limitation | Evidence |
|---|---|---|
| Official PDF Timetable & Portals | Entirely static. Completely fails to reflect real-time changes or sudden room double-bookings. | Main Repeated Problem |
| LINE Group Chats & Asking Peers | Highly informal and inconsistent. Relies on classmates or lecturers manually pushing updates, which clutters chat logs. | Main Current Workarounds |
| Physical Verification | Requires the user to waste physical energy and time walking to the student center just to check room details. | Main Current Workarounds |


## 7. Design Implications
- What should the system/app/platform support?
  The platform must dynamically override stale university data to provide an accurate, live-updating schedule view. It needs a flexible notification or widget engine to support push notifications, mobile-friendly layouts, and calendar syncing.
- What should the team avoid?
  Avoid assuming all students face this issue with the same daily frequency, as findings show it ranges from "almost never" to "all the time." Do not build an overly rigid system that relies strictly on a single API without fallback manual validation.
- Which user need is most important for the MVP?
  A highly responsive, mobile-readable digital timetable that aggregates schedule data cleanly and clearly flags any real-time cancellations or room adjustments.
