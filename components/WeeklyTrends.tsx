"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { weeklyData } from "@/constant";

const WeeklyTrends = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 via-white to-green-100 shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col gap-4">
        <h2 className="text-xl font-bold">
          Weekly Interview Trends
        </h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12, fill: "#475569" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "#475569" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#f9fafb",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  fontSize: "0.875rem",
                }}
                cursor={{ fill: "#d1fae5" }}
              />
              <Bar
                dataKey="interviews"
                fill="#34d399"
                radius={[6, 6, 0, 0]}
                barSize={30}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
    </div>
  );
};

export default WeeklyTrends;
