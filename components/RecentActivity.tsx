import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { recentActivityItems } from "@/constant";
import RecentActivityItem from "./RecentActivityItem";

const RecentActivity = () => {
  return (
    <Card className="animate-slide-up" style={{ animationDelay: "0.8s" }}>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest recruiting activities</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {recentActivityItems.map((item, index) => (
          <RecentActivityItem key={index} {...item} />
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
