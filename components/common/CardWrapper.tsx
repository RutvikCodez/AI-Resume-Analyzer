import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "@/lib/utils";

const CardWrapper: React.FC<cardWrapperPropsType> = ({
  children,
  className,
  title,
  description,
  delay = 0,
}) => {
  return (
    <Card
      className={cn(
        "animate-slide-up transition-all duration-700 ease-out",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <CardHeader className="text-center flex flex-col gap-1">
        <CardTitle className="text-2xl font-semibold tracking-tight text-gray-800 dark:text-white">
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex flex-col gap-4">{children}</CardContent>
    </Card>
  );
};

export default CardWrapper;
