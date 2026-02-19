"use client";

import { useEffect, useRef } from "react";
import { saveSessionData, type SessionData } from "@/lib/firebase-stats";

interface Interaction {
  button_id: string;
  section: string;
  time_offset: number;
}

export default function Telemetry() {
  const stats = useRef({
    maxScroll: 0,
    startTime: Date.now(),
    sent: false,
    sectionTimes: {} as Record<string, number>,
    currentSection: null as string | null,
    lastEntryTime: Date.now(),
    interactions: [] as Interaction[],
  });

  useEffect(() => {
    const handleCustomClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest("[data-track-id]");
      if (target) {
        const buttonId = target.getAttribute("data-track-id");
        const now = Date.now();

        stats.current.interactions.push({
          button_id: buttonId || "unknown",
          section: stats.current.currentSection || "unknown",
          time_offset: Math.round((now - stats.current.startTime) / 1000),
        });
      }
    };

    const updateSectionTime = () => {
      if (stats.current.currentSection) {
        const now = Date.now();
        const duration = Math.round((now - stats.current.lastEntryTime) / 1000);
        if (duration > 0) {
          stats.current.sectionTimes[stats.current.currentSection] =
            (stats.current.sectionTimes[stats.current.currentSection] || 0) +
            duration;
        }
        stats.current.lastEntryTime = now;
      }
    };

    const report = () => {
      if (stats.current.sent) return;
      updateSectionTime();

      const totalDuration = Math.round(
        (Date.now() - stats.current.startTime) / 1000,
      );
      if (totalDuration < 2) return;

      stats.current.sent = true;
      
      const sessionData: SessionData = {
        duration_seconds: totalDuration,
        max_scroll_percent: stats.current.maxScroll,
        time_per_section: stats.current.sectionTimes,
        clicks: stats.current.interactions,
      };
      
      saveSessionData(sessionData);
    };

    const handleScroll = () => {
      const scroll = Math.round(
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
          100,
      );
      if (scroll > stats.current.maxScroll) stats.current.maxScroll = scroll;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            updateSectionTime();
            stats.current.currentSection = entry.target.id;
            stats.current.lastEntryTime = Date.now();
          }
        });
      },
      { threshold: 0.6 },
    );

    document
      .querySelectorAll("section[id]")
      .forEach((s) => observer.observe(s));
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleCustomClick);
    window.addEventListener("beforeunload", report);
    window.addEventListener("pagehide", report);

    return () => {
      report();
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleCustomClick);
      window.removeEventListener("beforeunload", report);
      window.removeEventListener("pagehide", report);
      observer.disconnect();
    };
  }, []);

  return null;
}
