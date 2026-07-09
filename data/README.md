# Data

This folder contains all customer discovery evidence and sample datasets for the SmartTimetable project, including survey responses, validation data, and sample records used to demonstrate the data structure.

## Files

| File | Description |
|---|---|
| `raw-responses.xlsx` | Raw survey responses collected from students, lecturers, and staff regarding their experience with the current PDF timetable and university scheduling systems |
| `customer_segments_value.csv` | The three customer segments (Student, Report submitter, Admin), their needs, expected value, and possible channel |
| `smarttimetable_sample_records.csv` | Sample Report entity records (course, room, issue type, status, admin action, priority) matching the fields defined in `/docs/data-structure.md` |

## Survey Overview

- **Total responses collected:** 21
- **Respondent breakdown:** 18 students, 2 lecturers, 1 staff member
- **Survey questions used:** see `/docs/survey-questions.md` for the full organized question list
- **Collection method:** Google Form distributed to students, lecturers, and staff

## Sample Data Overview

- `customer_segments_value.csv` and `smarttimetable_sample_records.csv` are data created in Lab 06 to demonstrate the entities and fields defined in `/docs/data-structure.md`
- These are not survey results — they illustrate what real Class and Report records will look like once the prototype is connected to live data

## Related Documentation

The analysis built from this raw data is documented in the `/docs` folder:
- `/docs/assumption-evidence-table.md` — compares team assumptions against actual survey evidence
- `/docs/customer-discovery-summary.md` — high-level summary of findings and next steps
- `/docs/problem-notes.md` — detailed breakdown of target respondents, pain points, workarounds, and consequences
- `/docs/data-structure.md` — entity and field definitions that the sample dataset files follow
