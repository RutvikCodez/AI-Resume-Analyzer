"use client";
import React from "react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { chartConfig, conversionData } from "@/constant";
import CardWrapper from "../common/CardWrapper";

const ConversionFunnel = () => {
  return (
    <CardWrapper
      title="Interview Conversion Funnel"
      description="Candidate progression through hiring stages"
      delay={0.5}
      className="col-span-2"
    >
      <ChartContainer config={chartConfig} className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={conversionData} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="stage" type="category" width={80} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="count" fill="var(--color-interviews)" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </CardWrapper>
  );
};

export default ConversionFunnel;
