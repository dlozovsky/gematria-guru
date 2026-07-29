# Scope: Gematria Word Database (reverse lookup)

Status: proposal, not started. Written 2026-07-29.

## Why

Both sites outranking us for "gematria calculator" have a searchable word database, and
the #1 result leads its meta description with it:

> gematrix.org — "an online calculator for finding the value of a word or a phrase in
> gimatria, **but not only, it also searches the database**."

Gematria Guru has no equivalent. `findNumericalTwins` sounds like it does this, but it only
groups the *user's own input* across cipher methods and reports which happened to agree —
there is no corpus to search.

### Demand is measurable, and we rank badly for all of it

From the Apr–Jul 2026 GSC export, queries with reverse-lookup or value-search intent:

| Query | Impressions | Our position |
|---|---|---|
| gematria search engine | 111 | 21.5 |
| gematria decoder | 43 | 35.1 |
| simple gematria decoder | 32 | 8.8 |
| gematria calculator numbers to words | 21 | 9.4 |
| gematria equals | 21 | 8.0 |
| gematria finder | 20 | 16.4 |
| gematria lookup | 2 | 20.5 |
| gematria database | 2 | 50.5 |

**43 such queries, 347 impressions, essentially zero clicks.** Nothing on the site answers
"what else equals this number", so there is nothing for these searchers to land on.

### The name cluster is the same feature wearing a different hat

| Query | Impressions | Our position |
|---|---|---|
| gematria name calculator | 402 | 9.5 |
| gematria calculator names | 38 | 16.8 |
| hebrew name calculator | 23 | 12.0 |
| gematria calculator name | 20 | 13.5 |
| gematria of my name / my name in gematria / … | ~15 combined | 38–75 |

`israelfineart.com` earned an AI Overview citation for exactly this framing — *"Hebrew
Numerology Calculator (Gematria) | Find Your Name's Value … a letter-by-letter breakdown."*
A name lookup is "compute my name's value, then show me what else shares it", which is the
same database.

## What it is

One table of words with **precomputed values in every cipher**, and two query directions:

1. **Number → words.** "What equals 666?" Returns matching words per cipher, with source
   and gloss.
2. **Word → words.** "What else equals what my name equals?" Compute, then look up.

## Corpus

Deliberately *sourced and glossed* rather than user-submitted. Gematrix and Gematrinator
both run large user-submitted phrase databases, which is why their results are mostly
noise. A curated corpus with citations is the differentiator, and it matches the
"transparent, bounded interpretation" register that is currently winning AI Overview
citations in this niche.

| Source | Content | ~Unique forms | Licence |
|---|---|---|---|
| Open Scriptures Hebrew Bible (WLC base) | Hebrew Bible, consonantal forms | ~40,000 | Base text **public domain**; lemma/morphology **CC BY 4.0** — attribution required |
| Westcott–Hort 1881 or Tischendorf | Greek New Testament | ~19,000 | **Public domain** (age) |
| SCOWL / `dwyl/english-words` | English wordlist | ~60,000 | Permissive / Unlicense |
| Hand-curated theological terms | Divine names, sefirot, key concepts, with glosses | ~300 | Ours |

### Licence notes — verify before ingesting

- **Do not use the Groves Center WLC edition.** It is CC BY-NC-ND — non-commercial and
  no-derivatives, which rules out an ad-supported or membership site and rules out
  computing derived values. Use the Open Scriptures / public-domain WLC text instead.
- **Prefer Westcott–Hort or Tischendorf over SBLGNT.** SBLGNT is CC BY 4.0 but carries
  extra terms: it may not be sold on its own, and if it exceeds 25% of a work being sold a
  separate licence is required. Public-domain critical editions avoid the question
  entirely, and textual variants barely affect letter sums.
- Record the licence and attribution per row so the provenance ships with the data.

## Schema

Postgres/Supabase, one table. Nullable integer columns per cipher, indexed.

