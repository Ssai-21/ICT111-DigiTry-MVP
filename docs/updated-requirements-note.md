# Updated Requirements Note

## Purpose
Use this file only if Lab 09 review requires a change to `system-requirements.md`.

| Requirement ID | Original Requirement | Proposed Update | Reason for Change | Supporting Evidence | GitHub Issue/Commit | Approved by Team? |
|---|---|---|---|---|---|---|
| NFR-07 | "Even though no advanced cybersecurity implementation is required, the system should avoid exposing unnecessary personal data and should not allow arbitrary users to edit other students' submitted reports." | Add: "For the MVP prototype stage, admin access control is simulated (a pass-through login with no real credential check) rather than a real security boundary; real authentication must be added before any deployment beyond the class demo." | The Lab 09 security review (`docs/security-risk-check.md`) found that any user can currently reach and use admin actions without real authentication, which conflicts with the existing NFR-07 wording as written. Rather than leaving this gap undocumented, the team is recording it as a known, accepted MVP-stage limitation with a clear condition for when it must be fixed. | `docs/security-risk-check.md`, `docs/risk-register.md` (R-04), `prototype/smarttimetable-prototype/admin-login.html` | | |

## Rule
Do not silently change system requirements. Every change must be justified, documented, and traceable.
