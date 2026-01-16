import React, { useState } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send, Section } from 'lucide-react';
import ContactInfo from '../components/ContactInfo';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };


  return (
    <section id='contact'>
    <div className="min-h-screen bg-[#030712] text-white p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div className="space-y-6">
          <ContactInfo Icon={Mail} title="Email" value="vikrambhumihaar@gmail.com" />
          <ContactInfo Icon={MapPin} title="Location" value="Punjab, India" />

          <div className="mt-8">
            <p className="text-gray-400 mb-4">Follow me on</p>
            <div className="flex gap-4">
              {[Github, Linkedin, Twitter].map((SocialIcon, idx) => (
                <a key={idx} href="#" className="bg-[#0a121e] border border-gray-800 p-3 rounded-xl hover:bg-gray-800 transition-colors">
                  <SocialIcon size={20} className="text-gray-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#0a121e] border border-gray-800 p-8 rounded-3xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  placeholder="vikram"
                  className="w-full bg-[#111827] border border-gray-800 rounded-lg p-3 focus:outline-none focus:border-cyan-500 transition-colors"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  placeholder="vikram@example.com"
                  className="w-full bg-[#111827] border border-gray-800 rounded-lg p-3 focus:outline-none focus:border-cyan-500 transition-colors"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <input
                type="text"
                placeholder="Project Inquiry"
                className="w-full bg-[#111827] border border-gray-800 rounded-lg p-3 focus:outline-none focus:border-cyan-500 transition-colors"
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full bg-[#111827] border border-gray-800 rounded-lg p-3 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-400 hero-buttons text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
            >
              Send Message <Send size={20} />
            </button>
          </form>
        </div>

      </div>
    </div>
    </section>
  );
};

export default Contact