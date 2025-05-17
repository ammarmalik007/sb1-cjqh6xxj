import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen size={28} className="text-blue-400" />
              <span className="text-xl font-bold">EduLearn</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering students with quality education and skills for the future. 
              Join our community of learners and expert instructors today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-white transition-colors duration-300">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/instructors" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Our Instructors
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Class Schedule
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Popular Courses</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/courses/web-development" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/courses/data-science" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Data Science & Analytics
                </Link>
              </li>
              <li>
                <Link to="/courses/ui-design" className="text-gray-400 hover:text-white transition-colors duration-300">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/courses/mobile-development" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/courses/artificial-intelligence" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Artificial Intelligence
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Education Street, Learning City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">contact@edulearn.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2 text-white">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest courses and educational resources</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button 
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} EduLearn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;