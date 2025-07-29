"use client";
import React from "react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { chartConfig, rejectionData } from "@/constant";
import CardWrapper from "../common/CardWrapper";

const RejectionReasons = () => {
  return (
    <CardWrapper
      title="Rejection Reasons"
      description="Analysis of candidate rejection patterns"
      delay={0.6}
    >
      <ChartContainer config={chartConfig} className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={rejectionData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {rejectionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
    </CardWrapper>
  );
};

export default RejectionReasons;
