
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  imageUrl: string;
  quote: string;
  rating: number;
  course: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  imageUrl,
  quote,
  rating,
  course,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md card-hover">
      <div className="flex items-center mb-4">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-serif font-bold text-chocolate-800">{name}</h4>
          <p className="text-sm text-bakery-500">{course}</p>
        </div>
      </div>
      
      <p className="text-chocolate-600 italic mb-4">"{quote}"</p>
      
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star 
            key={index}
            size={16} 
            className={index < rating ? "text-bakery-500 fill-bakery-500" : "text-gray-300"}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
