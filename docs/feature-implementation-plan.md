# Lab 10 - Feature Implementation Status

## Purpose
Use this file to prove that your prototype implementation is connected to `system-requirements.md`.

| Req ID | Required Functionality | Prototype Screen/Module | Current Status | Evidence | Next Fix Needed |
|---|---|---|---|---|---|
| FR-01 | Homepage or landing screen | /prototype/index.html (`#home`) | Working Draft | Home view renders on load and via the Home tab | None |
| FR-02 | Primary user pathway | /prototype/index.html (tab bar + hash router) | Working Draft | Persistent tab bar with real links across every view; script.js router handles all navigation | None |
| FR-03 | User input or data submission | /prototype/index.html (`#report`) | Working Draft | Validated form, saves to localStorage via script.js | Make required-field indicators more visually prominent (Lab 08 finding) |
| FR-04 | Data storage or simulated storage | /prototype/script.js (`BASE_CLASSES` + `localStorage`) | Working Draft | Sample data embedded in `script.js`; reports/overrides in localStorage | Document that data does not sync across devices (already noted in `technical-architecture.md`) |
| FR-05 | View records or information list | /prototype/index.html (`#schedule`) | Working Draft | Dynamic schedule list rendered from data | None |
| FR-06 | Search, filter, or category function | /prototype/index.html (`#schedule`) | Working Draft | Live search + day-chip filters, client-side | None |
| FR-07 | Detail view for each record | /prototype/index.html (`#class`) | Working Draft | One dynamic view showing live status for any class | None |
| FR-08 | Status or progress tracking | /prototype/index.html (`#class`, `#admin-edit`) | Working Draft | Confirmed / Room Changed / Cancelled shown live; admin can update it | Admin edit form's New Room field order confused testers — reorder/auto-reveal (`docs/analytics-insights.md`) |
| FR-09 | Admin or manager function | /prototype/index.html (`#admin-login`, `#admin-dashboard`, `#admin-edit`) | Needs Fix | Dashboard and edit flow fully functional; route guard blocks direct access without a login flag | Login has no real authentication — add real access control before production (`docs/risk-register.md` R-04, `docs/security-risk-check.md`) |
| FR-10 | Validation and error prevention | /prototype/index.html (`#report`) | Working Draft | Required fields block submission with inline error | Make the error state larger/more visible — form completion accuracy landed exactly at the 80% target with no margin (Lab 08) |
| FR-11 | Confirmation or feedback message | /prototype/index.html (`#report-confirmation`, `#admin-confirmation`) | Working Draft | Both confirmation views are dynamic, not static text | None |
| FR-12 | Dashboard or summary view | /prototype/index.html (`#admin-dashboard`) | Working Draft | Summary cards, reports table, and classes table computed live | None |
| FR-13 | UI consistency | /prototype/style.css (shared across all views) | Working Draft | One stylesheet, one shell (`index.html`) — every view is visually consistent by construction | None |
| FR-14 | Mobile-friendly/responsive design | /prototype/style.css | Working Draft | @media (max-width: 780px) breakpoints present and tested via browser resize | Needs a manual test pass on an actual phone, not just resized browser |
| FR-15 | Privacy and responsible data handling | /prototype/index.html (`#report`), docs/ | Working Draft | No name/ID/email fields anywhere; see `docs/data-handling-policy.md`, docs/privacy-and-data-protection.md | Add an "(optional)" hint on the Description field (open item from Lab 09 review) |
| FR-16 | Final prototype traceability | Documentation (`docs/`) | In Progress | `docs/screen-inventory-checklist.md`, `docs/feature-requirement-mapping.md`, this file | Keep this table updated every remaining lab |

## Summary
- **Features working today:** FR-01, FR-02, FR-03, FR-04, FR-05, FR-06, FR-07, FR-08, FR-10, FR-11, FR-12, FR-13, FR-14, FR-15 — 14 of 16 requirements have a working, connected implementation, each with at most a small known polish item.
- **Features partially working:** FR-09 (admin function is fully built and usable, but access control is simulated, not real).
- **Features not yet started:** None — every required screen/view has at least a working draft.
- **Features requiring instructor feedback:** FR-09 (is a simulated admin login acceptable for this MVP stage, or does the rubric expect real authentication before Lab 10 is complete?); FR-14 (is browser-resize testing sufficient evidence, or is real-device testing expected?).
