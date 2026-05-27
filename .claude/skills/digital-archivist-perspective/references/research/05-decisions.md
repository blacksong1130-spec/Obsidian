# Strategic Decisions: File Lifecycle & Maintenance

## 1. Handling "Expired" or "Overdue" Files
In a digital organization system, managing "decay" is essential.

### Overdue Files (Active)
Files with a `due` date that has passed but are still in `10 Projects` or `20 Areas`:
*   **Identification:** Use a Dataview query to find `due < date(today)` where `status != "completed"`.
*   **Action:** During the **GTD Weekly Review**, these items must be either:
    1.  Rescheduled (update `due` date).
    2.  Downgraded to `Someday/Maybe` (move to `Resources` or update YAML).
    3.  Cancelled (move to `Archives`).

### Expired Files (Inactive)
Files that are no longer relevant but aren't "completed" in the traditional sense (e.g., a subscription that ended, a hobby you've abandoned).
*   **Decision Rule:** If an "Area" has not been touched or maintained for 3+ months, it is considered **Expired**.
*   **Action:** Move the entire Johnny.Decimal category folder from `20 Areas` to `40 Archives`.
*   **Suffixing:** Rename the folder with an `[EXPIRED]` or `[ARCHIVED YYYY-MM-DD]` suffix for clarity.

## 2. The Archival Strategy
The `40 Archives` folder is not a "trash can"; it is a cold storage library.

*   **Yearly Cleanup:** Every December, create a subfolder in `40 Archives` for the current year (e.g., `40 Archives/2023/`).
*   **Preserving Context:** When moving a project to Archives, ensure the "Project MOC" (Map of Content) is updated with a final summary of results.
*   **Johnny.Decimal Permanence:** The JD ID (e.g., `11.01`) should **never** be reused. Even if `11.01` is archived, it remains the permanent address for that specific project's history.

## 3. Maintenance Cadence
*   **Daily:** Capture in `00 Inbox`.
*   **Weekly (GTD Review):** Process `00 Inbox`, check `Overdue` list, move `Completed` projects to `Archives`.
*   **Monthly:** Review `20 Areas` for `Expired` content.
*   **Quarterly:** Audit Johnny.Decimal structure; ensure no more than 10 categories per area.
