import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClassCard from "@/components/ClassCard";
import InstructorCard from "@/components/InstructorCard";
import TestimonialCard from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  // Sample data for classes with rupee prices
  const classes = [
    {
      id: 1,
      title: "Artisan Bread Making",
      description: "Learn the art of crafting rustic artisan breads with natural fermentation and traditional techniques.",
      imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "₹9,500",
      duration: "3 hours",
      capacity: "8",
      date: "Every Saturday, 10:00 AM",
      category: "Bread",
    },
    {
      id: 2,
      title: "French Pastry Basics",
      description: "Master the fundamentals of French pastry, from flaky croissants to delicate éclairs and tarts.",
      imageUrl: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "₹12,000",
      duration: "4 hours",
      capacity: "6",
      date: "Sundays, 1:00 PM",
      category: "Pastry",
    },
    {
      id: 3,
      title: "Cake Decorating Workshop",
      description: "From buttercream techniques to fondant mastery, learn professional cake decorating skills.",
      imageUrl: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "₹10,800",
      duration: "3.5 hours",
      capacity: "10",
      date: "Fridays, 5:30 PM",
      category: "Cakes",
    },
  ];

  // Sample data for instructors with updated random images
  const instructors = [
    {
      id: 1,
      name: "Chef Vikas Khanna",
      role: "Head Pastry Instructor",
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "With 15 years of experience in Michelin-starred restaurants across the world, Chef Vikas brings authentic global pastry techniques to his students.",
    },
    {
      id: 2,
      name: "Baker Kunal Kapoor",
      role: "Artisan Bread Specialist",
      imageUrl: "https://randomuser.me/api/portraits/men/45.jpg",
      bio: "Kunal has dedicated his career to perfecting natural fermentation and traditional bread-making methods from around the world.",
    },
    {
      id: 3,
      name: "Ranveer Brar",
      role: "Cake Design Expert",
      imageUrl: "https://randomuser.me/api/portraits/men/68.jpg",
      bio: "An award-winning cake designer, Ranveer specializes in contemporary decorating techniques and creative flavor combinations.",
    },
  ];

  // Sample data for testimonials
  const testimonials = [
    {
      id: 1,
      name: "Jessica M.",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      quote: "The Artisan Bread class transformed my home baking. Chef Kunal is incredibly knowledgeable and patient.",
      rating: 5,
      course: "Artisan Bread Making",
    },
    {
      id: 2,
      name: "Michael T.",
      imageUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      quote: "Chef Vikas's French Pastry class was the highlight of my month. Worth every rupee for the techniques I learned.",
      rating: 5,
      course: "French Pastry Basics",
    },
    {
      id: 3,
      name: "Aisha K.",
      imageUrl: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      quote: "Ranveer's cake decorating workshop gave me skills I never thought I could master. Now I'm making cakes for family events!",
      rating: 4,
      course: "Cake Decorating Workshop",
    },
  ];

  // Navigation functions
  const goToClasses = () => {
    navigate('/classes');
  };
  
  const goToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-bakery-600 to-bakery-800 py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Master the Art of Baking with Expert Instructors
            </h1>
            <p className="text-cream-100 text-lg md:text-xl mb-8">
              Join our hands-on baking classes and learn professional techniques in a warm, supportive environment. From rustic breads to elegant pastries, discover the joy of creating delicious baked goods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-bakery-600 hover:bg-cream-100"
                onClick={goToClasses}
              >
                View Classes
                <ChevronRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Classes Section */}
      <section id="classes" className="py-20 bg-cream-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Popular Classes</h2>
            <p className="section-subtitle">Discover the joy of baking with our most sought-after courses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((classItem) => (
              <ClassCard key={classItem.id} {...classItem} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-bakery-500 hover:bg-bakery-600 text-white"
              onClick={goToClasses}
            >
              View All Classes
              <ChevronRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="section-title mb-6">About Flour & Butter Baking Academy</h2>
              <p className="text-chocolate-700 mb-4">
                Founded in 2024, Flour & Butter is dedicated to sharing the craft of baking through expert instruction in a welcoming environment. Our state-of-the-art teaching kitchen provides the perfect setting for students of all skill levels.
              </p>
              <p className="text-chocolate-700 mb-6">
                We believe in small class sizes, quality ingredients, and hands-on learning that empowers you to create beautiful baked goods with confidence.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <Check size={20} className="text-bakery-500 mr-3" />
                  <span className="text-chocolate-800">Professional instructors with industry experience</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-bakery-500 mr-3" />
                  <span className="text-chocolate-800">Small class sizes (maximum 10 students)</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-bakery-500 mr-3" />
                  <span className="text-chocolate-800">All equipment and premium ingredients provided</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-bakery-500 mr-3" />
                  <span className="text-chocolate-800">Take home your creations and detailed recipes</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1556910096-5cdca7b87418?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Baking class in action" 
                  className="rounded-xl shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
                  <div className="flex items-center space-x-4">
                    <div className="bg-bakery-100 p-3 rounded-full">
                      <span className="text-3xl font-bold text-bakery-600">1+</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-chocolate-800">Year of</h4>
                      <p className="text-bakery-500">Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="py-20 bg-cream-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Meet Our Expert Instructors</h2>
            <p className="section-subtitle">Learn from passionate professionals with years of industry experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <InstructorCard key={instructor.id} {...instructor} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-bakery-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Students Say</h2>
            <p className="section-subtitle">Hear from those who have experienced our classes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-bakery-600 py-16">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Baking Journey?
          </h2>
          <p className="text-cream-100 text-lg mb-8 max-w-2xl mx-auto">
            Join our community of passionate bakers and learn skills that will bring joy to your kitchen for years to come.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-bakery-600 hover:bg-cream-100"
            onClick={goToClasses}
          >
            Browse Our Classes
            <ChevronRight className="ml-2" size={16} />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title mb-6">Get in Touch</h2>
              <p className="text-chocolate-700 mb-8">
                Have questions about our classes or want to arrange a private session? 
                Fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <div className="bg-cream-50 p-6 rounded-xl mb-8">
                <h3 className="font-serif text-xl font-bold text-chocolate-800 mb-2">Our Location</h3>
                <p className="text-chocolate-700 mb-2">123 Baking Street</p>
                <p className="text-chocolate-700 mb-2">Delhi, DL 110001</p>
                <p className="text-chocolate-700 mb-4">India</p>
                
                <p className="text-chocolate-700 mb-2">
                  <span className="font-semibold">Email:</span> classes@flourandbutter.com
                </p>
                <p className="text-chocolate-700">
                  <span className="font-semibold">Phone:</span> +91 98765 43210
                </p>
              </div>
              
              <div>
                <h3 className="font-serif text-xl font-bold text-chocolate-800 mb-4">Hours of Operation</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-chocolate-700">Monday - Friday</span>
                    <span className="text-bakery-600 font-medium">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-chocolate-700">Saturday</span>
                    <span className="text-bakery-600 font-medium">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-chocolate-700">Sunday</span>
                    <span className="text-bakery-600 font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-cream-50 p-6 md:p-8 rounded-xl shadow-sm">
                <h3 className="font-serif text-2xl font-bold text-chocolate-800 mb-6">Contact Us</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
