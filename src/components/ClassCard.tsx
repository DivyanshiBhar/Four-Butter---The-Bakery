
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Clock, Users, Calendar } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ClassCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  duration: string;
  capacity: string;
  date: string;
  category: string;
}

const ClassCard: React.FC<ClassCardProps> = ({
  title,
  description,
  imageUrl,
  price,
  duration,
  capacity,
  date,
  category,
}) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleBookNow = () => {
    setIsDialogOpen(true);
  };

  const handleSubmit = () => {
    if (!name || !phone) {
      toast({
        title: "Missing Information",
        description: "Please provide both your name and phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsDialogOpen(false);
    setName("");
    setPhone("");
    
    toast({
      title: "Class Booked!",
      description: `Thank you ${name}! We'll contact you soon at ${phone} with details about the ${title} class.`,
      duration: 5000,
    });
  };

  return (
    <>
      <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
        <div className="relative h-56 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
            }}
          />
          <div className="absolute top-0 right-0 bg-bakery-500 text-white py-1 px-3 rounded-bl-lg">
            {category}
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-serif text-xl font-bold text-chocolate-800 mb-2">{title}</h3>
          <p className="text-chocolate-600 mb-4 line-clamp-2">{description}</p>
          
          <div className="flex flex-col space-y-2 mb-4">
            <div className="flex items-center text-chocolate-600">
              <Clock size={16} className="mr-2 text-bakery-500" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center text-chocolate-600">
              <Users size={16} className="mr-2 text-bakery-500" />
              <span>{capacity} students</span>
            </div>
            <div className="flex items-center text-chocolate-600">
              <Calendar size={16} className="mr-2 text-bakery-500" />
              <span>{date}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <span className="text-xl font-bold text-bakery-600">{price}</span>
            <Button 
              className="bg-bakery-500 hover:bg-bakery-600 text-white"
              onClick={handleBookNow}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Book {title}</DialogTitle>
            <DialogDescription>
              Please provide your contact information to book this class. We'll get in touch with you soon.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-3"
                placeholder="Your full name"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="col-span-3"
                placeholder="Your phone number"
              />
            </div>
          </div>
          <DialogFooter>
            <Button 
              className="bg-bakery-500 hover:bg-bakery-600 text-white"
              onClick={handleSubmit}
            >
              Submit Booking
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ClassCard;
