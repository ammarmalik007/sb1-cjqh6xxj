import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, MessageSquare, User } from 'lucide-react';
import { ContactFormData } from '../types';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We're here to help. Reach out to our team using the contact form or the information below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-blue-600 text-white rounded-xl p-8 shadow-xl h-full">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full p-3 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <p className="mt-1 opacity-90">123 Education Street, Learning City, 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full p-3 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="mt-1 opacity-90">contact@edulearn.com</p>
                    <p className="mt-1 opacity-90">support@edulearn.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full p-3 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="mt-1 opacity-90">(123) 456-7890</p>
                    <p className="mt-1 opacity-90">(123) 456-7891</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full p-3 mr-4">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Office Hours</h3>
                    <p className="mt-1 opacity-90">Monday - Friday: 9AM - 5PM</p>
                    <p className="mt-1 opacity-90">Saturday: 10AM - 2PM</p>
                    <p className="mt-1 opacity-90">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-blue-500">
                <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-500 hover:bg-blue-400 transition-colors p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-500 hover:bg-blue-400 transition-colors p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-500 hover:bg-blue-400 transition-colors p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-500 hover:bg-blue-400 transition-colors p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-100 border border-green-200 text-green-800 rounded-lg p-6 flex items-start animate-fadeIn">
                  <CheckCircle size={24} className="mr-3 flex-shrink-0 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-lg">Message Sent Successfully!</h3>
                    <p className="mt-1">Thank you for contacting us. We'll get back to you as soon as possible.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                        Your Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                          placeholder="John Doe"
                        />
                      </div>
                      {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                        Your Email *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                          placeholder="example@email.com"
                        />
                      </div>
                      {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">
                      Subject *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MessageSquare size={18} className="text-gray-400" />
                      </div>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      >
                        <option value="">Select a subject</option>
                        <option value="Course Inquiry">Course Inquiry</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Billing Question">Billing Question</option>
                        <option value="Partnership Opportunity">Partnership Opportunity</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                    {errors.subject && <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>
                          Send Message <Send size={18} className="ml-2" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30594994064!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1617834559191!5m2!1sen!2s" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            loading="lazy"
            title="EduLearn location map"
          ></iframe>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our courses, enrollment process, and more.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How do I enroll in a course?</h3>
              <p className="text-gray-600">
                To enroll in a course, browse our course catalog, select the course you're interested in, and click the "Enroll Now" button. Follow the checkout process to complete your enrollment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for course payments. We also offer installment payment options for select courses.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Can I get a refund if I'm not satisfied?</h3>
              <p className="text-gray-600">
                Yes, we offer a 30-day money-back guarantee for most of our courses. If you're not satisfied with your purchase, contact our support team within 30 days of enrollment for a full refund.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How long do I have access to a course?</h3>
              <p className="text-gray-600">
                Once enrolled, you have lifetime access to the course materials. You can review and revisit the content whenever you need to refresh your knowledge or skills.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
            <a 
              href="#" 
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              View All FAQs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;