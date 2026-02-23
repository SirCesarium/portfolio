import { useCallback, useEffect, useRef } from "react";

export function useSectionTracking(isIdle: () => boolean) {
  const sectionTimes = useRef<Record<string, number>>({});
  const currentSection = useRef<string | null>(null);
  const lastEntryTime = useRef(Date.now());

  const updateCurrentTime = useCallback(() => {
    if (currentSection.current && !isIdle()) {
      const duration = Math.round((Date.now() - lastEntryTime.current) / 1000);

      if (duration > 0 && duration < 300) {
        const currentTotal = sectionTimes.current[currentSection.current] || 0;

        if (currentTotal < 900) {
          sectionTimes.current[currentSection.current] =
            currentTotal + duration;
        }
      }
    }
    lastEntryTime.current = Date.now();
  }, [isIdle]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            updateCurrentTime();
            currentSection.current = entry.target.id;
            lastEntryTime.current = Date.now();
          }
        });
      },
      { threshold: 0.6 },
    );

    const timer = setTimeout(() => {
      document
        .querySelectorAll("section[id]")
        .forEach((s) => observer.observe(s));
    }, 500);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [updateCurrentTime]);

  return { sectionTimes, currentSection, updateCurrentTime };
}
