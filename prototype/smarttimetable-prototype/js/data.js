/* SmartTimetable — sample data
   Embedded as JS (not loaded via fetch) so the prototype works when opened
   directly from disk (file://) as well as from a local server. See
   /docs/data-structure.md for the field definitions this follows. */

const BASE_CLASSES = [
  { id: "ict105-130", course_code: "ICT 105", class_name: "Fundamental Technology Entrepreneurship",
    section: "130", lecturer: "Dr. Herison", room: "3-216D",
    slots: [{ day: "Monday", time: "09:00–11:45" }], status: "Confirmed", note: "" },
  { id: "irs164-900", course_code: "IRS 164", class_name: "Digital Skills in Everyday Life",
    section: "900", lecturer: "Team Dr. Kritsada", room: "6-A501",
    slots: [{ day: "Monday", time: "12:00–14:45" }], status: "Confirmed", note: "" },
  { id: "ile126-900", course_code: "ILE 126", class_name: "English in TED",
    section: "900", lecturer: "A. Timothy", room: "11-208", old_room: "11-304",
    slots: [{ day: "Monday", time: "15:00–17:45" }], status: "Room Changed",
    note: "Moved from Room 11-304 to Room 11-208 after a student report on 03 Jul 2026." },
  { id: "ict111-130", course_code: "ICT 111", class_name: "Introduction to Information Technology",
    section: "130", lecturer: "Dr. Herison", room: "11-A504",
    slots: [{ day: "Tuesday", time: "09:00–11:45" }, { day: "Thursday", time: "09:00–11:45" }],
    status: "Confirmed", note: "" },
  { id: "ict402-132", course_code: "ICT 402", class_name: "Research Methodology",
    section: "132", lecturer: "Dr. Brillel", room: "6-302B",
    slots: [{ day: "Tuesday", time: "12:00–14:45" }, { day: "Thursday", time: "12:00–14:45" }],
    status: "Confirmed", note: "" },
  { id: "ict401-132", course_code: "ICT 401", class_name: "Seminar in ICT",
    section: "132", lecturer: "Dr. Suttisak", room: "11-304",
    slots: [{ day: "Tuesday", time: "15:00–17:45" }], status: "Cancelled",
    note: "Cancelled by the lecturer for this week. No make-up session scheduled yet." },
  { id: "ict110-130", course_code: "ICT 110", class_name: "Web Systems and Technologies",
    section: "130", lecturer: "Dr. Todsanai", room: "11-A504",
    slots: [{ day: "Wednesday", time: "09:00–11:45" }], status: "Confirmed", note: "" },
  { id: "ict105-131", course_code: "ICT 105", class_name: "Fundamental Technology Entrepreneurship",
    section: "131", lecturer: "Dr. Herison", room: "3-216D",
    slots: [{ day: "Wednesday", time: "12:00–14:45" }], status: "Confirmed", note: "" },
  { id: "ict401-131", course_code: "ICT 401", class_name: "Seminar in ICT",
    section: "131", lecturer: "Dr. Suttisak", room: "11-305",
    slots: [{ day: "Wednesday", time: "15:00–17:45" }], status: "Confirmed", note: "" },
  { id: "ite201-130", course_code: "ITE 201", class_name: "IT Community",
    section: "130", lecturer: "Dr. Herison", room: "11-302",
    slots: [{ day: "Thursday", time: "15:00–17:45" }], status: "Confirmed", note: "" }
];

const ISSUE_TYPES = [
  "Wrong room listed",
  "Wrong time listed",
  "Class was cancelled",
  "Wrong lecturer listed",
  "Other"
];
