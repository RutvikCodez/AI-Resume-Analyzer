import React from "react";
import { sidebarActions } from "@/constant";
import QuickActionsButton from "./QuickActionsButton";
import CardWrapper from "./CardWrapper";

const QuickActions = () => {
  return (
    <CardWrapper
      title="Quick Actions"
      description="Frequently used recruiting actions"
      delay={0.7}
    >
      <div className="flex flex-col gap-3">
        {sidebarActions.map((item, index) => (
          <QuickActionsButton key={index} {...item} />
        ))}
      </div>
    </CardWrapper>
  );
};

export default QuickActions;
