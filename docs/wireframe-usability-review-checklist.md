# Wireframe Usability Review Checklist — SmartTimetable



| Check Item | Yes/No | Evidence or Screenshot |
|---|---|---|
| The homepage clearly states the problem and main action. | Yes | `01-home.png` — hero copy states the problem ("replaces the static PDF timetable... a cancelled class or last-minute room change never catches you by surprise") and gives two clear primary actions: "View My Schedule" and "Report a Schedule Issue". |
| The main user pathway can be followed from start to finish. | Yes | Home (`01`) → My Schedule (`02`) → Class Detail (`03`/`04`/`05`) → Report an Issue (`06`) → Report Received (`07`) — each screen links to the next via matching buttons/breadcrumbs. |
| The input form includes required fields and validation feedback. | Yes | `06-report-form.png` — Course Code, Room Number, and Issue Type are marked with `*`; a character-limit hint is shown under Description. Note: since this is a static (non-interactive) mockup, live error-state validation isn't demonstrated yet — only the required-field markers and guidance text. |
| The record list includes search/filter/category controls. | Yes | `02-schedule.png` — search box ("Search by course code, course name, or room") plus day-chip filters (MON/TUE/WED/THU) above the day-grouped class list. |
| The detail view shows full information and current status. | Yes | `03-detail-confirmed.png`, `04-detail-room-changed.png`, `05-detail-cancelled.png` — each shows day/time, room, lecturer, section, and a status banner explaining the current state (including the old vs. new room for the "Room Changed" case). |
| The admin view includes at least one management action. | Yes | `09-admin-dashboard.png` (Edit / Edit Status actions in both tables) and `10-admin-edit.png` (status radio buttons, new room field, notes field, Save Update button). |
| The dashboard shows meaningful summary information. | Yes | `09-admin-dashboard.png` — summary cards for "Reports received this week" (7), "Most-reported class" (ICT 401), and "Reports pending review" (2). |
| Navigation is consistent across screens. | Yes | All 11 screens share the same fixed brand chip ("SmartTimetable") and four-item tab bar (Home / Schedule / Report / Admin), with the current section highlighted as active. |
| The design uses realistic sample data. | Yes | Real RIC course codes, sections, lecturers, and rooms are used throughout (e.g. ICT 111 · Dr. Herison · Room 11-A504; ICT 401 · Dr. Suttisak · Room 11-304). |
| Each screen maps to system-requirements.md. | Yes* | See the "Related Requirements" column in `wireframe-specification.md` (FR-01–FR-12). *Confirm these FR codes match the wording/numbering in your team's actual `system-requirements.md` before final submission. |

