"use client";

import React, { FC } from "react";
import { recentActivityItems } from "@/constant";
import CardWrapper from "../common/CardWrapper";
import { Badge } from "../ui/badge";

const RecentActivity: FC = () => {
  return (
    <CardWrapper
      title="Recent Activity"
      description="Latest recruiting activities"
      delay={0.8}
    >
      <ul
        className="flex flex-col gap-4"
        role="list"
        aria-label="Recent activity timeline"
      >
        {recentActivityItems.map(
          ({ color, title, description, time }, index) => (
            <li
              key={index}
              className="flex items-center gap-3 group transition-all duration-200 hover:bg-muted/40 p-2 rounded-md"
            >
              <span
                className="h-3 w-3 rounded-full shrink-0"
                style={{ backgroundColor: color }}
                aria-hidden="true"
              ></span>
              <div className="flex-1 text-sm flex flex-col gap-0.5">
                <p className="font-semibold text-foreground">{title}</p>
                <p className="text-muted-foreground">{description}</p>
              </div>
              <Badge variant="secondary" className="text-xs whitespace-nowrap">
                {time}
              </Badge>
            </li>
          )
        )}
      </ul>
    </CardWrapper>
  );
};

export default RecentActivity;
