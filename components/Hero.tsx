import { Calendar, ChevronRight } from 'lucide-react';
import Link from "next/link";

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'url(/landing_page_bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'
          // backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 0%, transparent 50%)`
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          {/* Event Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium mb-8">
            <Calendar className="w-4 h-4 mr-2" />
            October 24-26, 2025 • University Campus
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            HU Model United Nations VIII
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {"Shaping Tomorrow's Leaders Through Diplomatic Excellence"}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/register" target='_blank'>
              {/* <button className="group bg-gradient-to-r from-primary-800 to-primary-800 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 hover:shadow-2xl flex items-center"> */}
              <button className="group bg-gradient-to-r from-primary-800 to-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-yellow-700 hover:to-yellow-900 transition-all transform hover:scale-105 hover:shadow-2xl flex items-center cursor-pointer">
                Register Now
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/about">
              <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all transform hover:scale-105 cursor-pointer">
                Learn More
              </button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-blue-200">Delegates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15</div>
              <div className="text-blue-200">Committees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-200">Schools & Colleges</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">3</div>
              <div className="text-blue-200">Days</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;