import React, { useState, useEffect } from 'react';
import CourseCard from '../components/courses/CourseCard';
import { Search, Sliders } from 'lucide-react';
import { allCourses } from '../data/courses';
import { Course } from '../types';

const CoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(allCourses);
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['Web Development', 'Data Science', 'Design', 'Mobile Development', 'AI/ML'];
  const levels = ['Beginner', 'Intermediate', 'Advanced'];

  useEffect(() => {
    const filtered = allCourses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === '' || course.category === selectedCategory;
      const matchesLevel = selectedLevel === '' || course.level === selectedLevel;
      
      return matchesSearch && matchesCategory && matchesLevel;
    });
    
    setFilteredCourses(filtered);
  }, [searchTerm, selectedCategory, selectedLevel]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedLevel('');
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Browse Our Courses</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive selection of courses designed to help you master new skills and advance your career.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for courses..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button 
              onClick={() => setShowFilters(!showFilters)} 
              className="md:w-auto w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors duration-300"
            >
              <Sliders size={20} />
              <span>Filters</span>
            </button>
          </div>

          {showFilters && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Levels</option>
                    {levels.map((level) => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    onClick={clearFilters}
                    className="w-full p-2 text-blue-600 hover:text-blue-800 focus:outline-none transition-colors duration-300"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing <span className="font-medium">{filteredCourses.length}</span> courses
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <div className="col-span-3 py-12 text-center">
              <p className="text-gray-600 text-lg">No courses found matching your criteria.</p>
              <button
                onClick={clearFilters}
                className="mt-4 px-6 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;