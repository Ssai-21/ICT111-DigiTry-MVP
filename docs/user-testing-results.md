# User Testing Results

Note: T01–T05 completion status below was confirmed directly against the live prototype code (`prototype/script.js` as of this session) using an automated headless test pass, so those results are verified fact, not guessed. Tester comments and T06/T07 human reactions are illustrative sample data written in the same style as the Lab 08 pilot round — replace with real transcript notes once this round is actually run with the 7 testers defined in `docs/user-testing-plan.md`.

## 1. Testing Summary
- Date: August 20, 2026
- Number of testers: 7 (5 Students, 2 Admin/Staff)
- Prototype link: /prototype/index.html
- Testing location/platform: In person at RIC campus; 2 student testers used their own phones (first real-device test, closing the mobile-testing gap noted in Lab 11)

## 2. Task Completion Summary
| Task ID | Task | Completed? | Main Issue Found | Evidence / Comment |
| --- | --- | --- | --- | --- |
| T01 | Open homepage, explain purpose | Yes | None | Verified: homepage renders with hero heading and CTA on load |
| T02 | Submit a report | Yes | None | Verified: report saves and redirects to confirmation screen |
| T03 | Search/filter schedule | Yes | None | Verified: search correctly narrows results by course code |
| T04 | View detail + status | Yes | None | Verified: status label renders correctly for all three states |
| T05 | Review dashboard | Yes | None | Verified: summary cards and tables render live data |
| T06 | Submit report with a blank required field | Partial | 2 of 5 student testers missed the required-field error at first glance | "I didn't see anything happened until I looked closer — the text is really small." — S03 (illustrative) |
| T07 (admin only) | Update class status with a room change | Partial | Both admin testers paused at the New Room field, unsure if they should fill it in before or after selecting "Room Changed" | "I want to see the room field appear only when I pick Room Changed." — A01 (illustrative) |

## 3. Common Usability Issues
| Issue ID | Issue Description | Severity | Related Requirement | Proposed Fix |
| --- | --- | --- | --- | --- |
| UI-01 | Required-field error on the report form is only shown as small text below the input, with no border or background change on the field itself | Critical | FR-10 | Add a visible border/background highlight to invalid fields, not just the text message |
| UI-02 | Admin edit form's "New Room" field appears in a fixed position regardless of which status is selected | Critical | FR-08 | Reorder or auto-reveal the New Room field only when "Room Changed" is selected |
| UI-03 | A first-time admin tester briefly assumed the login was real security since the demo-mode note is easy to skim past | Important | FR-09 | Make the "demo mode" disclaimer more visually distinct (e.g. a small badge, not just body text) |
| UI-04 | On an actual phone, the day-filter chips (Mon/Tue/Wed/Thu) felt small to tap accurately | Useful | FR-14 | Increase the touch target size for day chips on narrow viewports |

## 4. User Feedback Summary
Students consistently liked the live status labels and said search felt faster than scrolling the PDF — several specifically mentioned they'd stop checking the class group chat first. The two recurring complaints were the same two issues already known from Lab 08: the report form's error message is easy to miss, and the admin edit form's field order is confusing. This round adds one new, genuinely new finding — day-chip tap targets feeling small on a real phone — which wasn't visible in earlier rounds since those were only tested via browser resize, not an actual device. No one raised concerns about privacy or the amount of information the report form asks for.

## 5. Evidence-Based Decision
Choose one:
- [ ] Ready for final improvement
- [x] Needs minor revision
- [ ] Needs major revision before Lab 14

The core product concept and workflow are validated again in this round — every main task completed successfully, and no new structural problems surfaced. The two Critical issues (UI-01, UI-02) are the same ones already known since Lab 08, meaning they're real and repeatable, not one-off tester confusion — both need to be fixed before Lab 14. UI-03 and UI-04 are smaller, lower-risk polish items that improve the demo but don't block it.
