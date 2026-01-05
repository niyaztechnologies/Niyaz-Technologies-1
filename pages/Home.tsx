
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, COMPANY_DETAILS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* 3D Hero Section */}
      <section className="relative bg-[#020617] text-white pt-56 pb-64 perspective-2000 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/30 rounded-full blur-[120px] animate-3d-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[150px] animate-3d-float" style={{ animationDelay: '-5s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transform-style-3d">
          <div className="flex flex-col items-center text-center transform-style-3d">
            <div className="inline-block px-6 py-2 rounded-2xl bg-blue-600/20 border border-blue-500/30 mb-10 animate-3d-float shadow-2xl">
              <span className="text-blue-300 font-black text-xs uppercase tracking-[0.4em] flex items-center gap-3">
                <i className="fa-solid fa-trophy text-yellow-400"></i> BEST DIGITAL MARKETING COMPANY IN TIRUPATI
              </span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black leading-[0.95] mb-8 text-white tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              NIYAZ <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-indigo-500">
                TECHNOLOGIES
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-5xl font-black mb-12 text-blue-100 uppercase tracking-[0.2em] drop-shadow-lg">
              Result-Driven Digital Marketing Company
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100/60 mb-16 max-w-4xl leading-relaxed font-semibold transform translate-z-10 px-4">
              Providing expert SEO services, high-converting web design, and professional social media management in Tirupati. 
              Engineering sustainable growth for businesses with 3D digital excellence.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center transform-style-3d w-full max-w-2xl px-4">
              <a href={COMPANY_DETAILS.socials.whatsapp} target="_blank" rel="noopener" className="flex-1 group bg-blue-600 text-white px-10 py-7 rounded-full font-black text-xl hover:scale-105 transition-all shadow-[0_25px_50px_rgba(37,99,235,0.5)] flex items-center justify-center gap-4">
                <i className="fa-brands fa-whatsapp text-3xl"></i> WhatsApp Consult
              </a>
              <a href={`tel:${COMPANY_DETAILS.phone}`} className="flex-1 bg-white/5 backdrop-blur-xl text-white border border-white/20 px-10 py-7 rounded-full font-black text-xl hover:bg-white/10 transition-all flex items-center justify-center gap-4">
                <i className="fa-solid fa-phone-volume"></i> {COMPANY_DETAILS.displayPhone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-32">
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8">
              Digital Marketing Services in Tirupati
            </h3>
            <p className="text-slate-500 text-xl max-w-3xl mx-auto font-medium">
              We provide the most comprehensive digital marketing services in Tirupati, tailored for local business scaling and global brand authority.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {SERVICES.map((s) => (
              <div key={s.id} className="tilt-card group bg-slate-50 p-12 rounded-[4rem] border border-slate-100 hover:bg-white transition-all shadow-xl shadow-slate-200/50">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center text-3xl mb-10 shadow-2xl group-hover:rotate-12 transition-transform">
                  <i className={`fa-solid ${s.icon}`}></i>
                </div>
                <h4 className="text-2xl font-black mb-6 leading-tight text-slate-900">{s.title}</h4>
                <p className="text-slate-500 leading-relaxed text-base font-medium mb-10">{s.description}</p>
                <div className="space-y-4 pt-8 border-t border-slate-200">
                  {s.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs font-black text-slate-400 uppercase tracking-widest">
                      <i className="fa-solid fa-check-circle text-blue-500"></i> {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-40 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-32">
            <h3 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Client Success Wall</h3>
            <p className="text-slate-500 text-xl font-medium">Hear from over 100+ businesses why we are the top-rated digital marketing agency in tirupati.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-12 rounded-[4rem] bg-white border border-slate-100 shadow-2xl shadow-slate-200/60 flex flex-col justify-between tilt-card">
                <div>
                  <div className="flex text-yellow-400 text-sm mb-8 gap-1">
                    {[...Array(t.rating)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                  </div>
                  <p className="text-slate-700 italic text-xl leading-relaxed mb-12 font-semibold">"{t.content}"</p>
                </div>
                <div className="flex items-center gap-6 pt-8 border-t border-slate-100">
                  <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-[1.5rem] ring-4 ring-slate-50 shadow-xl object-cover" />
                  <div>
                    <h5 className="font-black text-slate-900 leading-none mb-2 text-xl">{t.name}</h5>
                    <p className="text-[10px] text-blue-600 uppercase tracking-[0.2em] font-black">{t.role} • {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-40 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-sm mb-6 block">LOCATION HUB</span>
            <h3 className="text-5xl md:text-7xl font-black mb-10 leading-tight uppercase">Visit Our <br/>Headquarters</h3>
            <div className="bg-white/5 p-12 rounded-[3.5rem] border border-white/10 shadow-2xl flex gap-8 items-start mb-12">
               <div className="w-16 h-16 bg-blue-600 text-white rounded-[1.5rem] flex items-center justify-center text-3xl flex-shrink-0 shadow-lg shadow-blue-500/30">
                  <i className="fa-solid fa-location-dot"></i>
               </div>
               <div className="flex-1">
                  <h5 className="font-black text-2xl mb-4 text-white">Our Physical Location</h5>
                  <p className="text-slate-300 text-xl leading-relaxed font-bold mb-6">
                    {COMPANY_DETAILS.address}
                  </p>
                  <a href={COMPANY_DETAILS.gmb} target="_blank" rel="noopener" className="inline-flex items-center gap-3 text-blue-500 font-black text-sm uppercase tracking-widest hover:text-white transition-colors">
                     OPEN IN GOOGLE MAPS <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
               </div>
            </div>
          </div>
          <div className="h-[650px] rounded-[5rem] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.8)] border-[15px] border-white/5 ring-1 ring-white/10 relative">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.6361812852723!2d79.4507!3d13.6275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4a8e8b2b6b5b%3A0x1b2b3c4d5e6f7g8h!2sNiyaz%20Technologies!5e0!3m2!1sen!2sin!4v1716382000000!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="brightness-[0.9] grayscale-[0.1] hover:brightness-100 hover:grayscale-0 transition-all duration-1000"
                title="Niyaz Technologies Poolavanigunta Map Pin"
             ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
