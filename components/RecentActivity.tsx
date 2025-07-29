import React from "react";
import { recentActivityItems } from "@/constant";
import RecentActivityItem from "./RecentActivityItem";
import CardWrapper from "./CardWrapper";

const RecentActivity = () => {
  return (
    <CardWrapper
      title="Recent Activity"
      description="Latest recruiting activities"
      delay={0.8}
    >
      <div className="flex flex-col gap-4">
        {recentActivityItems.map((item, index) => (
          <RecentActivityItem key={index} {...item} />
        ))}
      </div>
    </CardWrapper>
  );
};

export default RecentActivity;
