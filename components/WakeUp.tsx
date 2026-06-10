"use client";

import { useEffect } from "react";
import { featuredProjects } from "@/data/projects";

const demoUrls = [
  ...featuredProjects.map((p) => p.demoUrl).filter(Boolean),
] as string[];

export default function WakeUp() {
  useEffect(() => {
    for (const url of demoUrls) {
      fetch(url, { mode: "no-cors" }).catch(() => {});
    }
  }, []);

  return null;
}
