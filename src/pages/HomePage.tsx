import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Users, Award, Clock } from 'lucide-react';
import HeroSection from '../components/home/HeroSection';
import CourseCard from '../components/courses/CourseCard';
import TestimonialCard from '../components/home/TestimonialCard';
import { featuredCourses } from '../data/courses';
import { testimonials } from '../data/testimonials';

const HomePage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Courses</h2>
              <p className="text-gray-600 max-w-2xl">Explore our most popular courses and start your learning journey today.</p>
            </div>
            <Link 
              to="/courses" 
              className="mt-4 md:mt-0 flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
            >
              View All Courses <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Why Choose EduLearn</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We are committed to providing the best learning experience for our students.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Award className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with years of experience in their fields.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-teal-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Clock className="text-teal-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Learning</h3>
              <p className="text-gray-600">Study at your own pace with flexible scheduling and on-demand video lessons.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-orange-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Users className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Support</h3>
              <p className="text-gray-600">Join a community of learners and get support whenever you need it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">What Our Students Say</h2>
            <p className="max-w-2xl mx-auto opacity-90">Hear from our students about their experience with EduLearn.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Browse our course catalog and find the perfect course to advance your skills and career.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/courses"
              className="px-8 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              Explore Courses
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-blue-600 border border-blue-600 rounded-md font-medium hover:bg-gray-50 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;