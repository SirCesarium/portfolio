"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

export interface AnalyticsCardProps {
  title: string;
  description: string;
  config: ChartConfig;
  children: React.ReactElement;
}

export function AnalyticsCard({
  title,
  description,
  config,
  children,
}: AnalyticsCardProps) {
  return (
    <Card className="bg-zinc-950 border-zinc-800">
      <CardHeader>
        <CardTitle className="text-zinc-100">{title}</CardTitle>
        <CardDescription className="text-zinc-500">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config} className="h-[200px] w-full">
          {children}
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
