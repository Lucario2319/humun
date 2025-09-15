import { Award } from 'lucide-react';

// Director Message Component
const DirectorMsg = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative" style={{backgroundImage: 'url(/director.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="aspect-square rounded-2xl overflow-hidden">
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
              <Award className="w-12 h-12 text-yellow-800" />
            </div>
          </div>
          
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-6">
              Message from the President
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Welcome to Our Premier MUN Conference
            </h2>
            
            <div className="prose prose-lg text-gray-600 mb-8 text-justify">
              <p>
                Dear Future Diplomats and Global Leaders,
              </p>
              <br />
              <p>
                {"On behalf of the Executive Council, it is my absolute honour to welcome you to the 8th Annual Iteration of the Habib University Model United Nations (HUMUN VIII). We are delighted to host you on our campus from Friday, October 24th to Sunday, October 26th, 2025 for what promises to be an unforgettable conference."}
              </p>
              <br />
              <p>
                {"Since its inception, HUMUN has established itself as a unique space for dialogue, diplomacy, and learning in Karachi. Each year, our conference brings together students from across Pakistan to tackle some of the most urgent global challenges with creativity, courage, and collaboration. HUMUN VIII is no different: with a wide array of committees and agendas, we hope to push delegates to think critically, negotiate skillfully, and craft solutions that reflect the values of empathy, equity, and inclusivity."}
              </p>
              <br />
              <p>
                {"But HUMUN has always been more than just its committees. It is a community, a space where lifelong friendships are forged, where diverse perspectives collide, and where young voices are amplified. This year is especially historic for us, as HUMUN VIII will be led by the first-ever all-female Executive Council at a university-level MUN in Pakistan, a milestone that embodies our theme: Equity, Legacy, and Opportunity."}
              </p>
              <br />
              <p>
                {"The Executive Council and I cannot wait to host you this October. Together, let us carry forward HUMUN’s tradition of critical thought, eloquence, and community, and make this year’s conference one to remember."}
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6 mb-8">
              <p className="text-gray-700 italic text-lg">
                {"\"Join us in this transformative journey of diplomatic excellence and global citizenship.\""}
              </p>
            </div>
            
            <div>
              <p className="font-semibold text-gray-900 text-lg">Mahrukh Usmani</p>
              <p className="text-primary-700 font-medium">President HUMUN VIII</p>
              <p className="text-gray-600">Social Development and Policy, Class of 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMsg;