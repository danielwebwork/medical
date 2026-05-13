"use client";

import { useEffect, useMemo, useState } from "react";

function probeImage(url: string, timeoutMs: number): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    let settled = false;

    const finish = (ok: boolean) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      img.onload = null;
      img.onerror = null;
      resolve(ok);
    };

    const timer = setTimeout(() => finish(false), timeoutMs);

    img.onload = () => {
      const ok = img.naturalWidth > 0 && img.naturalHeight > 0;
      finish(ok);
    };
    img.onerror = () => finish(false);
    img.src = url;
  });
}

/**
 * Preloads image URLs in the browser and returns only those that load successfully
 * (onload + non-zero dimensions). Failed or timed-out URLs are omitted.
 */
export function useValidatedImages(
  urls: readonly string[],
  options?: { timeoutMs?: number },
): { validUrls: string[]; ready: boolean } {
  const timeoutMs = options?.timeoutMs ?? 12_000;
  const key = useMemo(() => urls.join("\u0001"), [urls]);

  const [validUrls, setValidUrls] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (urls.length === 0) {
      setValidUrls([]);
      setReady(true);
      return;
    }

    let cancelled = false;
    setReady(false);
    setValidUrls([]);

    void (async () => {
      const results = await Promise.all(
        urls.map((url) => probeImage(url, timeoutMs)),
      );
      if (cancelled) return;
      const next = urls.filter((_, i) => results[i]);
      setValidUrls(next);
      setReady(true);
    })();

    return () => {
      cancelled = true;
    };
  }, [key, timeoutMs]);

  return { validUrls, ready };
}
