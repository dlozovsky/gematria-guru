/*
  # Create blog_posts table

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text, not null)
      - `slug` (text, unique, not null) - URL-friendly identifier
      - `excerpt` (text) - Short summary for listing pages
      - `content` (text) - Full HTML/markdown content
      - `author` (text, default 'Gematria Guru Team')
      - `published_at` (timestamptz) - Null means draft
      - `read_time` (text, default '5 min read')
      - `category` (text, default 'General')
      - `image_url` (text) - Optional hero image
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `blog_posts` table
    - Public SELECT policy for published posts (published_at is not null)
    - Authenticated users can insert/update/delete (admin use)

  3. Notes
    - Posts are considered published when published_at is not null
    - Slug must be unique for URL routing
    - Index on slug for fast lookups
    - Index on published_at for sorting
    - Index on category for filtering
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text DEFAULT '',
  content text DEFAULT '',
  author text DEFAULT 'Gematria Guru Team',
  published_at timestamptz,
  read_time text DEFAULT '5 min read',
  category text DEFAULT 'General',
  image_url text,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS blog_posts_slug_idx ON blog_posts (slug);
CREATE INDEX IF NOT EXISTS blog_posts_published_at_idx ON blog_posts (published_at DESC);
CREATE INDEX IF NOT EXISTS blog_posts_category_idx ON blog_posts (category);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published posts"
  ON blog_posts
  FOR SELECT
  USING (published_at IS NOT NULL AND published_at <= now());

CREATE POLICY "Authenticated users can insert posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete posts"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);
