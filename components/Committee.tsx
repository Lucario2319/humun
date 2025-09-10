import { COMMITTEE_DATA } from '@/constants';
import { Committee } from '@/types';
import { CommitteeSection } from '@/components/CommitteeSection';
import Link from 'next/link';

// Main Committees Page Component
const CommitteesPage: React.FC = () => {
  
  // Group committees by theme
  const groupedCommittees = COMMITTEE_DATA.reduce((acc, committee) => 
    {
      if (!acc[committee.theme]) {
        acc[committee.theme] = [];
      }
      acc[committee.theme].push(committee);
      return acc;
    }, {} as Record<string, Committee[]>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Page Header */}
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
            HUMUN VII <span className="text-primary-700">Committees</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join prestigious committees and engage in diplomatic discussions that shape our world. 
            Each committee offers unique challenges and opportunities for meaningful debate.
          </p>
        </header>

        {/* Committee Sections */}
        <main className="space-y-20">
          {Object.entries(groupedCommittees).map(([theme, committees]) => (
            <CommitteeSection
              key={theme}
              theme={theme}
              committees={committees}
            />
          ))}
        </main>

        
      </div>
    </div>
  );
};

export default CommitteesPage;