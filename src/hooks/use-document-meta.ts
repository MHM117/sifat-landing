import { useEffect } from "react";

type DocumentMeta = {
  title: string;
  description: string;
  canonical: string;
};

/**
 * Sets per-page title, description, canonical and Open Graph tags, restoring
 * the previous values on unmount so a page never leaves its metadata behind
 * when the user navigates away.
 */
export function useDocumentMeta({ title, description, canonical }: DocumentMeta) {
  useEffect(() => {
    const restore: (() => void)[] = [];

    const previousTitle = document.title;
    document.title = title;
    restore.push(() => {
      document.title = previousTitle;
    });

    const setAttribute = (selector: string, attribute: string, value: string) => {
      const el = document.head.querySelector(selector);
      if (!el) return;
      const previous = el.getAttribute(attribute);
      el.setAttribute(attribute, value);
      restore.push(() => {
        if (previous !== null) el.setAttribute(attribute, previous);
      });
    };

    setAttribute('meta[name="description"]', "content", description);
    setAttribute('meta[property="og:description"]', "content", description);
    setAttribute('meta[property="og:title"]', "content", title);
    setAttribute('meta[property="og:url"]', "content", canonical);
    setAttribute('link[rel="canonical"]', "href", canonical);

    return () => restore.forEach((undo) => undo());
  }, [title, description, canonical]);
}
