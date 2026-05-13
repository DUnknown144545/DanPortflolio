
import React, { useState } from 'react';
import { Send, Mail, MapPin, Github, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form Submitted:", formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gray-950/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's <span className="text-indigo-500">Collaborate</span></h2>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Interested in working together or just want to say hi? My inbox is always open. I'm currently looking for new opportunities and collaborations on interesting projects.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400">Email Me</h4>
                    <p className="text-white font-medium">{PERSONAL_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400">Location</h4>
                    <p className="text-white font-medium">Remote / City, Country</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href={PERSONAL_INFO.github} className="p-3 glass rounded-full hover:text-indigo-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href={PERSONAL_INFO.linkedin} className="p-3 glass rounded-full hover:text-indigo-400 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl relative overflow-hidden">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thank you for reaching out. I'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">Your Message</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="What's on your mind?"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <button 
                    disabled={status === 'loading'}
                    type="submit" 
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>
                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                      <AlertCircle size={16} /> Something went wrong. Please try again.
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
