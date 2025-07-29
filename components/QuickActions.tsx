import React from "react";
import { sidebarActions } from "@/constant";
import CardWrapper from "./CardWrapper";
import { Button } from "./ui/button";

const QuickActions = () => {
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
            className="w-full justify-start bg-transparent flex gap-2"
            variant="outline"
          >
            <Icon className="h-4 w-4" />
            {label}
          </Button>
        ))}
      </div>
    </CardWrapper>
  );
};

export default QuickActions;
