import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, 
  BarChart, 
  Users, 
  MonitorPlay, 
  FileText, 
  Lightbulb, 
  CheckCircle, 
  Calendar,
  Star
} from 'lucide-react';
import { allCourses } from '../data/courses';
import { Course } from '../types';

const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const foundCourse = allCourses.find(c => c.id === id);
    if (foundCourse) {
      setCourse(foundCourse);
      // Set the page title
      document.title = `${foundCourse.title} | EduLearn`;
    }
  }, [id]);

  if (!course) {
    return (
      <div className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">Course not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <span className="inline-block bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                {course.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg opacity-90 mb-6">{course.description}</p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <Star size={18} className="text-yellow-400 fill-yellow-400 mr-1" />
                  <span className="font-medium">{course.rating}</span>
                  <span className="ml-1 opacity-90">({course.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center">
                  <Users size={18} className="mr-1" />
                  <span>{course.studentsCount} students</span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <img 
                    src={course.instructor.avatar} 
                    alt={course.instructor.name} 
                    className="w-12 h-12 rounded-full mr-3 border-2 border-white"
                  />
                  <div>
                    <span className="block font-medium">Instructor: {course.instructor.name}</span>
                    <span className="opacity-90">{course.instructor.title}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <Clock size={16} className="mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <BarChart size={16} className="mr-2" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <MonitorPlay size={16} className="mr-2" />
                  <span>{course.lectures} lectures</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <Calendar size={16} className="mr-2" />
                  <span>Last updated {course.lastUpdated}</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden text-gray-900">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold text-gray-900">${course.price}</span>
                    {course.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">${course.originalPrice}</span>
                    )}
                  </div>
                  
                  <button className="w-full py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors duration-300 mb-4">
                    Enroll Now
                  </button>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="font-semibold mb-3">This course includes:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <MonitorPlay size={18} className="text-blue-600 mr-2" />
                        <span>{course.lectures} on-demand videos</span>
                      </li>
                      <li className="flex items-center">
                        <FileText size={18} className="text-blue-600 mr-2" />
                        <span>Downloadable resources</span>
                      </li>
                      <li className="flex items-center">
                        <Lightbulb size={18} className="text-blue-600 mr-2" />
                        <span>Practical exercises</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle size={18} className="text-blue-600 mr-2" />
                        <span>Certificate of completion</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Content Tabs */}
      <div className="container mx-auto px-4 py-8">
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-3 font-medium text-sm mr-8 border-b-2 whitespace-nowrap ${
                activeTab === 'overview' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('curriculum')}
              className={`px-4 py-3 font-medium text-sm mr-8 border-b-2 whitespace-nowrap ${
                activeTab === 'curriculum' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Curriculum
            </button>
            <button
              onClick={() => setActiveTab('instructor')}
              className={`px-4 py-3 font-medium text-sm mr-8 border-b-2 whitespace-nowrap ${
                activeTab === 'instructor' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Instructor
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-4 py-3 font-medium text-sm mr-8 border-b-2 whitespace-nowrap ${
                activeTab === 'reviews' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Reviews
            </button>
          </nav>
        </div>
        
        {/* Tab Content */}
        <div className="mb-12">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="animate-fadeIn">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What you'll learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {course.whatYouWillLearn.map((item, index) => (
                      <div key={index} className="flex">
                        <CheckCircle size={20} className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Description</h2>
                  <div className="prose max-w-none mb-8">
                    <p className="mb-4">
                      {course.fullDescription?.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-4">{paragraph}</p>
                      ))}
                    </p>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
                  <ul className="list-disc pl-5 mb-8 space-y-2">
                    {course.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">This course is for:</h3>
                    <ul className="space-y-3">
                      {course.targetAudience.map((item, index) => (
                        <li key={index} className="flex">
                          <CheckCircle size={20} className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                          <p>{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Curriculum Tab */}
          {activeTab === 'curriculum' && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
              <div className="space-y-4">
                {course.curriculum.map((section, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 flex justify-between items-center cursor-pointer">
                      <h3 className="font-semibold">{section.title}</h3>
                      <div className="text-sm text-gray-600">
                        {section.lessons.length} lessons • {section.duration}
                      </div>
                    </div>
                    <div className="divide-y divide-gray-200">
                      {section.lessons.map((lesson, idx) => (
                        <div key={idx} className="px-6 py-4 flex justify-between items-center">
                          <div className="flex items-center">
                            <MonitorPlay size={18} className="text-blue-600 mr-3" />
                            <span>{lesson.title}</span>
                          </div>
                          <div className="text-sm text-gray-600">{lesson.duration}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Instructor Tab */}
          {activeTab === 'instructor' && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Instructor</h2>
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-1/4">
                  <img 
                    src={course.instructor.avatar} 
                    alt={course.instructor.name} 
                    className="w-40 h-40 object-cover rounded-full mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900">{course.instructor.name}</h3>
                  <p className="text-gray-600 mb-4">{course.instructor.title}</p>
                  <div className="flex items-center mb-4">
                    <Star size={18} className="text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="font-medium">{course.instructor.rating}</span>
                    <span className="ml-1 text-gray-600">({course.instructor.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Users size={18} className="text-gray-600 mr-2" />
                    <span className="text-gray-600">{course.instructor.studentsCount} students</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <MonitorPlay size={18} className="text-gray-600 mr-2" />
                    <span className="text-gray-600">{course.instructor.coursesCount} courses</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-700 mb-6">
                    {course.instructor.bio}
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Reviews</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-xl p-6 text-center">
                    <div className="text-5xl font-bold text-gray-900 mb-2">{course.rating}</div>
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={20} 
                          className={i < Math.floor(course.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6">Course Rating</p>
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((num) => (
                        <div key={num} className="flex items-center">
                          <div className="flex items-center w-20">
                            {num} <Star size={14} className="ml-1 text-yellow-400 fill-yellow-400" />
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5 ml-2">
                            <div 
                              className="bg-yellow-400 h-2.5 rounded-full" 
                              style={{ width: `${num === 5 ? 70 : num === 4 ? 20 : num === 3 ? 7 : num === 2 ? 2 : 1}%` }}
                            ></div>
                          </div>
                          <span className="ml-2 text-sm text-gray-600">
                            {num === 5 ? '70%' : num === 4 ? '20%' : num === 3 ? '7%' : num === 2 ? '2%' : '1%'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="space-y-6">
                    {course.reviews?.map((review, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <div className="flex items-start mb-4">
                          <img 
                            src={review.userAvatar} 
                            alt={review.userName} 
                            className="w-10 h-10 rounded-full mr-4"
                          />
                          <div>
                            <h4 className="font-medium">{review.userName}</h4>
                            <div className="flex items-center">
                              <div className="flex mr-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    size={14} 
                                    className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-600">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;