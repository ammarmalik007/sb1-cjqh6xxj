import React, { useState, useEffect } from 'react';
import { Calendar, Filter, Users, Clock, MapPin } from 'lucide-react';
import { scheduleEvents } from '../data/schedules';
import { ScheduleEvent } from '../types';

const SchedulePage: React.FC = () => {
  const [filteredEvents, setFilteredEvents] = useState<ScheduleEvent[]>(scheduleEvents);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showFilters, setShowFilters] = useState<boolean>(false);
  
  const categories = [...new Set(scheduleEvents.map(event => event.category))];

  useEffect(() => {
    const filtered = scheduleEvents.filter(event => {
      const matchesCategory = selectedCategory === '' || event.category === selectedCategory;
      const matchesSearch = 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.instructor.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
    
    setFilteredEvents(filtered);
  }, [selectedCategory, searchTerm]);

  const clearFilters = () => {
    setSelectedCategory('');
    setSearchTerm('');
  };

  // Group events by date
  const eventsByDate = filteredEvents.reduce((acc, event) => {
    if (!acc[event.date]) {
      acc[event.date] = [];
    }
    acc[event.date].push(event);
    return acc;
  }, {} as Record<string, ScheduleEvent[]>);

  // Sort dates
  const sortedDates = Object.keys(eventsByDate).sort((a, b) => {
    return new Date(a).getTime() - new Date(b).getTime();
  });

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Class Schedule</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our upcoming live classes, workshops, and events. Register early to secure your spot.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by class title or instructor..."
                className="w-full pl-4 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button 
              onClick={() => setShowFilters(!showFilters)} 
              className="md:w-auto w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors duration-300"
            >
              <Filter size={20} />
              <span>Filters</span>
            </button>
          </div>

          {showFilters && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            Showing <span className="font-medium">{filteredEvents.length}</span> upcoming classes
          </p>
        </div>

        {/* Schedule Timeline */}
        <div className="space-y-12">
          {filteredEvents.length > 0 ? (
            sortedDates.map(date => (
              <div key={date} className="relative">
                <div className="sticky top-20 bg-white z-10 py-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <Calendar size={20} className="text-blue-600 mr-2" />
                    <h2 className="text-xl font-bold text-gray-900">{date}</h2>
                  </div>
                </div>
                
                <div className="mt-6 space-y-6">
                  {eventsByDate[date].map(event => (
                    <div 
                      key={event.id} 
                      className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border-l-4 border-blue-600"
                    >
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row justify-between">
                          <div className="mb-4 md:mb-0">
                            <div className="flex items-center mb-2">
                              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mr-3">{event.category}</span>
                              <div className="flex items-center text-gray-500 text-sm">
                                <Clock size={16} className="mr-1" />
                                <span>{event.startTime} - {event.endTime}</span>
                              </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                            
                            <div className="flex items-center mb-4">
                              <img 
                                src={event.instructorAvatar} 
                                alt={event.instructor} 
                                className="w-8 h-8 rounded-full mr-2"
                              />
                              <span className="text-gray-700">Instructor: {event.instructor}</span>
                            </div>
                            
                            <div className="flex flex-wrap gap-4">
                              <div className="flex items-center text-gray-600">
                                <MapPin size={16} className="mr-1" />
                                <span>{event.location}</span>
                              </div>
                              <div className="flex items-center text-gray-600">
                                <Users size={16} className="mr-1" />
                                <span>{event.availableSeats} seats available</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col items-start md:items-end justify-between">
                            <div className="mb-4">
                              <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                                <div 
                                  className="bg-blue-600 h-2 rounded-full" 
                                  style={{ width: `${Math.round((event.availableSeats / event.totalSeats) * 100)}%` }}
                                ></div>
                              </div>
                              <div className="text-sm text-gray-600">
                                {event.availableSeats} of {event.totalSeats} seats left
                              </div>
                            </div>
                            <button 
                              className={`px-6 py-2 rounded-md font-medium transition-colors duration-300 ${
                                event.availableSeats > 0 
                                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                                  : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                              }`}
                              disabled={event.availableSeats === 0}
                            >
                              {event.availableSeats > 0 ? 'Register Now' : 'Sold Out'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">No events found matching your criteria.</p>
              <button
                onClick={clearFilters}
                className="px-6 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
        
        {/* Request a Class Section */}
        <div className="mt-16 bg-blue-600 text-white rounded-xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
              <p className="text-lg opacity-90 mb-6">
                Request a specific class or topic you'd like to learn. Our team will work to schedule additional sessions based on student demand.
              </p>
              <a 
                href="#" 
                className="inline-block px-8 py-3 bg-white text-blue-700 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300 text-center max-w-xs"
              >
                Request a Class
              </a>
            </div>
            <div className="hidden lg:block relative">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Students in a classroom" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;