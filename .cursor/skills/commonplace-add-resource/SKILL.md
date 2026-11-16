---
name: commonplace-add-resource
description: >-
  Adds a new resource (book, article, video, podcast, paper) to the iamtk.co
  commonplace book as a Markdown file in content/commonplace/resources/. Use when
  the user feeds a URL or pasted text and wants it added to the commonplace book.
---

# Commonplace book — add a resource

## Files
- Resources: `content/commonplace/resources/<slug>.md` (one file each).
- Allowed topics: slugs in `data/commonplace/topics.ts`.
- Pages derive everything from these files; no other file needs editing.

## Steps
1. Get the content: fetch the URL (WebFetch) or use the pasted text. If it cannot be read, ask the user for notes.
2. Duplicate check: search existing files for the same `url` or `title`. If found, tell the user and ask whether to update it instead.
3. Pick 1-4 topics ONLY from `data/commonplace/topics.ts`. If none fit, propose a new topic and add it to `topics.ts` after the user confirms.
4. Write the file with this format. `slug` is kebab-case of the title, `date` is today (`YYYY-MM-DD`), `type` is one of book, article, video, podcast, paper, other, `rating` is 1-5 (ask if unknown). Never add `placeholder: true`.

```md
---
title: Title
type: book
url: https://...
author: Author
topics: [focus, productivity]
date: 2026-01-31
rating: 4
---

Short personal notes.

## Key ideas
- Concise takeaway in my own words.

> A verbatim quote worth keeping.
```

5. Report the file path and the topic pages it enriches (`/commonplace/<topic>`).

## Rules
- Key ideas: 3-7 bullets, own words. Quotes: verbatim and short.
- Frontmatter values are single-line; `topics` is an inline `[a, b]` list.
