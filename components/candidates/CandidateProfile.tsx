import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Edit, Eye, Mail, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { priorityColors, statusColors } from "@/constant";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

const CandidateProfile: React.FC<candidateProfilePropsType> = ({
  id,
  name,
  email,
  position,
  status,
  priority,
  location,
  avatar,
}) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <Card key={id} className="animate-fade-in border hover:shadow-lg transition-shadow duration-300 rounded-xl flex flex-col gap-2">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">             
            <Avatar className="h-12 w-12">
              <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
              <AvatarFallback className="bg-muted font-bold">{initials}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-base leading-tight">{name}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                {position}
              </CardDescription>
            </div>
          </div>
          <Badge
            className={`text-xs capitalize ${priorityColors[priority as keyof typeof priorityColors]}`}
          >
            {priority}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-3 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Mail className="h-4 w-4" />
          <span className="truncate">{email}</span>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>

        <div className="flex items-center justify-between">
          <Badge
            className={`text-xs capitalize ${statusColors[status as keyof typeof statusColors]}`}
          >
            {status}
          </Badge>

          <div className="flex gap-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="hover:text-primary">
                    <Eye className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="hover:text-primary">
                    <Edit className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Edit</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CandidateProfile;
