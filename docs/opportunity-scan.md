# Lab 02 Opportunity Scanning
## Ideas Reviewed from Lab 1
| Idea | Problem Area | Target User | Current Alternative | Initial Technology Direction |
|---|---|---|---|---|
| Idea 1: SmartTimetable | Students and lecturers have no unified, real-time source for class schedules, room assignments, and last-minute changes | Students, lecturers, and staff | PDF timetables, LINE group chats, word-of-mouth updates | Web application with cloud database and LINE Notify alerts |
| Idea 2: MentalCare | Students face academic stress and emotional difficulty but lack a low-barrier way to check in on their wellbeing or find support | Students; secondarily, counselors and welfare staff | In-person visits to the counseling center; no digital tracking option | Web application with anonymous check-in and cloud database |
| Idea 3: EventHub | Campus event promotion is fragmented across social media and LINE, causing students to miss events they'd want to attend | Students, student clubs, and faculty units as organizers | Individual Facebook/Instagram posts and LINE group announcements | Web application with admin posting interface and RSVP system |
| Idea 4: PeerNote | Students who miss class or struggle to keep up have no structured way to access organized, searchable lecture notes | Students | Informal photo/PDF sharing in LINE chats and personal Drive links | Web application with file upload, tagging, and search |
| Idea 5: QuickPoll | Lecturers get no real-time feedback on student understanding, and students are uncomfortable signaling confusion aloud | Lecturers and students | End-of-semester evaluation forms; raising hands in class | Web application with anonymous live polling and real-time results |
| Idea 6: LinguaHub | Students lack consistent, low-pressure opportunities to practice English speaking and writing | Students, especially non-native English speakers | Informal practice with friends, classroom participation only | Web application with peer matching and scheduling |

## Observed Problems Table
| No. |                                        Observed Problem                                        |                    Target User                   |                        Current Alternative                        |                      Possible IT Solution                      |                Feasible Technology                |
|:---:|:----------------------------------------------------------------------------------------------:|:------------------------------------------------:|:-----------------------------------------------------------------:|:--------------------------------------------------------------:|:-------------------------------------------------:|
|   1 | No unified, real-time source for class schedules, room assignments, and last-minute changes    | Students, lecturers, and staff                   | PDF timetables, LINE group chats, word-of-mouth                   | SmartTimetable: real-time schedule viewer with room finder     | Web app, cloud database, LINE Notify API          |
|   2 | Students face academic stress with no low-barrier way to check in on wellbeing or find support | Students, counselors and welfare staff           | In-person visits to the counseling center                         | MindCare: anonymous mood check-in with trend tracking          | Web app, cloud database                           |
|   3 | Campus event promotion is fragmented, causing students to miss events they'd want to attend    | Students, clubs and faculty units                | Individual Facebook/Instagram posts, LINE announcements           | EventHub: event discovery and RSVP platform                    | Web app, cloud database, RSVP/notification system |
|   4 | No structured way to access organized, searchable lecture notes when missing class             | Students                                         | Informal photo/PDF sharing in LINE chats and personal Drive links | PeerNotes: collaborative notes upload, tag, and search         | Web app, cloud file storage, search/tagging       |
|   5 | Lecturers get no real-time feedback on student understanding during class                      | Students and Lecturers                           | End-of-semester evaluations, raising hands in class               | QuickPoll: anonymous live polling with instant results         | Web app, real-time database, QR code access       |
|   6 | Students lack consistent, low-pressure opportunities to practice English speaking and writing  | Students, especially non-native English speakers | Informal practice with friends, classroom participation only      | LinguaHub: peer matching for English practice with AI feedback | Web app, cloud database                           |

## Prototype Feasibility Table
 
| Idea | Prototype Type | Tools Needed | Data Needed | Difficulty | Feasible? |
|---|---|---|---|---|---|
| Idea 1: SmartTimetable | Clickable web prototype with schedule viewer and admin panel | HTML/CSS/JS or React, MySQL or Firebase, LINE Notify API | Sample class schedules, room list, student timetable data | Medium | Yes |
| Idea 2: MindCare | Web prototype with check-in form and trend chart | HTML/CSS/JS, Firebase or MySQL, basic charting library | Sample mood check-in entries, anonymized usage data | Low | Yes |
| Idea 3: EventHub | Web prototype with event listing and RSVP form | HTML/CSS/JS, MySQL or Firebase, image upload | Sample event listings from clubs/faculties | Low | Yes |
| Idea 4: PeerNotes | Web prototype with file upload and search/tag system | HTML/CSS/JS, Firebase Storage or MySQL | Sample lecture notes files, course/topic tags | Low | Yes |
| Idea 5: QuickPoll | Web prototype with poll creation and live results display | HTML/CSS/JS, Firebase real-time database or WebSocket | Sample poll questions and responses | Medium | Yes |
| Idea 6: LinguaHub | Web prototype with peer matching board and writing feedback demo | HTML/CSS/JS, MySQL or Firebase | Sample student profiles, sample writing submissions | Medium | Yes |
