"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { chartConfig, weeklyData } from "@/constant";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import CardWrapper from "./CardWrapper";

const WeeklyTrends = () => {
  return (
    <CardWrapper
      title="Weekly Interview Trends"
      description="Interviews conducted and successful hires this week"
      delay={0.4}
      className="col-span-2"
    >
      <ChartContainer config={chartConfig} className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklyData} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="interviews" fill="var(--color-interviews)" />
            <Bar dataKey="hired" fill="var(--color-hired)" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </CardWrapper>
  );
};

export default WeeklyTrends;
