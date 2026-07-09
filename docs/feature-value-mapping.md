# Feature-Value Mapping

| Feature ID | MVP Feature | Requirement ID | User Story ID | User Value | Business / Operational Value | Prototype Screen or Module | Priority |
|---|---|---|---|---|---|---|---|
| F-01 | Submit report form | FR-03 | US-01 | Student can quickly flag a schedule mismatch without needing to know who to contact | System receives structured, categorized issue data instead of scattered chat messages | `06-report-form.html` | Must |
| F-02 | View weekly schedule with search | FR-01, FR-05, FR-06 | US-02 | Student sees all classes for the week in one place and can instantly find a course or room by typing | Reduces repeat questions to the security/admin office about "where is my class" | `02-schedule.html` | Must |
| F-03 | Live class status labels (Confirmed / Room Changed / Cancelled) | FR-07 | US-03 | Student knows at a glance whether to trust the schedule as-is or expect a change, avoiding wasted trips | Gives the institution a visible, trackable record of which classes have active issues at any time | `03-detail-confirmed.html`, `04-detail-room-changed.html`, `05-detail-cancelled.html` | Must |
| F-04 | Admin dashboard with report review and class status update | FR-08, FR-09, FR-12 | US-04 | Indirect value to students — issues they report actually get fixed and reflected system-wide | Gives academic admin a single, auditable place to review incoming reports and close the loop, replacing informal verbal/chat corrections | `09-admin-dashboard.html`, `10-admin-edit.html` | Must |

## Reflection

**Which feature creates the strongest user value?**
F-03 (live status labels) creates the strongest direct user value, because it's the feature students interact with the most and rely on before every class — a clear Confirmed/Room Changed/Cancelled label is what actually prevents someone from showing up to the wrong room or an empty classroom, which is the core problem the case is built around.

**Which feature creates the strongest business or operational value?**
F-04 (admin dashboard and status update) creates the strongest operational value, since it's the mechanism that turns scattered, undocumented reports into a single auditable process the academic office can manage and track — without it, the whole system would just be a nicer-looking version of the same unreliable chat-group announcements it's meant to replace.

**Which required feature is still weak or unclear?**
F-01 (the report form) is still weak in the current prototype because it's a static mockup — there's no real validation logic, duplicate-report detection, or confirmation of how conflicting reports (e.g. two students reporting different room numbers for the same class) would be resolved by admin. This needs to be defined more clearly before moving from wireframe to a working prototype.
