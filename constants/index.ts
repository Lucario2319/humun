import { Globe, Calendar, Users, Award } from 'lucide-react';
import { CommitteeInfoLink, ColorClasses, Committee } from "@/types";

export const REGISTRATION_LINK = "https://forms.gle/DSncQ5Q43vNgHfKB6";

export const QUICK_LINKS: CommitteeInfoLink[] = [
    {
        title: "Committee List",
        description: "Explore diverse committees covering global issues",
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
        href: REGISTRATION_LINK,
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
    backgroundImage: '/images/unsc.jpg'
  },
  {
    id: 'disec',
    name: 'Disarmament and International Security Committee',
    description: 'Tackling nuclear proliferation and arms control challenges',
    theme: 'Security & Conflict Resolution',
    backgroundImage: '/images/disec.jpg'
  },
  {
    id: 'specpol',
    name: 'Special Political and Decolonization Committee',
    description: 'Strengthening peacekeeping and decolonization efforts',
    theme: 'Security & Conflict Resolution',
    backgroundImage: '/images/specpol.jpg'
  },
  
  // Human Rights & Social Issues
  {
    id: 'sochum',
    name: 'Social, Humanitarian, and Cultural Committee',
    description: 'Addressing social, humanitarian, and cultural challenges faced by the global community. ',
    theme: 'Human Rights & Social Issues',
    backgroundImage: '/images/sochum.jpg'
  },
  {
    id: 'unwomen',
    name: 'United Nations Entity for Gender Equality and the Empowerment of Women',
    description: 'Dedicated to accelerating progress on gender equality and the empowerment of women and girls',
    theme: 'Human Rights & Social Issues',
    backgroundImage: '/images/unwomen.jpg'
  },
   // Global Crime and Legal
  {
    id: 'interpol',
    name: 'International Criminal Police Organization',
    description: 'Network for international police cooperation to combat transnational crime',
    theme: 'Global Crime and Legal',
    backgroundImage: '/images/interpol.jpg'
  },
  {
    id: 'icj',
    name: 'International Court of Justice',
    description: 'Cordinating international law and resolving legal disputes between states',
    theme: 'Global Crime and Legal',
    backgroundImage: '/images/icj.jpg'
  },

   // Economic & Development
  {
    id: 'ecofin',
    name: 'Economic and Financial Affairs Council',
    description: 'Promoting sustainable development and economic cooperation in the EU',
    theme: 'Economic & Development',
    backgroundImage: 'https://images.shutterstock.com/image-photo/arctic-landscape-polar-bears-ice-600nw-1234567123.jpg'
  },
  // Pakistan
  {
    id: 'pna',
    name: 'Pakistan National Assembly - Prime Minister\'s Crisis Cabinet',
    description: 'Discussing national crises and formulating strategic responses for Pakistan',
    theme: 'Pakistan',
    backgroundImage: '/images/pna.jpg'
  },
  // Crisis
  {
    id: 'crisis1',
    name: 'Crisis 1',
    description: '1917: Curtains on the Western Front',
    theme: 'Crisis',
    backgroundImage: '/images/crisis1.jpg'
  },
  {
    id: 'crisis2',
    name: 'Crisis 2',
    description: 'The Naxalite Uprising : The Emergency (1965-75)',
    theme: 'Crisis',
    backgroundImage: '/images/crisis2.jpg'
  },
  {
    id: 'crisis3',
    name: 'Crisis 3',
    description: 'After The War',
    theme: 'Crisis',
    backgroundImage: '/images/crisis3.jpg'
  },
  {
    id: 'crisis4',
    name: 'Crisis 4',
    description: 'Neither Settler Nor Native : The 14th Amendment on Trial',
    theme: 'Crisis',
    backgroundImage: '/images/crisis4.jpg'
  }
];
