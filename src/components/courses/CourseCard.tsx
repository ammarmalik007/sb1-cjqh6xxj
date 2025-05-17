import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, BarChart } from 'lucide-react';
import { Course } from '../../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105">
      <Link to={`/courses/${course.id}`}>
        <div className="relative">
          <img 
            src={course.image} 
            alt={course.title} 
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
            {course.category}
          </div>
          {course.isFeatured && (
            <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
              Featured
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex items-center mb-2">
          <div className="flex items-center text-yellow-500 mr-2">
            <Star size={16} className="fill-yellow-500" />
            <span className="ml-1 text-sm font-medium">{course.rating}</span>
          </div>
          <span className="text-gray-600 text-sm">({course.reviewCount} reviews)</span>
        </div>
        
        <Link to={`/courses/${course.id}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">
            {course.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-700">
            <Clock size={16} className="mr-1" />
            <span className="text-sm">{course.duration}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <BarChart size={16} className="mr-1" />
            <span className="text-sm">{course.level}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <img 
              src={course.instructor.avatar} 
              alt={course.instructor.name} 
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-sm font-medium text-gray-700">{course.instructor.name}</span>
          </div>
          <span className="text-blue-600 font-bold">${course.price}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;