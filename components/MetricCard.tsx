import React from "react";
import { Card, CardContent } from "./ui/card";

const MetricCard = ({title,value, ...props}: metricCardPropsType) => {
  return (
    <Card className="group relative overflow-hidden rounded-2xl bg-[#E8F5E9] p-1 shadow-md transition duration-300 hover:shadow-xl" {...props}>
      <div className="absolute inset-0 h-full w-full scale-105 transform bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 opacity-20 blur-xl transition duration-300 group-hover:scale-110" />
      <CardContent className="relative z-10 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-500 tracking-wide">
              {title}
            </p>
            <p className="mt-2 text-4xl font-extrabold text-slate-900">{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
