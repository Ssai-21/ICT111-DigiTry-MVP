
# Lab 08 - MVP Decision

## 1. Decision
Choose one:

- [ ] Continue with the current MVP direction
- [x] Continue with minor revisions
- [ ] Revise major workflow or feature
- [ ] Collect more evidence before implementation
- [ ] Pivot or change the solution direction

## 2. Evidence Supporting the Decision
All five success metrics defined in docs/success-metrics.md were met or exceeded in this round: task success rate 95% (vs. 70% target), search success 100% (vs. 70% target), usability 4.1/5 (vs. 4/5 target), and feature usefulness 4.5/5 (vs. 4/5 target). This is strong enough evidence that the core concept and main workflow don't need to change. The one metric with no safety margin — form completion accuracy, at exactly 80% — combined with the same two friction points (report form validation clarity, admin edit field order) showing up independently across different testers, is why the decision is "minor revisions" rather than "continue as-is": both issues are small and fixable, but worth fixing before this number gets relied on again.

## 3. Requirements to Keep
| Requirement ID | Reason |
|---|---|
| FR-06 | 100% search success rate (course code and room number), high ease/usefulness ratings |
| FR-07 | Class detail view fully validated — testers correctly read and explained every status (Confirmed, Room Changed, Cancelled) |
| FR-08 | Status labels understood immediately by every student tester |
| FR-12 | Admin dashboard summary cards rated 5/5 usefulness, no confusion reported |

## 4. Requirements to Improve
| Requirement ID | Problem Found | Improvement Needed |
|---|---|---|
| FR-10 | 1 of 5 report submissions failed from a missed required-field error; a separate tester unsure if Description was optional | Make required-field markers and the inline error state more visually prominent |
| FR-09 | Two admin sessions flagged the same confusion about the New Room field's position relative to Room Changed | Reorder or auto-reveal the New Room field only when Room Changed is selected |

## 5. Prototype Changes Before Next Lab
1. Increase the visual weight of required-field markers and inline error messages on the report form (`06-report-form.html` / `report.html`)
2. Auto-reveal or reposition the "New Room" input on the admin edit form so it only appears once "Room Changed" is selected
3. Add a short "(optional)" hint next to the Description field
4. Re-run the report-form task with a fresh set of testers to confirm the fix, since the current 80% completion rate has no margin above target

## 6. GitHub Issues Created
| Issue Title | Assigned Member | Requirement ID |
|---|---|---|
| | | |
| | | |
