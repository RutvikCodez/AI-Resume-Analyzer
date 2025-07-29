import CandidateWrapper from "@/components/candidates/CandidateWrapper";
import TitleDesc from "@/components/common/TitleDesc";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <main className="p-6 flex flex-col gap-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between col-span-full gap-4">
        <TitleDesc
          title="Candidates"
          desc="Manage and track all candidate profiles and applications."
        />
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          <span>Add Candidate</span>
        </Button>
      </div>
      <CandidateWrapper />
    </main>
  );
};

export default page;
