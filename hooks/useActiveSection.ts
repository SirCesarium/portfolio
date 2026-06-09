"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (sectionIds.length === 0) return;

    let ticking = false;

    function update() {
      let bestId = "";
      let bestDist = Infinity;
      let found = false;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const dist = Math.abs(rect.top);
          if (dist < bestDist) {
            bestDist = dist;
            bestId = id;
            found = true;
          }
        }
      }

      setActiveId(found ? bestId : "");
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [sectionIds]);

  return activeId;
}
