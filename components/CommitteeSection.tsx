import { CommitteeSectionProps } from "@/types";
import { CommitteeGrid } from "@/components/CommitteeGrid";

export const CommitteeSection: React.FC<CommitteeSectionProps> = ({ theme, committees, className = '' }) => {
  return (
    <section className={`space-y-6 ${className}`}>
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-purple-600 inline-block pb-2">
          {theme}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Engage in meaningful diplomatic discourse and shape global policy
        </p>
      </div>
      <CommitteeGrid committees={committees} />
    </section>
  );
};
