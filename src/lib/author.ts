/**
 * Single source of truth for author identity.
 *
 * The byline, the JSON-LD Person schema and the /about page all read from
 * here, so the name shown to a reader and the name asserted to Google cannot
 * disagree.
 *
 * Only put things here that are true and checkable. This file exists because
 * the site previously published fabricated bylines ("Rabbi Jonathan Stone",
 * "Dr. Lisa Roberts") as structured Person data, which is a claim about a real
 * human being and not a styling choice.
 */

export interface Author {
  name: string;
  /** Short, plain description. No credentials that cannot be verified. */
  bio: string;
  /** Canonical page describing the author. */
  url: string;
  /**
   * Profile URLs that independently corroborate the person exists.
   * Leave empty rather than inventing entries; the schema omits the field
   * when this is empty.
   */
  sameAs: string[];
}

export const SITE_AUTHOR: Author = {
  name: "Daniel Lozovsky",
  // TODO(daniel): expand this. Anything added must be true and checkable:
  // what drew you to gematria, how long you have worked on it, relevant
  // background. Avoid titles or credentials you do not hold.
  bio: "Daniel Lozovsky built and maintains Gematria Guru.",
  url: "https://www.gematriaguru.com/about",
  sameAs: [],
};

/** Person schema for an article byline. Omits sameAs when there is nothing real to list. */
export function authorSchema(name: string = SITE_AUTHOR.name) {
  const isSiteAuthor = name === SITE_AUTHOR.name;
  return {
    "@type": "Person",
    name,
    ...(isSiteAuthor
      ? {
          description: SITE_AUTHOR.bio,
          url: SITE_AUTHOR.url,
          ...(SITE_AUTHOR.sameAs.length > 0 ? { sameAs: SITE_AUTHOR.sameAs } : {}),
        }
      : {}),
  };
}
