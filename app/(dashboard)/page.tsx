import { Button } from "@/components/ui/button";
import { Download, Plus } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <section className="flex-1 overflow-y-auto px-4 py-6 md:px-8 md:py-10 bg-muted/50">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Overview
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base font-medium">
            Track your recruitment progress and key performance metrics.
          </p>
        </div>
        <div className="flex gap-3">
          <Button className="bg-[#256D6B] hover:bg-[#1E524F] font-semibold py-3 rounded-lg shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E524F] text-black">
            <Plus />
            Add Candidate
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="hover:border-[#1E524F] font-semibold py-3 rounded-lg shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E524F] text-black"
          >
            <Download />
            Export Report
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Page;
