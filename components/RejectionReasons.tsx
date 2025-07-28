"use client";
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import {
    Cell,
    Pie,
    PieChart,
  ResponsiveContainer,
} from "recharts";
import { chartConfig, rejectionData } from '@/constant';

const RejectionReasons = () => {
  return (
    <Card className="animate-slide-up " style={{ animationDelay: "0.6s" }}>
          <CardHeader>
            <CardTitle>Rejection Reasons</CardTitle>
            <CardDescription>Analysis of candidate rejection patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[250px]">
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
          </CardContent>
        </Card>
  )
}

export default RejectionReasons