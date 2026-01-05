
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_DETAILS } from '../constants';

const Footer: React.FC = () => {
  const socials = [
    { icon: 'fa-whatsapp', link: COMPANY_DETAILS.socials.whatsapp, color: 'hover:text-green-500' },
    { icon: 'fa-instagram', link: COMPANY_DETAILS.socials.instagram, color: 'hover:text-pink-500' },
    { icon: 'fa-facebook-f', link: COMPANY_DETAILS.socials.facebook, color: 'hover:text-blue-500' },
    { icon: 'fa-x-twitter', link: COMPANY_DETAILS.socials.twitter, color: 'hover:text-white' },
    { icon: 'fa-youtube', link: COMPANY_DETAILS.socials.youtube, color: 'hover:text-red-600' },
    { icon: 'fa-telegram', link: COMPANY_DETAILS.socials.telegram, color: 'hover:text-blue-400' },
    { icon: 'fa-pinterest', link: COMPANY_DETAILS.socials.pinterest, color: 'hover:text-red-500' },
    { icon: 'fa-reddit', link: COMPANY_DETAILS.socials.reddit, color: 'hover:text-orange-500' },
    { icon: 'fa-quora', link: COMPANY_DETAILS.socials.quora, color: 'hover:text-red-700' },
    { icon: 'fa-mastodon', link: COMPANY_DETAILS.socials.mastodon, color: 'hover:text-indigo-500' }
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-32 pb-16 overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 relative z-10">
        <div className="space-y-10">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 group-hover:border-blue-500 transition-colors">
              <img 
                src={COMPANY_DETAILS.logoUrl} 
                alt="Niyaz Technologies Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-black text-white tracking-tighter block">
              NIYAZ<span className="text-blue-500">TECHNOLOGIES</span>
            </span>
          </Link>
          <p className="leading-relaxed font-medium text-slate-500 text-sm">
            Best Digital Marketing Agency in Tirupati. Expert SEO Company & Website Designers Tirupati. Engineering high-growth digital ecosystems.
          </p>
          <div className="flex flex-wrap gap-4">
             {socials.map((s, idx) => (
               <a key={idx} href={s.link} target="_blank" rel="noopener noreferrer" className={`text-xl transition-all ${s.color}`}>
                  <i className={`fa-brands ${s.icon}`}></i>
               </a>
             ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-10">Digital Stack</h4>
          <ul className="space-y-5 font-bold text-sm">
            <li><Link to="/" className="hover:text-blue-400 transition-colors">Digital Marketing Tirupati</Link></li>
            <li><Link to="/" className="hover:text-blue-400 transition-colors">SEO Services Tirupati</Link></li>
            <li><Link to="/" className="hover:text-blue-400 transition-colors">Web Design Company Tirupati</Link></li>
            <li><Link to="/" className="hover:text-blue-400 transition-colors">Website Designers Tirupati</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-10">Contact Hub</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
               <div className="flex gap-4">
                  <i className="fa-solid fa-location-dot text-blue-500 mt-1"></i>
                  <span className="text-xs leading-relaxed font-bold">{COMPANY_DETAILS.address}</span>
               </div>
               <div className="flex gap-4 items-center">
                  <i className="fa-solid fa-phone text-blue-500"></i>
                  <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-white font-black text-sm">{COMPANY_DETAILS.displayPhone}</a>
               </div>
            </div>
            <div className="space-y-6">
               <div className="flex gap-4 items-center">
                  <i className="fa-solid fa-envelope text-blue-500"></i>
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-xs break-all font-bold text-white hover:text-blue-500">{COMPANY_DETAILS.email}</a>
               </div>
               <div className="flex gap-4 items-center">
                  <i className="fa-solid fa-paper-plane text-blue-500"></i>
                  <a href={COMPANY_DETAILS.socials.telegram} className="text-xs font-bold text-white">Join Telegram Channel</a>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.4em]">
        <p>&copy; 2024 Niyaz Technologies. All Rights Reserved. Managed by {COMPANY_DETAILS.owner}.</p>
        <div className="flex gap-8 mt-6 md:mt-0">
          <a href={COMPANY_DETAILS.gmb} target="_blank" className="hover:text-blue-500">Google Business Profile</a>
          <a href="#" className="hover:text-blue-500 opacity-50">v2.5_3D_ENGINE</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
