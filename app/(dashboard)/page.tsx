"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { FileText, Plus } from "lucide-react";
import Metrics from "@/components/dashboard/Metrics";
import WeeklyTrends from "@/components/dashboard/WeeklyTrends";
import ConversionFunnel from "@/components/dashboard/ConversionFunnel";
import RejectionReasons from "@/components/dashboard/RejectionReasons";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentActivity from "@/components/dashboard/RecentActivity";
import TitleDesc from "@/components/common/TitleDesc";

const Page = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between col-span-full gap-4">
        <TitleDesc
          title="Dashboard"
          desc="Welcome back! Here's your recruiting overview."
        />
        <div className="flex flex-wrap gap-2">
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            <span>Add Candidate</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            <span>Export Report</span>
          </Button>
        </div>
      </div>
      <Metrics />
      <WeeklyTrends />
      <ConversionFunnel />
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 col-span-full">
        <RejectionReasons />
        <QuickActions />
        <RecentActivity />
      </section>
    </main>
  );
};

export default Page;
