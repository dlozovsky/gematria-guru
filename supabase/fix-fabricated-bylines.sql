-- One-off correction, not a migration: replaces fabricated author names with
-- the real site author. Run manually against the blog_posts table.
--
-- Background: the June 2026 content batch invented five author personas
-- ("Rabbi Jonathan Stone", "Dr. Lisa Roberts", "Sarah Cohen", "Michael David",
-- "Benjamin Wolf") that do not correspond to real people. The site publishes
-- Person schema (JSON-LD) for each byline, so this was a structured claim to
-- Google about the existence of specific humans, not just display text.
--
-- Preview before running:
--   select author, count(*) from blog_posts group by author order by count(*) desc;

update blog_posts
set author = 'Daniel Lozovsky'
where author in (
  'Rabbi Jonathan Stone',
  'Dr. Lisa Roberts',
  'Sarah Cohen',
  'Michael David',
  'Benjamin Wolf'
);

-- Optional: normalize the team byline too, if you want a single consistent
-- non-personal byline instead of both "Gematria Guru Team" and "Gematria Team".
-- update blog_posts set author = 'Gematria Guru' where author in ('Gematria Guru Team', 'Gematria Team');

-- Verify:
--   select author, count(*) from blog_posts group by author order by count(*) desc;
