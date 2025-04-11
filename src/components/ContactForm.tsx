
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would handle form submission here
    console.log('Form submitted', formData);
    
    // Show success message
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-chocolate-800">Full Name</Label>
          <Input
            id="name"
            placeholder="Your name"
            required
            className="border-chocolate-200 focus:border-bakery-500 focus:ring-bakery-500"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-chocolate-800">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="Your email"
            required
            className="border-chocolate-200 focus:border-bakery-500 focus:ring-bakery-500"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject" className="text-chocolate-800">Subject</Label>
        <Input
          id="subject"
          placeholder="Subject of your inquiry"
          required
          className="border-chocolate-200 focus:border-bakery-500 focus:ring-bakery-500"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-chocolate-800">Message</Label>
        <Textarea
          id="message"
          placeholder="Your message"
          rows={5}
          required
          className="border-chocolate-200 focus:border-bakery-500 focus:ring-bakery-500"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" className="w-full bg-bakery-500 hover:bg-bakery-600 text-white py-3">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
