import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const MetricCard: React.FC<metricCardPropsType> = ({ title, value, icon, note, delay = 0 }) => {
  return (
    <Card
      className="animate-slide-up flex flex-col gap-2"
      style={{ animationDelay: `${delay}s` }}
    >
      <CardHeader className="flex flex-row items-center justify-between gap-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{note}</p>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
