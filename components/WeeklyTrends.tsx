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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

const WeeklyTrends = () => {
  return (
    <Card className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
      <CardHeader>
        <CardTitle>Weekly Interview Trends</CardTitle>
        <CardDescription>
          Interviews conducted and successful hires this week
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="interviews" fill="var(--color-interviews)" />
              <Bar dataKey="hired" fill="var(--color-hired)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default WeeklyTrends;
