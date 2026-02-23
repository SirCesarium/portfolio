"use client";

import { useEffect, useState, useMemo } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, Line, LineChart } from "recharts";
import {
  ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { AnalyticsCard } from "@/components/analytics-card";

interface Interaction {
  button_id: string;
  section: string;
  time_offset: number;
}

interface AnalyticsEntry {
  id: string;
  timestamp: string;
  duration_seconds: number;
  max_scroll_percent: number;
  device: "mobile" | "desktop";
  browser: string;
  time_per_section?: Record<string, number>;
  clicks?: Interaction[];
}

interface ProcessedData {
  sections: Array<{ name: string; seconds: number }>;
  daily: Array<{ date: string; views: number }>;
}

const SECTION_CONFIG = {
  seconds: { label: "Seconds", color: "#fbbf24" },
} satisfies ChartConfig;

const DAILY_CONFIG = {
  views: { label: "Views", color: "#22d3ee" },
} satisfies ChartConfig;

export default function AdminPage() {
  const [rawData, setRawData] = useState<AnalyticsEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/analytics")
      .then((res) => res.json())
      .then((data: AnalyticsEntry[]) => {
        setRawData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const processedData = useMemo<ProcessedData>(() => {
    if (!rawData.length) return { sections: [], daily: [] };

    const sectionMap: Record<string, number> = {};
    const dailyMap: Record<string, number> = {};

    rawData.forEach((curr) => {
      if (curr.time_per_section) {
        Object.entries(curr.time_per_section).forEach(([name, time]) => {
          sectionMap[name] = (sectionMap[name] || 0) + time;
        });
      }

      const date = new Date(curr.timestamp).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
      dailyMap[date] = (dailyMap[date] || 0) + 1;
    });

    return {
      sections: Object.entries(sectionMap).map(([name, seconds]) => ({
        name,
        seconds,
      })),
      daily: Object.entries(dailyMap)
        .map(([date, views]) => ({ date, views }))
        .reverse(),
    };
  }, [rawData]);

  if (loading)
    return (
      <div className="p-8 text-zinc-500 animate-pulse">
        Loading analytics...
      </div>
    );

  return (
    <div className="grid gap-6 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnalyticsCard
          title="Daily Activity"
          description="Total sessions per day"
          config={DAILY_CONFIG}
        >
          <LineChart data={processedData.daily}>
            <CartesianGrid vertical={false} stroke="#27272a" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="views"
              stroke={DAILY_CONFIG.views.color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </AnalyticsCard>

        <AnalyticsCard
          title="Section Engagement"
          description="Total seconds spent"
          config={SECTION_CONFIG}
        >
          <BarChart data={processedData.sections}>
            <CartesianGrid vertical={false} stroke="#27272a" />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="seconds"
              fill={SECTION_CONFIG.seconds.color}
              radius={4}
              barSize={40}
            />
          </BarChart>
        </AnalyticsCard>
      </div>
    </div>
  );
}
