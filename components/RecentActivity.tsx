import React from "react";
import { recentActivityItems } from "@/constant";
import CardWrapper from "./CardWrapper";
import { Badge } from "./ui/badge";

const RecentActivity = () => {
  return (
    <CardWrapper
      title="Recent Activity"
      description="Latest recruiting activities"
      delay={0.8}
    >
      <div className="flex flex-col gap-4">
        {recentActivityItems.map(
          ({ color, description, time, title }, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className={`p-2 rounded-full`}
                style={{ backgroundColor: color }}
              ></div>
              <div className="flex-1 text-sm">
                <p className="font-medium">{title}</p>
                <p className="text-muted-foreground">{description}</p>
              </div>
              <Badge variant="secondary">{time}</Badge>
            </div>
          )
        )}
      </div>
    </CardWrapper>
  );
};

export default RecentActivity;
