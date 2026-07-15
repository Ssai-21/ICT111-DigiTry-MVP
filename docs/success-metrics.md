# Success Metrics and Decision Rules

## 1. Success Metrics
| Metric ID | Metric | Target | How to Measure | Related Requirement |
|---|---|---:|---|---|
| M-01 | Task completion rate (across all 15 tasks) | 70% or higher | Completed tasks / total tasks, from `experiment-results.xlsx` | FR-02 |
| M-02 | Form completion accuracy | 80% or higher | Valid, correctly filled submissions / total submissions | FR-03, FR-10 |
| M-03 | Search success rate | 70% or higher | Testers who find the target class by course code or room / total testers | FR-06 |
| M-04 | Usability rating (task ease) | Average 4 out of 5 | Average of the task ease rating (1–5) per task in `experiment-results.xlsx` | FR-13 |
| M-05 | Feature usefulness rating | Average 4 out of 5 | Average of the search-useful and status-clear ratings in `feedback-form.md` | FR-06, FR-08 |

*Baseline note: the current sample pilot data (3 testers, in `data/experiment-results.xlsx` and `data/feedback-form.csv`) already shows M-01 at 100%, M-03 at 100%, M-04 at 4.2/5, and M-05 at ~4.67/5 — but the report form task (tied to M-02) rated lowest at ~3/5, and completion accuracy can't be measured yet since the form is a static mockup with no live validation. These are illustrative pilot numbers, not yet a full real test round.*

## 2. Decision Rules
| Result | Decision |
|---|---|
| Metrics meet target | Continue to implementation sprint. |
| Some metrics fail | Revise wireframe, flow, labels, or feature priority before implementation. |
| Most metrics fail | Revisit requirements, user stories, and problem evidence before building. |
