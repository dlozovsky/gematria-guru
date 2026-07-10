# URL Remediation Sheet

Generated from the codebase (`src/app/sitemap.ts`, route files, `src/lib/blogFallbackPosts.ts`) on 2026-07-10,
in response to the July 2026 GSC report (11 duplicate-canonical, 18 crawled-not-indexed,
23 discovered-not-indexed exclusions across 68 known URLs).

**How to use this sheet:** export the "Page indexing" table from Search Console (Pages report →
each exclusion reason → export), then paste each excluded URL into the matching row below (or add a
row if it's not listed). Fill in `GSC Reason`, `Priority`, and `Action`. The `Canonical`, `Sitemap`,
`Title`, `H1` columns are pre-filled from a code audit — verify against the live page since Supabase
content (blog posts) can differ from the fallback list baked into the repo.

Columns:
- **Canonical**: self-referencing canonical present in code? (✅ / ❌ / N/A)
- **Sitemap**: included in `sitemap.ts`? (✅ / ❌)
- **GSC Reason**: paste from GSC export (duplicate / crawled-not-indexed / discovered-not-indexed / redirect / noindex)
- **Priority**: P0 (fix now) / P1 / P2 — set per report's page priority list
- **Action**: index-worthy as-is / needs content or internal links / consolidate-redirect / intentionally excluded

## Core calculator pages (highest priority — main query cluster)

| URL | Canonical | Sitemap | GSC Reason | Priority | Action | Notes |
|---|---|---|---|---|---|---|
| `/` | ✅ | ✅ | | P0 | | Homepage; ~99.7% of clicks |
| `/gematria-calculator-online` | ✅ | ✅ | | P0 | | |
| `/hebrew-gematria-calculator` | ✅ | ✅ | | P0 | | Now linked from footer + homepage (added) |
| `/english-gematria-calculator` | ✅ | ✅ | | P0 | | Now linked from footer + homepage (added) |
| `/english-to-hebrew-gematria` | ✅ | ✅ | | P1 | | Now linked from footer (added) |
| `/hebrew-gematria-reference-chart-2026` | ✅ | ✅ | | P1 | | Now linked from footer (added) |
| `/number-maps` | ✅ | ✅ | | P1 | | Client-rendered chart tool; `?q=` param doesn't affect canonical |

## Learning modules

| URL | Canonical | Sitemap | GSC Reason | Priority | Action | Notes |
|---|---|---|---|---|---|---|
| `/learning` | ✅ | ✅ | | P1 | | |
| `/learning/intro` | ✅ | ✅ | | P1 | | |
| `/learning/hebrew-alphabet` | ✅ | ✅ | | P1 | | |
| `/learning/systems` | ✅ | ✅ | | P1 | | |
| `/learning/advanced` | ✅ | ✅ | | P1 | | |
| `/learning/torah-gematria` | ✅ | ✅ | | P1 | | |
| `/learning/name-gematria` | ✅ | ✅ | | P1 | | |
| `/learning/number-mysticism` | ✅ | ✅ | | P1 | | |
| `/learning/practical-applications` | ✅ | ✅ | | P1 | | |

## Blog index & posts

| URL | Canonical | Sitemap | GSC Reason | Priority | Action | Notes |
|---|---|---|---|---|---|---|
| `/blog` | ✅ | ✅ | | P1 | | |
| `/blog?category=...` (6 variants) | N/A | ❌ | | P2 | intentionally excluded | `noindex,follow` in code — this is the likely "excluded by noindex: 1" |
| `/blog/understanding-basics-gematria-beginners-guide` | ✅ | ✅ | | P1 | | |
| `/blog/hebrew-alphabet-numerical-values-complete-reference` | ✅ | ✅ | | P1 | | |
| `/blog/english-gematria-systems-different-methods` | ✅ | ✅ | | P1 | | |
| `/blog/biblical-numerology-sacred-numbers-scripture` | ✅ | ✅ | | P1 | | |
| `/blog/modern-applications-gematria-digital-age` | ✅ | ✅ | | P1 | | |
| `/blog/kabbalah-gematria-mystical-connection` | ✅ | ✅ | | P1 | | |
| `/blog/how-to-use-gematria-calculator` | ✅ | ✅ | | P1 | | |
| `/blog/reverse-gematria-explained` | ✅ | ✅ | | P1 | | |
| `/blog/simple-gematria-complete-guide` | ✅ | ✅ | | P1 | | |
| `/blog/famous-gematria-numbers-meanings` | ✅ | ✅ | | P1 | | |
| `/blog/pythagorean-gematria-numerology-connection` | ✅ | ✅ | | P1 | | |
| `/blog/gematria-chart-complete-reference` | ✅ | ✅ | | P1 | | |
| `/blog/gematria-codes-famous-examples` | ✅ | ✅ | | P1 | | |
| `/blog/biblical-gematria-torah-examples` | ✅ | ✅ | | P1 | | |
| `/blog/greek-isopsephy-forgotten-cousin-gematria` | N/A | ❌ | | P2 | 301 → `/blog/greek-isopsephy-gematria-ancient-hellenistic-world` | Defined in `next.config.js`; confirm the new slug exists and is indexed |
| *(additional posts live in Supabase — not in this repo)* | | | | | | Pull full slug list from Supabase `blog_posts` table or the GSC export directly; the 68-known-URL count implies more posts exist than the 14 fallback ones baked into the repo |

## Static / utility pages

| URL | Canonical | Sitemap | GSC Reason | Priority | Action | Notes |
|---|---|---|---|---|---|---|
| `/about` | ✅ | ✅ | | P2 | | |
| `/contact` | ✅ | ✅ | | P2 | | |
| `/privacy` | ✅ | ✅ | | P2 | | Low SEO value by design |
| `/terms` | ✅ | ✅ | | P2 | | Low SEO value by design |
| `/cookies` | ✅ | ✅ | | P2 | | Low SEO value by design |

## Excluded from crawl by design (verify these are the "noindex"/never-should-index rows)

| URL pattern | Status | Notes |
|---|---|---|
| `/admin/*` | Now disallowed in `robots.ts` + `noindex,nofollow` on `admin/layout.tsx` | Previously crawlable and redirect-prone (unauthenticated → `/admin/login`) — likely contributor to "page with redirect" and thin/duplicate exclusions before this fix |
| `/api/*` | Now disallowed in `robots.ts` | Was previously crawlable with no disallow rule |

## Next steps to finish this sheet

1. Export the Page Indexing report from GSC for each exclusion reason (duplicate, crawled-not-indexed,
   discovered-not-indexed, redirect) and paste URLs into the matching rows above (add rows for anything
   not listed — likely additional Supabase blog posts).
2. For the 11 "duplicate without user-selected canonical" URLs specifically: check whether they are
   `www` vs. non-`www`, `http` vs. `https`, or trailing-slash variants of pages above — those are
   typically Vercel/DNS-level, not fixable in this repo's route code (all routes here already emit a
   self-referencing canonical).
3. For "crawled/discovered but not indexed" URLs, prioritize starting with the core calculator and
   learning pages, since those now have stronger internal links after this change — request indexing in
   GSC once you confirm content/canonical are correct.
