import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
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
      className={cn("animate-slide-up", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CardWrapper;