```sql
create table lexicon (
  id            bigserial primary key,
  word          text not null,          -- surface form, niqqud stripped for Hebrew
  script        text not null,          -- 'hebrew' | 'greek' | 'latin'
  transliteration text,
  gloss         text,                   -- short English meaning
  source        text not null,          -- 'OSHB' | 'WH1881' | 'SCOWL' | 'curated'
  source_ref    text,                   -- e.g. 'Gen 1:1' — enables citation
  licence       text not null,

  -- precomputed, one column per cipher in calculateAllGematria
  v_english_ordinal  integer,
  v_english_reverse  integer,
  v_pythagorean      integer,
  v_jewish           integer,
  v_mispar_gadol     integer,
  v_hebrew_ordinal   integer,
  v_greek_isopsephy  integer,

  created_at timestamptz default now()
);

create index on lexicon (v_english_ordinal);
create index on lexicon (v_english_reverse);
create index on lexicon (v_pythagorean);
create index on lexicon (v_jewish);
create index on lexicon (v_mispar_gadol);
create index on lexicon (v_hebrew_ordinal);
create index on lexicon (v_greek_isopsephy);
create index on lexicon (script);
```

Only the columns relevant to a word's script are populated; the rest stay null. Roughly
120,000 rows total — trivial for Postgres, and every lookup is a single indexed equality
scan.

## Value computation — non-negotiable

The ingestion script **must import the existing functions from
`src/utils/gematriaCalculators.ts`** and call them, exactly as `src/lib/gematriaReference.ts`
does for the published tables.

Do not reimplement the letter maps in the ingest script. The whole reason the site spent
months advertising ciphers that did not exist is that documentation and code were
maintained separately. A second copy of the maps would reintroduce that failure with a
120,000-row blast radius.

## Surfaces

**1. In the calculator (no new URLs).**
Under each result, "N words share this value" expanding to the matches with gloss and
source. This is the product fix and it ships first.

**2. Name analysis page.** `/name-gematria-calculator`
Enter a name → value in each cipher, letter-by-letter breakdown, and words sharing that
value. Targets the ~500-impression name cluster where we currently sit at position 9–16.

**3. Value pages.** `/gematria-value/[n]` — see phasing.

## SEO pages: bounded, evidence-led

The July SEO report said to defer programmatic expansion. That still holds *in general* —
but these pages are justified by measured demand rather than speculation, and each one
carries genuinely unique data (real word matches with citations), not a template with a
number swapped in.

Numbers appearing in our own query data: **26, 42, 44, 53, 56, 77, 83, 114, 321, 589, 666,
2026**. Plus "gematria 666" at 480/mo and "444 in hebrew gematria" at 70/mo from the
keyword tool.

Guardrails:

- Publish a value page **only** if it has at least ~5 real corpus matches and either
  measured demand or established significance (7, 12, 18, 26, 40, 70, 72, 318, 358, 400,
  613, 666, 888).
- Start with **~50 pages**, not 1–10,000.
- Each page carries: the matches with sources, the cipher breakdowns, factual notes on the
  number's textual significance, and links to adjacent values. If a page cannot clear that
  bar, it does not ship.
- Review indexation after 4 weeks before expanding.

## Risks

| Risk | Mitigation |
|---|---|
| Thin programmatic pages trigger the same quality problems as the June blog batch | Hard minimum-match threshold; cap at ~50; review before expanding |
| Licence violation on scripture texts | Use public-domain editions only; store licence per row; attribute CC BY sources |
| Ingest script duplicates the cipher maps and drifts | Import from `gematriaCalculators.ts`; add a test asserting a sample of stored values still matches a live calculation |
| Users read shared values as factual claims | Reuse the "About these results" framing already on the homepage — arithmetic is reproducible, interpretation is not |
| Corpus bloat slows queries | Indexed integer equality; paginate; cap results per cipher |

## Phasing and effort

| Phase | Work | Estimate |
|---|---|---|
| 0 | Confirm licences, pull corpora, spike row counts | 0.5–1 day |
| 1 | Ingest script + schema + seed + drift test | 1.5 days |
| 2 | Lookup API + "words sharing this value" in calculator | 1 day |
| 3 | `/name-gematria-calculator` | 1 day |
| 4 | ~50 curated value pages + sitemap | 1.5–2 days |

**~6 days total.** Phases 1–2 are the product gap and deliver value alone; 3–4 are the
search upside and can wait for the ranking picture to settle.

## Open decisions

1. **English corpus size.** 60k common words keeps results meaningful; 400k produces a
   match for nearly every number and makes the feature feel like noise. Recommend 60k.
2. **Phrases as well as single words?** Gematrix's phrase database is its main draw and its
   main quality problem. Recommend single words only at first.
3. **User submissions?** Recommend no. It is a moderation burden and it is precisely the
   route by which conspiracy content re-enters the domain.
4. **Hebrew forms:** consonantal surface forms only, or lemmas too? Recommend surface forms
   (gematria is computed on letters as written), with lemma stored for grouping.
