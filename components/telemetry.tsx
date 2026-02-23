"use client";

import { useEffect, useRef } from "react";
import { saveSessionData, type SessionData } from "@/lib/analytics";
import { useUserActivity } from "@/hooks/use-user-activity";
import { useSectionTracking } from "@/hooks/use-section-tracking";

interface Interaction {
  button_id: string;
  section: string;
  time_offset: number;
}

export default function Telemetry() {
  const startTime = useRef<number>(Date.now());
  const sent = useRef<boolean>(false);
  const interactions = useRef<Interaction[]>([]);
  const maxScroll = useRef<number>(0);

  const { isIdle } = useUserActivity(3 * 60 * 1000);
  const { sectionTimes, currentSection, updateCurrentTime } =
    useSectionTracking(isIdle);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scroll =
        scrollHeight > 0
          ? Math.round((window.scrollY / scrollHeight) * 100)
          : 0;

      if (scroll > maxScroll.current) maxScroll.current = scroll;
    };

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest("[data-track-id]");
      if (target) {
        const buttonId = target.getAttribute("data-track-id") ?? "unknown";

        interactions.current.push({
          button_id: buttonId,
          section: currentSection.current ?? "unknown",
          time_offset: Math.round((Date.now() - startTime.current) / 1000),
        });
      }
    };

    const report = () => {
      if (sent.current) return;
      updateCurrentTime();

      const totalDuration = Math.round((Date.now() - startTime.current) / 1000);

      if (totalDuration < 2 || totalDuration > 3600) return;

      sent.current = true;

      const sessionData: SessionData = {
        duration_seconds: totalDuration,
        max_scroll_percent: maxScroll.current,
        time_per_section: sectionTimes.current,
        clicks: interactions.current,
      };

      saveSessionData(sessionData);
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClick);
    window.addEventListener("pagehide", report);
    window.addEventListener("beforeunload", report);

    return () => {
      report();
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick);
      window.removeEventListener("pagehide", report);
      window.removeEventListener("beforeunload", report);
    };
  }, [updateCurrentTime, sectionTimes, isIdle, currentSection]);

  return null;
}
