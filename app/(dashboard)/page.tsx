import ConversionFunnel from "@/components/ConversionFunnel";
import MetricCard from "@/components/MetricCard";
import QuickActions from "@/components/QuickActions";
import RecentActivity from "@/components/RecentActivity";
import RejectionReasons from "@/components/RejectionReasons";
import TitleDesc from "@/components/TitleDesc";
import { Button } from "@/components/ui/button";
import WeeklyTrends from "@/components/WeeklyTrends";
import {
  Calendar,
  Clock,
  FileText,
  Plus,
  TrendingUp,
  Users,
} from "lucide-react";
import React from "react";

export const metricCardsData: metricCardPropsType[] = [
  {
    title: "Active Candidates",
    value: 127,
    icon: <Users className="h-4 w-4 text-muted-foreground" />,
    note: (
      <span>
        <span className="text-green-600">+12%</span> from last month
      </span>
    ),
    delay: 0,
  },
  {
    title: "Interviews Today",
    value: 8,
    icon: <Calendar className="h-4 w-4 text-muted-foreground" />,
    note: (
      <span>
        <span className="text-blue-600">3 scheduled</span> for this afternoon
      </span>
    ),
    delay: 0.1,
  },
  {
    title: "Monthly Interviews",
    value: 89,
    icon: <TrendingUp className="h-4 w-4 text-muted-foreground" />,
    note: (
      <span>
        <span className="text-green-600">+23%</span> from last month
      </span>
    ),
    delay: 0.2,
  },
  {
    title: "Pending Follow-ups",
    value: 15,
    icon: <Clock className="h-4 w-4 text-muted-foreground" />,
    note: (
      <span>
        <span className="text-orange-600">5 overdue</span> need attention
      </span>
    ),
    delay: 0.3,
  },
];

const Page = () => {
  return (
    <main className="grid grid-cols-4 gap-6 p-6">
      <section className="flex items-center justify-between col-span-4">
        <TitleDesc
          desc="Welcome back! Here's your recruiting overview."
          title="Dashboard"
        />
        <div className="flex items-center gap-2">
          <Button>
            <Plus />
            Add Candidate
          </Button>
          <Button variant="outline">
            <FileText />
            Export Report
          </Button>
        </div>
      </section>
      {metricCardsData.map((card, index) => (
        <MetricCard key={index} {...card} />
      ))}
      <WeeklyTrends />
      <ConversionFunnel />
      <section className="grid gap-6 md:grid-cols-3 col-span-4">
        <RejectionReasons />
        <QuickActions />
        <RecentActivity />
      </section>
    </main>
  );
};

export default Page;
