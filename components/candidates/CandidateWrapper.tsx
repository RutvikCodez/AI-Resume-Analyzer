"use client";
import { candidates, filters } from "@/constant";
import React, { useState } from "react";
import CandidateProfile from "./CandidateProfile";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const CandidateWrapper = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  const filterSetters: Record<string, React.Dispatch<React.SetStateAction<string>>> = {
    statusFilter: setStatusFilter,
    priorityFilter: setPriorityFilter,
  };

  const filteredCandidates = candidates.filter((candidate) => {
    const matchesSearch =
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.position.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || candidate.status === statusFilter;

    const matchesPriority =
      priorityFilter === "all" || candidate.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-2 justify-end">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search candidates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8 w-[300px]"
          />
        </div>

        {filters.map(({ label, stateKey, options }) => (
          <Select
            key={label}
            value={stateKey === "statusFilter" ? statusFilter : priorityFilter}
            onValueChange={filterSetters[stateKey]}
          >
            <SelectTrigger className={label === "Status" ? "w-[150px]" : "w-[120px]"}>
              <SelectValue placeholder={label} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredCandidates.map((candidate, index) => (
          <CandidateProfile key={index} {...candidate} />
        ))}
      </div>
    </section>
  );
};

export default CandidateWrapper;
