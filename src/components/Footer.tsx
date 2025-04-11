
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-chocolate-800 text-cream-100 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h4 className="font-serif text-xl font-bold text-white mb-4">Flour & Butter</h4>
            <p className="mb-4 opacity-80">
              Join us to learn the art and science of baking. From rustic breads to delicate pastries, 
              our experienced instructors will guide you to baking perfection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#classes" className="hover:text-bakery-300 transition-colors">Classes</a></li>
              <li><a href="#instructors" className="hover:text-bakery-300 transition-colors">Instructors</a></li>
              <li><a href="#about" className="hover:text-bakery-300 transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-bakery-300 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-bakery-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-bakery-400" />
                <span>123 Baking Street, Delhi, DL 110001, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-bakery-400" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-bakery-400" />
                <span>classes@flourandbutter.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-chocolate-700 pt-8 mt-8 text-center opacity-80">
          <p>&copy; {new Date().getFullYear()} Flour & Butter Baking Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
