"use client";

import React, { FC } from "react";
import { sidebarActions } from "@/constant";
import CardWrapper from "../common/CardWrapper";
import { Button } from "../ui/button";

const QuickActions: FC = () => {
  return (
    <CardWrapper
      title="Quick Actions"
      description="Frequently used recruiting actions"
      delay={0.7}
    >
      <div className="flex flex-col gap-3">
        {sidebarActions.map(({ icon: Icon, label }, index) => (
          <Button
            key={index}
            variant="outline"
            className="w-full justify-start bg-transparent hover:bg-muted transition-all duration-200 flex items-center gap-2"
            aria-label={`Quick Action: ${label}`}
          >
            <Icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-200" />
            <span className="text-sm font-medium">{label}</span>
          </Button>
        ))}
      </div>
    </CardWrapper>
  );
};

export default QuickActions;
