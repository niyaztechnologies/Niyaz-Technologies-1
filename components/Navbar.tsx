
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_DETAILS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-[#0a192f] border-b border-white/10 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-white border-2 border-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <img 
                  src={COMPANY_DETAILS.logoUrl} 
                  alt="Niyaz Tech" 
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <span className="text-white font-black text-xl tracking-tighter uppercase hidden sm:block">
                NIYAZ<span className="text-blue-500">TECHNOLOGIES</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2">
            {[
              { label: 'HOME', path: '/' },
              { label: 'ABOUT', path: '/about' },
              { label: 'PRICING', path: '/pricing' },
              { label: 'PORTFOLIO', path: '/portfolio' },
              { label: 'BLOG', path: '/blog' },
            ].map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`px-4 py-2 rounded-lg text-[11px] font-black tracking-widest transition-all ${
                  isActive(link.path) 
                  ? 'text-blue-400' 
                  : 'text-white hover:text-blue-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <Link to="/contact" className="ml-4 bg-blue-600 text-white px-6 py-2.5 rounded-full font-black text-[11px] tracking-widest uppercase hover:bg-blue-700 transition-all shadow-lg active:scale-95">
              CONSULTATION
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-md text-white hover:text-blue-500 focus:outline-none transition-colors"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a192f] border-t border-white/10 px-4 pt-2 pb-8 space-y-1 shadow-2xl">
          {['/', '/about', '/pricing', '/portfolio', '/blog'].map((path) => (
            <Link 
              key={path}
              to={path} 
              className={`block px-3 py-4 rounded-md text-xs font-black tracking-widest uppercase ${
                isActive(path) ? 'text-blue-400 bg-white/5' : 'text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {path === '/' ? 'Home' : path.substring(1)}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="block bg-blue-600 text-white text-center py-4 rounded-xl font-black text-xs tracking-widest uppercase shadow-xl mt-4" 
            onClick={() => setIsOpen(false)}
          >
            CONSULTATION
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
