import { Users, Award } from 'lucide-react';

// Director Message Component
const DirectorMsg = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
              <Award className="w-12 h-12 text-yellow-800" />
            </div>
          </div>
          
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
              Message from Director
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Welcome to Our Premier MUN Conference
            </h2>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                Dear Future Diplomats and Global Leaders,
              </p>
              <p>
                It is with great pleasure that I welcome you to our Annual Model United Nations Conference 2025. This year's conference promises to be our most ambitious yet, bringing together brilliant minds from universities across the region to tackle the world's most pressing challenges.
              </p>
              <p>
                Our carefully curated committees will provide you with authentic diplomatic experiences, from crisis management to sustainable development. You'll engage in meaningful debate, forge lasting friendships, and develop the critical thinking skills essential for tomorrow's leaders.
              </p>
              <p className="text-gray-900 font-semibold">
                Join us in this transformative journey of diplomatic excellence and global citizenship.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6 mb-8">
              <p className="text-gray-700 italic text-lg">
                "Model UN isn't just about debate—it's about understanding our interconnected world and our role in shaping its future."
              </p>
            </div>
            
            <div>
              <p className="font-semibold text-gray-900 text-lg">Dr. Sarah Johnson</p>
              <p className="text-blue-600 font-medium">Conference Director</p>
              <p className="text-gray-600">Department of International Relations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMsg;