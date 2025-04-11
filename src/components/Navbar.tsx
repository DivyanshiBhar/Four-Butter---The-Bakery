
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToClasses = () => {
    setIsMenuOpen(false);
    navigate('/classes');
  };

  const goToContact = () => {
    setIsMenuOpen(false);
    scrollToSection('contact');
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm py-4 sticky top-0 z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <span className="font-serif text-2xl font-bold text-bakery-600">Flour <span className="text-chocolate-800">&</span> Butter</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => goToClasses()} className="text-chocolate-800 hover:text-bakery-500 transition-colors">
              Classes
            </button>
            <button onClick={() => scrollToSection('instructors')} className="text-chocolate-800 hover:text-bakery-500 transition-colors">
              Instructors
            </button>
            <button onClick={() => scrollToSection('about')} className="text-chocolate-800 hover:text-bakery-500 transition-colors">
              About Us
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-chocolate-800 hover:text-bakery-500 transition-colors">
              Testimonials
            </button>
            <Button className="bg-bakery-500 hover:bg-bakery-600 text-white" onClick={goToContact}>
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-chocolate-800"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-3">
            <button onClick={() => goToClasses()} className="block w-full text-left text-chocolate-800 hover:text-bakery-500 py-2 transition-colors">
              Classes
            </button>
            <button onClick={() => scrollToSection('instructors')} className="block w-full text-left text-chocolate-800 hover:text-bakery-500 py-2 transition-colors">
              Instructors
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-chocolate-800 hover:text-bakery-500 py-2 transition-colors">
              About Us
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-chocolate-800 hover:text-bakery-500 py-2 transition-colors">
              Testimonials
            </button>
            <Button className="w-full bg-bakery-500 hover:bg-bakery-600 text-white" onClick={goToContact}>
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
