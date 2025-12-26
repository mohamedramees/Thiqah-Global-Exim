import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const initialFormState = {
    name: '',
    company: '',
    country: '',
    product: 'Table Eggs',
    quantity: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate backend validation and sending delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // On success
    setStatus('success');
    setFormData(initialFormState);
  };

  return (
    <div className="bg-black min-h-screen pt-20 flex flex-col">
      
      {/* Header */}
      <div className="border-b border-white/10 bg-grid py-20 px-6 lg:px-12">
        <h1 className="text-6xl md:text-9xl font-display font-bold text-white uppercase tracking-tighter mb-6">
          Contact Us
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl font-mono">
          Global inquiries. Response within 24 hours.
        </p>
      </div>

      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10 border-b border-white/10">
        
        {/* Left: Info */}
        <div className="p-12 lg:p-20 bg-zinc-950/30">
          <div className="space-y-16">
            
            <div className="group">
              <span className="text-primary-500 font-mono text-xs uppercase tracking-widest block mb-2">Call / WhatsApp</span>
              <a href="https://wa.me/917736690830" className="text-3xl md:text-4xl font-display font-bold text-white group-hover:text-primary-500 transition-colors">
                +91 77366 90830
              </a>
            </div>

            <div className="group">
              <span className="text-primary-500 font-mono text-xs uppercase tracking-widest block mb-2">Email</span>
              <a href="mailto:contact@tkseximglobal.com" className="text-3xl md:text-4xl font-display font-bold text-white group-hover:text-primary-500 transition-colors">
                contact@tkseximglobal.com
              </a>
            </div>

            <div className="group">
              <span className="text-primary-500 font-mono text-xs uppercase tracking-widest block mb-2">Headquarters</span>
              <p className="text-3xl md:text-4xl font-display font-bold text-white">
                Kerala, India
              </p>
            </div>

          </div>
        </div>

        {/* Right: Form */}
        <div className="p-12 lg:p-20 bg-black relative">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in p-8 border border-primary-500/20 bg-primary-500/5">
              <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(234,179,8,0.4)]">
                <CheckCircle size={40} className="text-black" />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-4 uppercase">Inquiry Received</h3>
              <p className="text-gray-400 text-lg max-w-md mb-10 leading-relaxed">
                Thank you for choosing Thiqah Exim Global. Our export team has received your details and will contact you within 24 hours.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="text-primary-500 font-mono text-sm uppercase tracking-widest hover:text-white transition-colors border-b border-primary-500 pb-1 hover:border-white"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-0 relative">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="FULL NAME"
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full bg-transparent border-b border-r border-white/20 p-6 text-white placeholder-gray-500 focus:bg-white/5 focus:border-primary-500 focus:placeholder-gray-400 outline-none uppercase font-bold tracking-wider transition-all duration-300 disabled:opacity-50"
                />
                <input 
                  type="text" 
                  name="company" 
                  placeholder="COMPANY"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full bg-transparent border-b border-white/20 p-6 text-white placeholder-gray-500 focus:bg-white/5 focus:border-primary-500 focus:placeholder-gray-400 outline-none uppercase font-bold tracking-wider transition-all duration-300 disabled:opacity-50"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="EMAIL ADDRESS"
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full bg-transparent border-b border-r border-white/20 p-6 text-white placeholder-gray-500 focus:bg-white/5 focus:border-primary-500 focus:placeholder-gray-400 outline-none uppercase font-bold tracking-wider transition-all duration-300 disabled:opacity-50"
                />
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="PHONE NUMBER"
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full bg-transparent border-b border-white/20 p-6 text-white placeholder-gray-500 focus:bg-white/5 focus:border-primary-500 focus:placeholder-gray-400 outline-none uppercase font-bold tracking-wider transition-all duration-300 disabled:opacity-50"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="w-full bg-transparent border-b border-r border-white/20 p-6 focus-within:bg-white/5 focus-within:border-primary-500 transition-all duration-300 disabled:opacity-50">
                    <select 
                      name="product" 
                      value={formData.product}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full bg-transparent text-white focus:outline-none uppercase font-bold tracking-wider appearance-none cursor-pointer disabled:opacity-50"
                    >
                      <option value="Table Eggs" className="bg-black text-gray-300">Table Eggs</option>
                    </select>
                </div>
                <input 
                  type="text" 
                  name="country" 
                  placeholder="COUNTRY"
                  required 
                  value={formData.country}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full bg-transparent border-b border-white/20 p-6 text-white placeholder-gray-500 focus:bg-white/5 focus:border-primary-500 focus:placeholder-gray-400 outline-none uppercase font-bold tracking-wider transition-all duration-300 disabled:opacity-50"
                />
              </div>

              <textarea 
                name="message" 
                rows={4} 
                required 
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'submitting'}
                placeholder="YOUR REQUIREMENT..."
                className="w-full bg-transparent border-b border-white/20 p-6 text-white placeholder-gray-500 focus:bg-white/5 focus:border-primary-500 focus:placeholder-gray-400 outline-none uppercase font-bold tracking-wider transition-all duration-300 resize-none disabled:opacity-50"
              ></textarea>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-primary-500 hover:bg-white text-black font-display font-bold py-8 uppercase tracking-widest transition-colors flex items-center justify-between px-6 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {status === 'submitting' ? (
                  <>
                    <span>Processing...</span>
                    <Loader2 size={24} className="animate-spin" />
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <ArrowRight size={24} className="group-hover:-rotate-45 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default Contact;