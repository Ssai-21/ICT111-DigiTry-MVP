# Selected Semester Project Opportunity

## Selected Project Title
SmartTimetable – Digital Class Schedule and Room Finder

## Target User
University students, lecturers, and academic staff who rely on the official class timetable to plan their day, find their classroom, and stay updated on schedule changes.

## Problem Statement
Students and lecturers currently receive their class timetable as a static PDF document distributed at the start of each semester. This PDF does not update when a class is moved, cancelled, or rescheduled, is difficult to search through on a phone, and gives no way to quickly check room availability or see a personalized daily view. As a result, students often rely on screenshots, memory, or asking classmates to figure out where and when their next class is.

## Current Alternative
Students download or screenshot the official PDF timetable and refer back to it manually throughout the semester. Any last-minute changes to time or room are communicated informally through group chats or verbal announcements in class, since the original PDF is never updated to reflect these changes.

## Proposed IT Solution
A web-based application that converts the static PDF timetable into a searchable, personalized digital schedule. Students and lecturers can view their own classes in a clean weekly or daily layout, search for a room to see what is scheduled there, and see clearly which entries are unchanged from the original PDF versus updated. The team will manually digitize sample timetable data from the original PDF to populate the prototype.

## Why This Opportunity Was Selected
Using the NUF (New, Useful, Feasible) scoring framework, SmartTimetable scored highly across all three criteria. It is **New** because it transforms a static, unsearchable PDF into an interactive, personalized digital tool, which is a clear improvement over the current alternative. It is **Useful** because every student and lecturer depends on the timetable regularly, making the problem widely felt and easy to validate. It is **Feasible** because the team already has access to a real PDF timetable to use as source data, and the core functionality — displaying and searching schedule data — can be built using basic web development and database skills the team already has or is learning in this course. Compared to the other ideas scored, SmartTimetable ranked at the top of the scoring matrix due to this strong balance of impact and buildability.

## Why This Is Feasible Without IoT or Advanced Cybersecurity
This project requires no physical hardware, sensors, or IoT integration — the entire system is built from data extracted from the existing PDF timetable and displayed through a standard web interface. Security requirements are minimal: there is no sensitive personal data beyond class schedules, so basic access control (or no login at all for an MVP) is sufficient. The core technical work is limited to structuring timetable data into a database table and building simple display, search, and filter features, which is well within the scope of standard web development skills using HTML/CSS/JS and a basic database such as MySQL or Firebase.

## Possible MVP Type
HTML/CSS/JS prototype

## Initial Validation Plan for Lab 03
**Who will the team ask?**
A small group of classmates and at least one lecturer who currently use the printed or PDF timetable, to confirm the problem is real and understand their current habits.

**What evidence will the team collect?**
Short survey or interview responses asking how often students check their timetable, how they currently deal with last-minute schedule changes, and whether they would prefer a searchable digital version. Screenshots or notes from these conversations will be saved as evidence in the `/data` folder.

**What question must be answered first?**
Whether students and lecturers actually struggle with the current PDF-based timetable system enough to want a digital alternative, or whether the existing method is "good enough" that the proposed solution would not add meaningful value.
