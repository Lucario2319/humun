import { COMMITTEE_DATA } from '@/constants';
import { Committee } from '@/types';
import { CommitteeSection } from '@/components/CommitteeSection';

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
            HUmun <span className="text-purple-600">Committees</span>
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

        {/* Call to Action */}
        <footer className="text-center space-y-4 pt-12 border-t border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-900">Ready to Make Your Mark?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose your committee and prepare to engage in diplomatic excellence at HUmun
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            Register Now
          </button>
        </footer>
      </div>
    </div>
  );
};

export default CommitteesPage;