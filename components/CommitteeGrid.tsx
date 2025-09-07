import { CommitteeCard } from "@/components/CommitteeCard";
import { CommitteeGridProps } from "@/types";

export const CommitteeGrid: React.FC<CommitteeGridProps> = ({ committees, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {committees.map((committee) => (
        <CommitteeCard key={committee.id} committee={committee} />
      ))}
    </div>
  );
};