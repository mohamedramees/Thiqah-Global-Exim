
import React from 'react';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 border-b border-white/10">
        
        {/* Brand Column */}
        <div className="p-10 md:col-span-1">
          <span className="text-2xl font-display font-bold tracking-tighter text-white uppercase block mb-6">
            THIQAH <span className="text-primary-500">GLOBAL EXIM</span>
          </span>
          <p className="text-gray-500 text-sm font-medium leading-relaxed">
            Premium table egg exports. Reliability tailored for the global market. Delivering quality from India to the world.
          </p>
        </div>

        {/* Sitemap / Quick Links */}
        <div className="p-10 md:col-span-1">
          <h3 className="font-mono text-xs text-primary-500 uppercase tracking-widest mb-8">Sitemap</h3>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm uppercase font-bold tracking-wider">
                <ChevronRight size={14} className="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm uppercase font-bold tracking-wider">
                <ChevronRight size={14} className="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="p-10 md:col-span-2">
          <h3 className="font-mono text-xs text-primary-500 uppercase tracking-widest mb-8">Direct Contact</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <span className="block text-[10px] text-gray-600 uppercase tracking-[0.2em] mb-2">WhatsApp / Call</span>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary-500" />
                <span className="text-white font-bold group-hover:text-primary-500 transition-colors">+91 77366 90830</span>
              </div>
            </div>
            <div className="group cursor-pointer">
              <span className="block text-[10px] text-gray-600 uppercase tracking-[0.2em] mb-2">Inquiries</span>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary-500" />
                <span className="text-white font-bold group-hover:text-primary-500 transition-colors">contact@thiqahglobalexim.com</span>
              </div>
            </div>
            <div className="sm:col-span-2 group cursor-pointer">
              <span className="block text-[10px] text-gray-600 uppercase tracking-[0.2em] mb-2">Headquarters</span>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-primary-500" />
                <span className="text-white font-bold group-hover:text-primary-500 transition-colors">Kerala, India</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="p-6 flex flex-col md:flex-row justify-between items-center bg-zinc-950">
        <p className="text-xs text-gray-600 font-mono uppercase">
          &copy; {new Date().getFullYear()} Thiqah Global Exim. All Rights Reserved.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <p className="text-xs text-gray-600 font-mono uppercase">
            Designed for Excellence
          </p>
          <p className="text-xs text-gray-600 font-mono uppercase">
            thiqahglobalexim.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
