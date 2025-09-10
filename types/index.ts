export interface CommitteeInfoLink {
    title: string;
    description: string;
    icon: React.ElementType;
    href: string;
    color: string;
}

export interface ColorClasses {
    blue: string;
    purple: string;
    green: string;
    orange: string;
}

export interface Committee {
  id: string;
  name: string;
  description: string;
  theme: string;
  backgroundImage: string;
}

export interface CommitteeCardProps {
  committee: Committee;
  className?: string;
}

export interface CommitteeGridProps {
  committees: Committee[];
  className?: string;
}

export interface CommitteeSectionProps {
  theme: string;
  committees: Committee[];
  className?: string;
}

export interface CallToActionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}
