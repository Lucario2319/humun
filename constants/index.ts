import { Globe, Calendar, Users, Award } from 'lucide-react';
import { CommitteeInfoLink, ColorClasses, Committee } from "@/types";

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

export const COMMITTEE_DATA: Committee[] = [
  // Security & Conflict Resolution
  {
    id: 'unsc',
    name: 'United Nations Security Council',
    description: 'Addressing global security threats and maintaining international peace',
    theme: 'Security & Conflict Resolution',
    backgroundImage: 'https://images.shutterstock.com/image-photo/united-nations-building-new-york-600nw-1951150365.jpg'
  },
  {
    id: 'disec',
    name: 'Disarmament and International Security Committee',
    description: 'Tackling nuclear proliferation and arms control challenges',
    theme: 'Security & Conflict Resolution',
    backgroundImage: 'https://images.shutterstock.com/image-photo/military-silhouettes-soldiers-weapons-600nw-1456164847.jpg'
  },
  {
    id: 'nato',
    name: 'North Atlantic Treaty Organization',
    description: 'Strengthening collective defense and transatlantic security',
    theme: 'Security & Conflict Resolution',
    backgroundImage: 'https://images.shutterstock.com/image-photo/brussels-belgium-march-2018-nato-600nw-1043914836.jpg'
  },

  // Economic & Development
  {
    id: 'ecosoc',
    name: 'Economic and Social Council',
    description: 'Promoting sustainable development and economic cooperation',
    theme: 'Economic & Development',
    backgroundImage: 'https://images.shutterstock.com/image-photo/business-people-meeting-concept-handshake-600nw-1877344467.jpg'
  },
  {
    id: 'g20',
    name: 'Group of Twenty Summit',
    description: 'Coordinating global economic policies and financial stability',
    theme: 'Economic & Development',
    backgroundImage: 'https://images.shutterstock.com/image-photo/modern-city-skyline-financial-district-600nw-1456789123.jpg'
  },
  {
    id: 'wto',
    name: 'World Trade Organization',
    description: 'Regulating international trade and resolving commercial disputes',
    theme: 'Economic & Development',
    backgroundImage: 'https://images.shutterstock.com/image-photo/global-business-international-trade-container-600nw-1234567890.jpg'
  },

  // Human Rights & Social Issues
  {
    id: 'unhrc',
    name: 'UN Human Rights Council',
    description: 'Protecting fundamental human rights and addressing violations',
    theme: 'Human Rights & Social Issues',
    backgroundImage: 'https://images.shutterstock.com/image-photo/diverse-hands-holding-each-other-600nw-1789456123.jpg'
  },
  {
    id: 'unicef',
    name: 'United Nations Children\'s Fund Executive Board',
    description: 'Safeguarding children\'s rights and promoting education worldwide',
    theme: 'Human Rights & Social Issues',
    backgroundImage: 'https://images.shutterstock.com/image-photo/happy-children-different-ethnicities-playing-600nw-1567890123.jpg'
  },
  {
    id: 'who',
    name: 'World Health Assembly',
    description: 'Combating global health crises and pandemic preparedness',
    theme: 'Human Rights & Social Issues',
    backgroundImage: 'https://images.shutterstock.com/image-photo/medical-healthcare-global-health-concept-600nw-1678901234.jpg'
  },

  // Environmental & Climate
  {
    id: 'unep',
    name: 'UN Environment Assembly',
    description: 'Leading global environmental governance and climate action',
    theme: 'Environmental & Climate',
    backgroundImage: 'https://images.shutterstock.com/image-photo/beautiful-green-forest-environmental-conservation-600nw-1890123456.jpg'
  },
  {
    id: 'cop',
    name: 'Conference of Parties - Climate Summit',
    description: 'Negotiating international climate agreements and carbon policies',
    theme: 'Environmental & Climate',
    backgroundImage: 'https://images.shutterstock.com/image-photo/renewable-energy-wind-turbines-solar-600nw-1456789012.jpg'
  },
  {
    id: 'arctic',
    name: 'Arctic Council',
    description: 'Addressing Arctic environmental protection and sustainable development',
    theme: 'Environmental & Climate',
    backgroundImage: 'https://images.shutterstock.com/image-photo/arctic-landscape-polar-bears-ice-600nw-1234567123.jpg'
  }
];
