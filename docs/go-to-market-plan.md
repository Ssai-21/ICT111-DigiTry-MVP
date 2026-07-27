
# Digital Go-to-Market Plan

## Product / Prototype Name
SmartTimetable (Team DigiTry)

## Target Early Users
RIC students currently enrolled in classes affected by the PDF timetable's accuracy problem — starting with the team's own sections (ICT111, ICT402, etc.), since they already feel the problem firsthand and can give fast, informed feedback. Lecturers and admin/staff are a secondary early-user group, needed specifically to test the report-review and status-update workflow that students never see.

## Main Value Proposition
SmartTimetable replaces the static, easily-outdated PDF timetable with a searchable, live-status class schedule — so students always know whether a class is actually happening as listed.

## Channel Plan
| Channel | Target User | Message Angle | User Action Expected | Metric to Track | Why This Channel Fits |
| --- | --- | --- | --- | --- | --- |
| ICT111 Class Group Chat | Students in the team's own sections | Save time and avoid wrong-room trips | Click the landing page link | Clicks / demo views | Already the group's main communication channel; highest-trust audience |
| Campus QR Poster | Students on campus generally | Check the real class status before walking there | Scan QR to open landing page | QR scans / landing page views | Placed near the problem context (classroom buildings), catches students in the moment they'd need it |
| Instagram Story | Wider RIC student community | A live status label for every class | Visit landing page | Story clicks / landing page views | Familiar, low-friction channel students already check daily |
| RIC Student Line Group | Students outside the team's own sections | Testing a class prototype, feedback wanted | Try the prototype, give feedback | Demo attempts / feedback responses | Reaches students who wouldn't otherwise see it, tests whether the pitch works without an existing personal connection |
| Word of Mouth | Classmates of students who already tried it | Faster than explaining the PDF | Ask a friend to demo it | Demo attempts | Costs nothing, and peer recommendation carries more weight than a poster for a small class project |

## Launch Sequence
1. Finalize the landing page (`/landing-page/index.html`) and confirm the "Try the Prototype" CTA links to the working prototype.
2. Share to the ICT111 class group chat first — the highest-trust, easiest-to-reach channel — before wider channels.
3. Post the campus QR poster and Instagram story once initial class-chat feedback confirms the demo works smoothly end to end.
4. Share in the wider RIC Student Line group and rely on word of mouth to extend reach beyond the team's own sections.
5. Track response using data/acquisition-metrics.csv (views, CTA clicks, demo attempts, feedback responses, signups/testers per channel).
6. Collect feedback through the same report form and testing pattern used in Lab 08 validation.
7. Revise the headline, CTA wording, or a specific prototype screen if a channel's click-through or demo-attempt rate comes in well below target (see `docs/acquisition-metrics.md`).

## Risk and Mitigation
- **Risk:** A promoted link reaches students outside RIC or outside the target course, generating views that don't reflect real target-user interest. **Mitigation:** Prioritize the ICT111 class chat and RIC-specific channels (QR poster on campus, RIC student Line group) over broad public social media.
- **Risk:** Students try the prototype once, hit a rough edge (e.g. the still-open report form validation visibility issue from Lab 08), and don't come back. **Mitigation:** Fix known usability issues before wider promotion, and treat the class-chat share as a soft launch to catch problems before the QR poster/Instagram push.
- **Risk:** Admin/staff testers are harder to reach than students, since there are fewer of them and less existing channel overlap. **Mitigation:** Reach admin/staff testers directly (in person or by direct message) rather than relying on broadcast channels, same as the Lab 07/08 experiment plan already did.
- **Risk:** Promoting a class MVP prototype could be mistaken for a real, production-ready university system. **Mitigation:** Every channel message and the landing page itself are explicit that this is a class prototype being tested, not an official RIC system.
