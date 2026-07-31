# Final Reflection

## 1. What We Built
SmartTimetable — a single-page web prototype that replaces a static PDF class timetable with a searchable, live-status schedule, plus a report-and-resolve loop connecting students, lecturers, and admin/staff. Beyond the core app, we also built a landing page, a Power BI startup metrics dashboard, and a full documentation trail connecting every screen back to real Lab 03 evidence.

## 2. What We Learned About Users
The problem wasn't felt equally by everyone — some Lab 03 respondents reported almost no issues with the current system, which forced us to prioritize based on evidence rather than assume universal pain. We also learned that students and admin/staff need genuinely different things from the same status system: students want to trust a label at a glance, while admin/staff need to act on a queue of reports.

## 3. What We Learned About Requirements
"Meets the requirement" and "actually works for a real user" aren't the same thing. FR-10 (validation) technically worked from Lab 06 onward, but it took real testers to reveal that a technically-correct error message can still be practically invisible. Our Lab 09 security review also found a real conflict between NFR-07 and how the admin login actually worked — something we wouldn't have caught just by re-reading the requirement text.

## 4. What We Improved After Testing
- Report form validation: added ARIA accessibility in Lab 11, then a real visual highlight after Lab 13 confirmed accessibility alone wasn't enough
- Admin dashboard: went from static mockup data to a seeded, realistic dataset merged with live submissions, plus filter chips and new metrics
- Admin login: moved from an unconditional pass-through to a real credential check, after our own Lab 09 review flagged the gap
- Mobile experience: enlarged day-chip tap targets after Lab 13's first real-device testing round surfaced the issue

## 5. What Was Difficult Technically
Consolidating what started as 9 separate HTML files into a single-page app with hash-based routing was the single biggest rewrite of the project. A close second was discovering that fetch() of a local JSON file silently fails when opened directly from disk — we built a fallback data path so the demo wouldn't break depending on how someone opened it.

## 6. What We Would Improve Next
Real authentication and a real shared database are the two highest-value next steps — both are already scoped in docs/technical-architecture.md as deliberate MVP-stage simplifications, not oversights. We'd also want to run a real channel launch to see whether our go-to-market assumptions about which channels reach students actually hold up, since our current acquisition numbers are seeded sample data.

## 7. Individual Contributions
| Member | Contribution | Evidence Link/Commit/Issue |
|---|---|---|
| Sai Thi Han Win | Built the interactive prototype's data layer, router, admin dashboard logic, and the final round of usability fixes (report form validation, admin field order, real login check) | https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main |
| Soe Yu Nwe | Defined the product concept and requirement mapping, designed the report form, and wrote the go-to-market messaging and landing page copy | https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main |
| Rigzang Lhmao | Maintained documentation and the README across every lab, wrote the wireframe specification, and captured screenshot evidence throughout | https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main |
| Seint Myat Wai | Ran customer discovery, the MVP experiment, and all three rounds of user testing; documented startup metrics and validation results | https://github.com/Ssai-21/ICT111-DigiTry-MVP/commits/main |
