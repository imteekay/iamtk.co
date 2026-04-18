---
name: habit-tracker-add-entry
description: >-
  Appends new daily rows to iamtk.co habit arrays in data/habit-tracker/*.ts.
  Inserts before the year-end sentinel row. Use when logging habits, updating
  habit-tracker data, or when the user mentions sunscreen, drink-water, running,
  read-book, or other files under data/habit-tracker/.
---

# Habit tracker — add a daily entry

## Files and layout

- Location: `data/habit-tracker/*.ts` (one file per habit).
- Each file ends with a **sentinel** row (not a real log): `{ date: '2026-12-31', count: 1, level: 4 }`.
- **Never** remove or move that sentinel; **never** append after it.
- The **last real entry** is always the **second-to-last** object in the array (the line immediately above the sentinel).

## Before editing

1. **Today’s date**: Use the date from user/chat context when provided (e.g. “Today’s date” in user_info). If missing, ask the user for `YYYY-MM-DD` or confirm you should use the system date.
2. **Which habit(s)**: If the user names one file (e.g. `sunscreen.ts`), only edit that file. If they say “all habits” or “every habit”, apply the same insertion to each `data/habit-tracker/*.ts` file.

## Insertion rule

Insert **one new line** after the last real entry and **before** the sentinel:

```ts
  { date: 'YYYY-MM-DD', count: 1, level: 4 },
```

Preserve existing formatting: two spaces before `{`, trailing comma on the new line, comma kept on the previous last-real line.

## Validation

- If the last real entry’s `date` **equals** the new date, **do not** add a duplicate; tell the user it’s already logged and ask whether to change `count`/`level` instead.
- If the new date is **before** the last real date, warn that rows are usually chronological; ask whether they want a backfill or to fix order manually.
- If the new date is **after** the last real date (normal case), proceed after confirmation.

## Export names (do not rename)

Match each file’s existing `const` and `export default` names, e.g. `readBook` in `read-book.ts`, `studyMl` in `study-ml.ts`, `intermittentFasting` in `intermittent-fasting.ts`.

## Checklist

- [ ] Identified file(s) under `data/habit-tracker/`
- [ ] Confirmed target date (`count: 1`, `level: 4` unless user overrides)
- [ ] Inserted the new row **above** `{ date: '2026-12-31', count: 0, level: 0 }`
- [ ] Left sentinel as the last element
