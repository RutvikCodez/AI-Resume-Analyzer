import React from "react";
import MetricCard from "../common/MetricCard";
import { Calendar, Clock, TrendingUp, Users } from "lucide-react";

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

const Metrics = () =>
  metricCardsData.map((card, index) => <MetricCard key={index} {...card} />);

export default Metrics;
