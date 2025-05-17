import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, Users, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtMThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAgMzZjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0xOC05YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wLTE4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wLTE4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0zNiA5YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wLTE4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wIDM2YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Unlock Your Potential With Expert-Led Courses
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-lg mx-auto lg:mx-0">
              Learn in-demand skills from industry experts and advance your career with our comprehensive online courses.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                to="/courses"
                className="px-8 py-3 bg-white text-blue-700 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Explore Courses
              </Link>
              <Link
                to="/about"
                className="px-8 py-3 bg-transparent border border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors duration-300 flex items-center justify-center"
              >
                <PlayCircle size={20} className="mr-2" /> Watch Video
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start text-sm">
              <div className="flex -space-x-2 mr-3">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1" alt="Student" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1" alt="Student" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1" alt="Student" className="w-8 h-8 rounded-full border-2 border-white" />
              </div>
              <span className="opacity-90">Join over 10,000+ students</span>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-white p-2 rounded-xl shadow-xl transform transition-transform duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                  alt="Students learning"
                  className="rounded-lg w-full"
                />
              </div>
              
              {/* Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-lg p-4 max-w-[200px]">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Users size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Students</p>
                    <p className="text-lg font-bold text-gray-900">10,000+</p>
                  </div>
                </div>
              </div>
              
              {/* Rating Card */}
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-[200px]">
                <div className="flex items-center mb-2">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <Star size={20} className="text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Rating</p>
                    <div className="flex items-center">
                      <p className="text-lg font-bold text-gray-900 mr-1">4.8</p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className={i < 4 ? "text-yellow-500 fill-yellow-500" : "text-yellow-500"} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;