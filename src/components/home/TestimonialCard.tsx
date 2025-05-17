import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:bg-white/20 transition-all duration-300">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`${
              i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'
            } mr-1`}
          />
        ))}
      </div>
      <p className="italic mb-6">{testimonial.text}</p>
      <div className="flex items-center">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-4 border-2 border-white/30"
        />
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm opacity-80">{testimonial.course}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;