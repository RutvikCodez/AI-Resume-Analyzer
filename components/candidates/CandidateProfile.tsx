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
  return (
    <Card key={id} className="animate-slide-up flex flex-col gap-3">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={avatar || "/placeholder.svg"} />
              <AvatarFallback>
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{name}</CardTitle>
              <CardDescription>{position}</CardDescription>
            </div>
          </div>
          <Badge
            className={priorityColors[priority as keyof typeof priorityColors]}
          >
            {priority}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Mail className="h-4 w-4" />
          <span>{email}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        <div className="flex items-center justify-between">
          <Badge className={statusColors[status as keyof typeof statusColors]}>
            {status}
          </Badge>
          <div className="flex gap-1">
            <Button variant="ghost" size="sm">
              <Eye className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Edit className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CandidateProfile;
