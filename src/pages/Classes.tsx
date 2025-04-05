
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClassCard from "@/components/ClassCard";

const Classes = () => {
  // Sample data for classes (same as in Index.tsx)
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
    {
      id: 4,
      title: "Indian Desserts Masterclass",
      description: "Learn how to make traditional Indian sweets and desserts with modern presentations.",
      imageUrl: "https://images.unsplash.com/photo-1590011288934-09f1ff168dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      price: "₹8,500",
      duration: "3 hours",
      capacity: "12",
      date: "Thursdays, 4:00 PM",
      category: "Desserts",
    },
    {
      id: 5,
      title: "Sourdough Bread Workshop",
      description: "Master the art of sourdough bread making with traditional fermentation techniques.",
      imageUrl: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "₹11,000",
      duration: "5 hours",
      capacity: "8",
      date: "Saturdays, 9:00 AM",
      category: "Bread",
    },
    {
      id: 6,
      title: "Chocolate Making Workshop",
      description: "Learn the art of tempering chocolate and creating beautiful confections.",
      imageUrl: "https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "₹13,500",
      duration: "4 hours",
      capacity: "6",
      date: "Sundays, 10:00 AM",
      category: "Chocolate",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-cream-50">
      <Navbar />
      
      {/* Classes Hero */}
      <section className="bg-bakery-600 py-16">
        <div className="container-custom text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Our Baking Classes
          </h1>
          <p className="text-cream-100 text-lg mb-8 max-w-2xl mx-auto">
            Discover our range of hands-on baking classes taught by expert chefs. From artisan bread to elegant pastries, there's something for everyone.
          </p>
        </div>
      </section>

      {/* All Classes Section */}
      <section className="py-20 bg-cream-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((classItem) => (
              <ClassCard key={classItem.id} {...classItem} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Classes;
