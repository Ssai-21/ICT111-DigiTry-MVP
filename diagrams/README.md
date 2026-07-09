# Diagrams Folder

This folder contains the diagrams for the SmartTimetable project.

## Files

| File | Description |
|---|---|
| `user-flow.png` | Diagram of the primary user journey through the app, from homepage to confirmation |
| `use-case-diagram.png` | Diagram showing the Student, Lecturer, and Admin actors and the use cases each one performs |
| `data-flow.mmd` | Mermaid source for the report data flow: submission, validation, storage, and admin review through to the dashboard |
| `system-architecture.mmd` | Mermaid source for the system architecture: student/lecturer and admin interfaces, the JSON/localStorage data store, and each connected screen |

## Diagram Overview

- **User flow diagram** — shows how a student moves through the app step by step
- **Use case diagram** — shows which actor interacts with which feature
- **Data flow diagram** — shows how a mismatch report moves from submission through validation, storage, and admin review to the dashboard
- **System architecture diagram** — shows how the user interface, data storage, and admin panel connect based on the Lab 06 technical architecture decision

## Notes

- Diagrams should be added to this folder as image files (e.g. `.png`) or as source files (e.g. `.mmd`, `.drawio`)
- `.mmd` files can be imported directly into draw.io (Arrange > Insert > Mermaid) or the Mermaid Live Editor to generate/export a `.png`
- This README should be updated whenever a diagram is added, removed, or renamed
