import ConversionFunnel from "@/components/ConversionFunnel";
import MetricCard from "@/components/MetricCard";
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
    <main className="flex-1 flex flex-col gap-6 p-6">
      <section className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here&apos;s your recruiting overview.
          </p>
        </div>
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
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metricCardsData.map((card, index) => (
          <MetricCard key={index} {...card} />
        ))}
      </section>
      <section className="grid gap-6 md:grid-cols-2">
        <WeeklyTrends />
        <ConversionFunnel />
      </section>
    </main>
  );
};

export default Page;
