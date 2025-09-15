import { Globe, Calendar, Users, DollarSign } from 'lucide-react';
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
        href: "register",
        color: "green"
    },
    {
        title: "Pricing",
        description: "Transparent pricing for all attendees",
        icon: DollarSign,
        href: "pricing",
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
    description: 'The Last Drop',
    theme: 'Security & Conflict Resolution',
    backgroundImage: '/images/unsc.jpg'
  },
  {
    id: 'disec',
    name: 'Disarmament and International Security Committee',
    description: 'The Weaponization of Mis-Information',
    theme: 'Security & Conflict Resolution',
    backgroundImage: '/images/disec.jpg'
  },
  {
    id: 'specpol',
    name: 'Special Political and Decolonization Committee',
    description: 'Who Belongs? Identity Politics and the Surge of Nationalist Extremism',
    theme: 'Security & Conflict Resolution',
    backgroundImage: '/images/specpol.jpg'
  },
  
  // Human Rights & Social Issues
  {
    id: 'sochum',
    name: 'Social, Humanitarian, and Cultural Committee',
    description: 'Modern Day Concentration Camps - Legality of Migrant Jails',
    theme: 'Human Rights & Social Issues',
    backgroundImage: '/images/sochum.jpg'
  },
  {
    id: 'unwomen',
    name: 'United Nations Entity for Gender Equality and the Empowerment of Women',
    description: 'Revival Of Matriarchal Societies',
    theme: 'Human Rights & Social Issues',
    backgroundImage: '/images/unwomen.jpg'
  },
   // Global Crime and Legal
  {
    id: 'interpol',
    name: 'International Criminal Police Organization',
    description: 'Combatting the Rise of Non-State Paramilitary and Insurgent Forces',
    theme: 'Global Crime and Legal',
    backgroundImage: '/images/interpol.jpg'
  },
  {
    id: 'icj',
    name: 'International Court of Justice',
    description: 'Blood and Sand : A Struggle in the Sahara',
    theme: 'Global Crime and Legal',
    backgroundImage: '/images/icj.jpg'
  },

   // Economic & Development
  {
    id: 'ecofin',
    name: 'Economic and Financial Affairs Council',
    description: 'Formalizing International Carbon Credit Markets',
    theme: 'Economic & Development',
    backgroundImage: 'https://images.shutterstock.com/image-photo/arctic-landscape-polar-bears-ice-600nw-1234567123.jpg'
  },
  // Pakistan
  {
    id: 'pna',
    name: 'Pakistan National Assembly - Prime Minister\'s Crisis Cabinet',
    description: 'Kargil 1999',
    theme: 'Pakistan',
    backgroundImage: '/images/pna.jpg'
  },
  // Crisis
  {
    id: 'crisis1',
    name: '1917: Curtains on the Western Front',
    description: '',
    theme: 'Crisis',
    backgroundImage: '/images/crisis1.jpg'
  },
  {
    id: 'crisis2',
    name: 'The Naxalite Uprising : The Emergency (1965-75)',
    description: '',
    theme: 'Crisis',
    backgroundImage: '/images/crisis2.jpg'
  },
  {
    id: 'crisis3',
    name: 'After The War',
    description: '',
    theme: 'Crisis',
    backgroundImage: '/images/crisis3.jpg'
  },
  {
    id: 'crisis4',
    name: 'Neither Settler Nor Native : The 14th Amendment on Trial',
    description: '',
    theme: 'Crisis',
    backgroundImage: '/images/crisis4.jpg'
  }
];
