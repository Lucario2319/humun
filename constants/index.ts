import { Globe, Calendar, Users, Award } from 'lucide-react';
import { CommitteeInfoLink, ColorClasses } from "@/types";

export const QUICK_LINKS: CommitteeInfoLink[] = [
    {
        title: "Committee List",
        description: "Explore our 15 diverse committees covering global issues",
        icon: Globe,
        href: "committees",
        color: "blue"
    },
    {
        title: "Schedule",
        description: "Complete timeline of events and sessions",
        icon: Calendar,
        href: "schedule", 
        color: "purple"
    },
    {
        title: "Registration",
        description: "Secure your spot in this premier conference",
        icon: Users,
        href: "register",
        color: "green"
    },
    {
        title: "Resources",
        description: "Study guides, position papers, and prep materials",
        icon: Award,
        href: "resources",
        color: "orange"
    }
  ];

export const COLOR_CLASSES: ColorClasses = {
    blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
    purple: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
    green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
    orange: "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
};