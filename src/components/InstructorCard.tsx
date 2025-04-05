
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface InstructorCardProps {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

const InstructorCard: React.FC<InstructorCardProps> = ({
  name,
  role,
  imageUrl,
  bio,
}) => {
  // Extract initials for avatar fallback
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
      <div className="relative h-64 md:h-72 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 99)}.jpg`;
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-chocolate-800">{name}</h3>
        <p className="text-bakery-500 font-medium mb-3">{role}</p>
        <p className="text-chocolate-600 mb-4 line-clamp-3">{bio}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
