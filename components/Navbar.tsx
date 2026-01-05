
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_DETAILS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[98%] max-w-7xl z-[100] transition-all">
      <div className="bg-[#0a192f] border border-white/20 rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.6)] px-6 sm:px-10 py-3">
        <div className="flex justify-between items-center h-14">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)] bg-white">
                <img 
                  src={COMPANY_DETAILS.logoUrl} 
                  alt="Niyaz Technologies" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg sm:text-2xl font-black text-white tracking-tighter hidden sm:inline-block uppercase">
                NIYAZ<span className="text-blue-500">TECHNOLOGIES</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
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
                className={`px-6 py-2.5 rounded-full text-[13px] font-black tracking-[0.1em] transition-all duration-300 ${
                  isActive(link.path) 
                  ? 'bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.7)]' 
                  : 'text-white hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="h-6 w-[1px] bg-white/30 mx-4"></div>
            
            <Link to="/contact" className="bg-[#111827] border border-white/10 text-white px-8 py-3 rounded-full font-black text-[13px] tracking-[0.1em] uppercase hover:bg-blue-700 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all">
              CONSULTATION
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-xl"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 bg-[#0a192f] border border-white/20 rounded-[2.5rem] p-8 space-y-4 shadow-2xl">
          {['/', '/about', '/pricing', '/portfolio', '/blog'].map((path) => (
            <Link 
              key={path}
              to={path} 
              className={`block px-6 py-4 rounded-full text-sm font-black tracking-widest uppercase text-center ${isActive(path) ? 'bg-blue-600 text-white shadow-lg' : 'text-white bg-white/5 hover:bg-white/10'}`}
              onClick={() => setIsOpen(false)}
            >
              {path === '/' ? 'Home' : path.substring(1)}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="block bg-blue-600 text-white text-center py-5 rounded-full font-black text-sm tracking-widest uppercase shadow-xl" 
            onClick={() => setIsOpen(false)}
          >
            CONSULTATION NOW
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
