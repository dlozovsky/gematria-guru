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
2. See "Duplicate without user-selected canonical" below — that bucket has since been resolved and
   needs no code change.
3. For "crawled/discovered but not indexed" URLs, prioritize starting with the core calculator and
   learning pages, since those now have stronger internal links after this change — request indexing in
   GSC once you confirm content/canonical are correct.

---

## Duplicate without user-selected canonical — resolved, no code change needed

*Added 2026-07-29, after the URL-level GSC export became available.*

**Correction.** The original version of this sheet stated that these URLs were "likely `www` vs.
non-`www`, `http` vs. `https`, or trailing-slash variants … typically Vercel/DNS-level, not fixable in
this repo's route code." **That was wrong**, and was inferred before the URL list was available. All 12
affected URLs are ordinary `https://www.` content URLs.

The 12 URLs GSC lists:

| URL | Type |
|---|---|
| `/learning/intro` | static route |
| `/learning/systems` | static route |
| `/learning/name-gematria` | static route |
| `/blog/gematria-codes-famous-examples` | in `blogFallbackPosts` |
| `/blog/english-gematria-systems-different-methods` | in `blogFallbackPosts` |
| `/blog/modern-applications-gematria-digital-age` | in `blogFallbackPosts` |
| `/blog/number-18-jewish-concept-chai` | Supabase only |
| `/blog/gematria-zohar-mystical-text-analysis` | Supabase only |
| `/blog/john-fitzgerald-cowboys-lineman-gematria-77-…` | Supabase only |
| `/blog/leonid-radvinsky-gematria-43-…` | Supabase only |
| `/blog/justin-fairfax-gematria-…` | Supabase only |
| `/blog/oklahoma-city-bombing-gematria-anniversary-…` | Supabase only |

**Finding: the canonicals are correct.** Verified against generated HTML in `.next/server/app/`:

```
/learning/intro    <link rel="canonical" href="https://www.gematriaguru.com/learning/intro"/>
/learning/systems  <link rel="canonical" href="https://www.gematriaguru.com/learning/systems"/>
```

Each has a self-referencing canonical, a unique title, and distinct content. `/blog/[slug]` emits a
per-slug canonical via `generateMetadata`.

**What the status actually means.** GSC distinguishes "Duplicate, Google chose different canonical than
user" (canonical seen, overruled) from "Duplicate **without user-selected canonical**" (no canonical
found). This property reports the latter, so Google was served pages without canonical tags — which the
build output shows is not what these routes emit.

**Most likely cause: the crawl window, not the code.** All 12 share `first detected 6/30/26` and
`last crawled Jun 30, 2026`, and none has been recrawled since. June 30 is the day ~10 PRs merged in
rapid succession (#23–#32), several fixing Supabase failures in flight ("Remove updated_at from sitemap
query — column does not exist in DB", "Fall back to anon key for post writes when service role key is
absent", "Use anon Supabase client for admin read endpoints"). The affected set spans static routes,
fallback posts, and Supabase-only posts while sparing their near-identical siblings — a pattern that
fits site state during one crawl, not a per-page defect.

**Action: use "Validate Fix" in Search Console.** Do not change canonical code. Validation is known to
work on this property — the "Discovered – currently not indexed" bucket already shows Validation:
Passed.

### Separate issue surfaced by this list: possible duplicate slugs in Supabase

A third-party SEO dashboard listed two different article titles resolving to the same URL,
`/blog/english-gematria-systems-different-methods` — which is one of the 12. If two `blog_posts` rows
share a slug, `.maybeSingle()` in `src/app/blog/[slug]/page.tsx` throws on multi-row results, the
`catch` swallows it, and the page silently serves the repo's fallback copy instead of either real
article. Worth confirming directly:

```sql
select slug, count(*) from blog_posts group by slug having count(*) > 1;
```
