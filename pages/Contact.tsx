
import React from 'react';
import { COMPANY_DETAILS } from '../constants';

const Contact: React.FC = () => {
  const socialGrid = [
    { icon: 'fa-whatsapp', color: 'hover:bg-green-500', link: COMPANY_DETAILS.socials.whatsapp, label: 'WhatsApp' },
    { icon: 'fa-telegram', color: 'hover:bg-blue-400', link: COMPANY_DETAILS.socials.telegram, label: 'Telegram' },
    { icon: 'fa-instagram', color: 'hover:bg-pink-500', link: COMPANY_DETAILS.socials.instagram, label: 'Instagram' },
    { icon: 'fa-x-twitter', color: 'hover:bg-slate-900', link: COMPANY_DETAILS.socials.twitter, label: 'X / Twitter' },
    { icon: 'fa-facebook-f', color: 'hover:bg-blue-700', link: COMPANY_DETAILS.socials.facebook, label: 'Facebook' },
    { icon: 'fa-youtube', color: 'hover:bg-red-600', link: COMPANY_DETAILS.socials.youtube, label: 'YouTube' },
    { icon: 'fa-pinterest-p', color: 'hover:bg-red-500', link: COMPANY_DETAILS.socials.pinterest, label: 'Pinterest' },
    { icon: 'fa-reddit-alien', color: 'hover:bg-orange-500', link: COMPANY_DETAILS.socials.reddit, label: 'Reddit' },
    { icon: 'fa-quora', color: 'hover:bg-red-700', link: COMPANY_DETAILS.socials.quora, label: 'Quora' },
    { icon: 'fa-mastodon', color: 'hover:bg-indigo-600', link: COMPANY_DETAILS.socials.mastodon, label: 'Mastodon' }
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">Connect With Our <span className="text-blue-600">Grid</span></h1>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto font-medium">Reach Niyaz Technologies through any platform. We are always online and ready to build.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Main Contact Section */}
          <div className="space-y-12">
            <div className="bg-slate-950 text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-[60px] rounded-full"></div>
               <h2 className="text-3xl font-black mb-10">Direct Terminal</h2>
               <div className="space-y-8">
                  <a href={`tel:${COMPANY_DETAILS.phone}`} className="flex items-center gap-6 group/item">
                     <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl group-hover/item:bg-blue-600 transition-all">
                        <i className="fa-solid fa-phone"></i>
                     </div>
                     <div>
                        <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">CALL CENTER</p>
                        <p className="text-2xl font-black">{COMPANY_DETAILS.displayPhone}</p>
                     </div>
                  </a>
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="flex items-center gap-6 group/item">
                     <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl group-hover/item:bg-blue-600 transition-all">
                        <i className="fa-solid fa-envelope"></i>
                     </div>
                     <div>
                        <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">GMAIL</p>
                        <p className="text-lg font-bold break-all">{COMPANY_DETAILS.email}</p>
                     </div>
                  </a>
                  <div className="flex items-start gap-6">
                     <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl">
                        <i className="fa-solid fa-map-pin"></i>
                     </div>
                     <div>
                        <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">LOCATION</p>
                        <p className="text-base font-bold leading-relaxed max-w-sm">{COMPANY_DETAILS.address}</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
               {socialGrid.map((social) => (
                 <a 
                   key={social.label}
                   href={social.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className={`h-24 bg-slate-50 border border-slate-100 rounded-3xl flex flex-col items-center justify-center gap-2 transition-all hover:-translate-y-2 hover:shadow-xl hover:text-white ${social.color}`}
                 >
                   <i className={`fa-brands ${social.icon} text-3xl`}></i>
                   <span className="text-[10px] font-black uppercase tracking-widest">{social.label}</span>
                 </a>
               ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-2xl ring-1 ring-slate-100">
             <h3 className="text-3xl font-black text-slate-900 mb-10">Launch a Query</h3>
             <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                      <input type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium" placeholder="Ex: John Doe" />
                   </div>
                   <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Phone Number</label>
                      <input type="tel" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium" placeholder="Ex: +91..." />
                   </div>
                </div>
                <div className="space-y-3">
                   <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
                   <input type="email" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium" placeholder="Ex: name@company.com" />
                </div>
                <div className="space-y-3">
                   <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">How can we scale you?</label>
                   <textarea rows={4} className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium resize-none" placeholder="Tell us your goals..."></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-5 rounded-[2rem] font-black text-xl hover:bg-blue-700 hover:shadow-2xl transition-all flex items-center justify-center gap-4">
                   SEND COMMAND <i className="fa-solid fa-paper-plane"></i>
                </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
