# Acquisition Metrics

## Purpose
Define how the group will measure early user interest and landing page performance.

## Required Metrics
| Metric ID | Metric Name | What It Measures | Formula / Counting Method | Data Source | Target / Success Criterion |
| --- | --- | --- | --- | --- | --- |
| M-01 | Landing page views | Number of people who opened the landing page | Count rows in `data/acquisition-metrics.csv`, summed across channels | landing-page/ (manual/channel log) | At least 20 views per channel per week |
| M-02 | CTA clicks | Number of visitors who clicked "Try the Prototype" | cta_clicks / landing_page_views | landing-page/script.js local click log + manual channel log | At least 30% click-through rate |
| M-03 | Demo attempts | Number of users who actually opened the prototype | Count of demo_attempts in data/acquisition-metrics.csv | prototype/ link tracking / manual count | At least 10 attempts across all channels combined |
| M-04 | Feedback responses | Number of users who reported an issue or gave feedback | Count of feedback_responses in `data/acquisition-metrics.csv`, or reports logged in `prototype/data.json`/localStorage | Report form submissions / feedback form | At least 5 responses |
| M-05 | Interest conversion | Percentage of visitors who took the target action (tried the demo) | demo_attempts / landing_page_views * 100 | data/acquisition-metrics.csv | At least 20% conversion |

**Current values from the seeded sample data (`data/acquisition-metrics.csv`, 10 channel-days):** 155 total landing page views, 65 total CTA clicks (42% click-through rate), 41 total demo attempts (26% conversion), 28 total feedback responses.

## Interpretation
What will the group do if the metrics are weak?

- **Low landing page views (M-01):** Shift effort toward the higher-reach channels that are already working — in the sample data, Instagram Story and the RIC Student Line group reach far more people per post than the QR poster does, so lean into those first.
- **Low CTA click rate (M-02):** Revisit the headline or CTA wording in docs/landing-page-content.md — "Stop guessing whether the timetable is still right" is meant to lead with the pain point; if it isn't converting, test a more concrete alternative (e.g. naming the PDF timetable directly).
- **Low demo attempts relative to clicks (M-03):** Check whether the prototype link itself is broken, slow, or confusing on first load — a gap between clicks and attempts points at friction right after the click, not lack of interest.
- **Low feedback responses (M-04):** Make the report form easier to find from inside the demo, or prompt directly for feedback after a few minutes of use, rather than assuming testers will report issues unprompted.
- **Low interest conversion (M-05):** Reconsider whether the channel matches the target user — a channel like a general campus poster reaches people outside RIC or outside the affected courses, diluting conversion even if raw view counts look fine.

Across all five, the team should prioritize fixes to real, already-known issues (the report form's required-field visibility, the admin edit field order — see `docs/risk-register.md`) before assuming a weak metric means the message or channel is wrong, since a rough prototype experience will suppress every metric downstream of the first click regardless of how good the marketing is.
