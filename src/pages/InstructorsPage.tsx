import React from 'react';
import { instructors } from '../data/instructors';
import { Star, Users, MonitorPlay, ExternalLink } from 'lucide-react';

const InstructorsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Instructors</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn from industry professionals with years of experience in their respective fields.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div 
              key={instructor.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative">
                <img 
                  src={instructor.avatar} 
                  alt={instructor.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h2 className="text-2xl font-bold text-white mb-1">{instructor.name}</h2>
                  <p className="text-white/90">{instructor.title}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star size={18} className="text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="font-medium">{instructor.rating}</span>
                    <span className="ml-1 text-gray-600">({instructor.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center text-blue-600">
                    <ExternalLink size={16} className="mr-1" />
                    <a href="#" className="text-sm font-medium hover:underline">View Profile</a>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {instructor.bio}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center text-gray-700">
                    <Users size={16} className="mr-1" />
                    <span className="text-sm">{instructor.studentsCount} students</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MonitorPlay size={16} className="mr-1" />
                    <span className="text-sm">{instructor.coursesCount} courses</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-medium text-gray-900 mb-2">Expertise:</h3>
                  <div className="flex flex-wrap gap-2">
                    {instructor.expertise.map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Our Team Section */}
        <div className="mt-16 bg-blue-600 text-white rounded-xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Become an Instructor</h2>
              <p className="text-lg opacity-90 mb-6">
                Share your knowledge and expertise with our global community of learners. Join our team of expert instructors and help shape the future of education.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    <span className="font-semibold">1</span>
                  </div>
                  <p>Apply to become an instructor</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    <span className="font-semibold">2</span>
                  </div>
                  <p>Create and upload your course content</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    <span className="font-semibold">3</span>
                  </div>
                  <p>Engage with students and earn revenue</p>
                </div>
              </div>
              <a 
                href="#" 
                className="inline-block px-8 py-3 bg-white text-blue-700 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300 text-center max-w-xs"
              >
                Apply Now
              </a>
            </div>
            <div className="hidden lg:block relative">
              <img 
                src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Become an instructor" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorsPage;