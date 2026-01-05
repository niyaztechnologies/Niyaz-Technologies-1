
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_DETAILS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-[#0a192f] border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section - Strict sizing to prevent layout breaking */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-white border-2 border-blue-500 flex items-center justify-center shadow-lg flex-shrink-0">
                <img 
                  src={COMPANY_DETAILS.logoUrl} 
                  alt="Niyaz Technologies" 
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <span className="text-white font-black text-lg tracking-tighter uppercase hidden sm:block whitespace-nowrap">
                NIYAZ<span className="text-blue-500">TECHNOLOGIES</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu - High Contrast White Text */}
          <div className="hidden lg:flex items-center gap-1">
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
                className={`px-5 py-2 rounded-full text-[11px] font-black tracking-widest transition-all duration-200 ${
                  isActive(link.path) 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="h-6 w-px bg-white/20 mx-4"></div>
            
            <Link to="/contact" className="bg-white text-slate-900 px-7 py-3 rounded-full font-black text-[11px] tracking-widest uppercase hover:bg-blue-500 hover:text-white transition-all shadow-xl">
              CONSULTATION
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-600 text-white shadow-xl hover:bg-blue-700 transition-colors"
              aria-label="Menu"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a192f] border-t border-white/10 p-6 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          {['/', '/about', '/pricing', '/portfolio', '/blog'].map((path) => (
            <Link 
              key={path}
              to={path} 
              className={`block px-6 py-4 rounded-xl text-[11px] font-black tracking-widest uppercase text-center ${
                isActive(path) ? 'bg-blue-600 text-white shadow-lg' : 'text-white/90 bg-white/5'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {path === '/' ? 'Home' : path.substring(1)}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="block bg-blue-600 text-white text-center py-5 rounded-xl font-black text-[11px] tracking-widest uppercase shadow-xl mt-4" 
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
