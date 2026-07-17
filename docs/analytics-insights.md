# Lab 08 - Analytics Insights

## 1. Analytics Question
What did users do, say, and prove when testing the SmartTimetable MVP direction?

## 2. Metrics Calculated
| Metric | Formula / Method | Result |
|---|---|---|
| Total test users | Count unique Test_User_ID | 7 (5 Student, 2 Admin/Staff) — 20 total task attempts logged |
| Completed tasks | Count Task_Completed = Yes | 19 of 20 |
| Task success rate | Completed tasks / total attempts | 95% |
| Average feedback score | Average of Usefulness_1_5 | 4.5 / 5 |
| Average ease of use | Average of EaseOfUse_1_5 | 4.1 / 5 |
| Confusion points | Count attempts with a non-"None" confusion point | 3 of 20 (15%) |

## 3. Findings
1. **The core student loop is fully validated.** Every schedule search, class detail view, and status check attempt succeeded (100%), with ease-of-use ratings of 4–5 across the board — students consistently found what they needed without hesitation.
2. **Form completion accuracy is right at target, with no margin.** Of 5 report-submission attempts, 4 succeeded (80% — exactly the success-metrics.md target). The one failure and a separate near-miss both trace back to the same cause: testers weren't sure which report-form fields were required.
3. **Admin/staff testers rated the tool highly but hit the same friction point twice.** Both admin sessions that edited a class flagged uncertainty about the New Room field's order relative to selecting "Room Changed" — a repeatable, fixable UI issue rather than random noise.
4. **Interest is strong beyond just task success.** 95% of testers said they'd use SmartTimetable again, exceeding the feature-usefulness target (4/5) with an average of 4.45/5.

## 4. Interpretation
The results support the core product idea: students can reliably find and trust their schedule, and admin/staff can act on reports through the dashboard. Nothing in this round suggests the concept or main workflow is wrong. The two issues found — report form field clarity and admin edit field order — are both small, well-understood interface fixes, not evidence of a bad requirement or a need to pivot. Because form completion accuracy sits exactly at its 80% target with no safety margin, it's the one area worth fixing before relying on that number again in a future test round.

## 5. Requirements Affected
| Requirement ID | Evidence | Action Needed |
|---|---|---|
| FR-10 | 1 of 5 report submissions failed from a missed required-field error; another tester was unsure if Description was optional | Make required-field markers and the inline error state more visually prominent |
| FR-09 | Two separate admin sessions flagged the same confusion about the New Room field's position relative to the Room Changed option | Reorder or auto-reveal the New Room field only when Room Changed is selected |

## 6. Next Prototype Improvement
1. Make the report form's required-field indicators and inline error state larger/more visually distinct (not just small red text easy to miss)
2. Auto-reveal or reposition the "New Room" field on the admin edit form so it only appears once "Room Changed" is selected
3. Add a short inline hint under Description ("Optional — add more detail if needed")
4. Re-test the report form specifically with fresh testers to confirm the fix pushes form completion accuracy comfortably above 80%, not just exactly at it
