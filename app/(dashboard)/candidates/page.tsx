import React from "react";
import CandidateWrapper from "@/components/candidates/CandidateWrapper";
import TitleDesc from "@/components/common/TitleDesc";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Page = () => {
  return (
    <main className="p-6 flex flex-col gap-8">
      <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <TitleDesc
          title="Candidates"
          desc="Manage and track all candidate profiles and applications with ease."
        />
        <Button
          className="flex items-center gap-2 rounded-md shadow-sm hover:shadow-md transition-shadow"
          size="sm"
        >
          <Plus className="w-4 h-4" />
          <span>Add Candidate</span>
        </Button>
      </section>
      <section>
        <CandidateWrapper />
      </section>
    </main>
  );
};

export default Page;
