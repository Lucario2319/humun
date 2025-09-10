export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative text-white py-24 px-6" style={{backgroundImage: 'url(/bg_class_img.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-purple-600/30"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            About <span className="text-purple-600">Us</span>
          </h1>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              What is <span className="text-purple-600">HUMUN</span>
            </h2>
          {/* What is HUMUN */}
          <div className="mb-16 text-justify">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                {"Habib University Model United Nations (HUMUN) is the flagship conference of the Habib Debate Union and Karachi's premier student-led debating event. Each year, HUMUN brings together hundreds of young leaders, thinkers, and change-makers to engage in rigorous debate, diplomacy, and problem-solving on some of the world's most pressing issues."}
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                {"Since its inception, HUMUN has been committed to creating an inclusive, intellectually vibrant space where students from across Pakistan can sharpen their public speaking, negotiation, and leadership skills. With thousands of delegates having walked through its doors, HUMUN has grown into not just a conference, but a tradition of excellence, community, and critical engagement."}
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-600 p-6 rounded-r-lg mb-8">
                <p className="text-lg font-medium text-gray-800">
                  <strong>HUMUN VII</strong> is set to be the biggest Model United Nations conference in {"Karachi's"} history. With the theme of <em>Legacy, Opportunity, and Equity</em>, we are setting the stage for an unforgettable conference that honors our journey while opening doors to new possibilities for all delegates.
                </p>
              </div>
            </div>
          </div>

          {/* Our History */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Our <span className="text-purple-600">History</span>
            </h2>

            
            {/* Tradition and Innovation */}
            <div className="mb-12 text-justify">
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                {"The story of HUMUN began in October 2017, when the Habib Debate Union hosted Habib University’s very first Model United Nations conference. What started as a small initiative soon transformed into a major event on Karachi’s debating calendar, attracting students from across the city who were eager to experience an academically rigorous and welcoming platform."}
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                {"Over the years, HUMUN has grown exponentially. The sixth and seventh edition welcomed more than a thousand delegates, and our upcoming eighth edition is expected to host over eleven hundred participants—making it Karachi’s largest student-run debating conference. Along the way, HUMUN has expanded its network of institutional partnerships, strengthened its academic programming, and continued to raise the bar for MUN culture in Pakistan."}
              </p>
            </div>
          </div>

          {/* Our Legacy */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Our <span className="text-blue-600">Legacy</span>
            </h2>
            
            <div className="bg-gray-50 p-8 rounded-lg text-justify">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                In addition to hosting HUMUN, the Habib Debate Union trains and supports students throughout the year, participating in both Parliamentary Debates and Model United Nations conferences on local and international stages. Our commitment to excellence extends far beyond our annual conference.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold text-purple-600 mb-3">Our First Delegation in 2021</h4>
                  <p className="text-gray-700">
                    Habib University proudly sent its first delegation to <span className="underline">Harvard WorldMUN</span>, the {"world's"} most prestigious Model UN conference, where our delegates earned <strong>two Honorable Mentions</strong> — a milestone that underscored the growth and caliber of our community.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold text-blue-600 mb-3">Our Latest Achievement in 2025</h4>
                  <p className="text-gray-700">
                    Building on our previous success, our team returned to <span className="underline">Harvard WorldMUN</span> and proudly brought home the <strong>only Outstanding Delegate award</strong> presented to a Pakistani that year — a testament to our continued growth and global recognition.
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-gray-700 text-center font-medium">
                HUMUN builds upon <span className="text-purple-600 font-semibold">eight years</span> of experience, innovation, and dedication to creating {"Pakistan's"} premier Model United Nations experience.
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="text-justify">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">1100+</div>
                <div className="text-gray-700 font-medium">Expected Delegates (2024)</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">8</div>
                <div className="text-gray-700 font-medium">Years of Excellence</div>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-lg">
                <div className="text-4xl font-bold text-indigo-600 mb-2">1000+</div>
                <div className="text-gray-700 font-medium">Alumni Network</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join the HUMUN Experience</h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of {"Karachi's"} largest and most prestigious Model United Nations conference
          </p>
          <button className="bg-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600 transition-colors duration-200 shadow-lg">
            Register for HUMUN VII
          </button>
        </div>
      </section>

    </div>
  );
}