
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, COMPANY_DETAILS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* High-Contrast Hero Section */}
      <section className="relative hero-gradient text-white pt-56 pb-64 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[150px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block px-5 py-2 rounded-2xl bg-blue-600/20 border border-blue-500/30 mb-8 animate-float">
              <span className="text-blue-400 font-black text-[10px] uppercase tracking-[0.4em] flex items-center gap-3">
                <i className="fa-solid fa-star text-yellow-500"></i> #1 RATED AGENCY IN TIRUPATI
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-8 text-white tracking-tighter uppercase">
              NIYAZ <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                TECHNOLOGIES
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-5xl font-black mb-12 text-blue-200 uppercase tracking-tight">
              Result-Driven Digital Growth Agency
            </h2>
            
            <p className="text-lg md:text-xl text-slate-400 mb-16 max-w-4xl leading-relaxed font-medium">
              We provide the best SEO services in Tirupati, high-performance web design, and professional social media management. 
              Engineering local brands into market leaders with 10x ROI strategies.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center w-full max-w-2xl">
              <a href={COMPANY_DETAILS.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-600 text-white px-10 py-6 rounded-full font-black text-lg hover:bg-blue-700 transition-all shadow-2xl flex items-center justify-center gap-4">
                <i className="fa-brands fa-whatsapp text-2xl"></i> WHATSAPP CONSULT
              </a>
              <a href={`tel:${COMPANY_DETAILS.phone}`} className="flex-1 bg-white/5 border border-white/20 text-white px-10 py-6 rounded-full font-black text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-4">
                <i className="fa-solid fa-phone"></i> {COMPANY_DETAILS.displayPhone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h3 className="text-4xl md:text-6xl font-black text-slate-950 mb-6 uppercase tracking-tight">Expert Digital Services</h3>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">Data-backed strategies designed for Tirupati businesses to dominate globally.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-xl">
                  <i className={`fa-solid ${s.icon}`}></i>
                </div>
                <h4 className="text-2xl font-black mb-4 text-slate-950 leading-tight">{s.title}</h4>
                <p className="text-slate-500 mb-8 text-sm leading-relaxed">{s.description}</p>
                <div className="space-y-3 pt-6 border-t border-slate-200">
                  {s.features.slice(0, 4).map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      <i className="fa-solid fa-circle-check text-blue-500"></i> {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h3 className="text-4xl md:text-6xl font-black text-slate-950 mb-6 uppercase">Wall of Results</h3>
            <p className="text-slate-500 text-lg font-medium">Trusted by 100+ businesses as the best digital marketing company in tirupati.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex text-yellow-500 text-[10px] mb-6 gap-1">
                    {[...Array(t.rating)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                  </div>
                  <p className="text-slate-700 italic text-lg leading-relaxed mb-10 font-medium">"{t.content}"</p>
                </div>
                <div className="flex items-center gap-5 pt-6 border-t border-slate-100">
                  <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-2xl object-cover" />
                  <div>
                    <h5 className="font-black text-slate-950 text-base leading-none mb-1">{t.name}</h5>
                    <p className="text-[10px] text-blue-600 uppercase font-black tracking-widest">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-32 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs mb-6 block">VISIT US</span>
            <h3 className="text-5xl md:text-7xl font-black leading-tight uppercase mb-10">Poolavanigunta <br/>Headquarters</h3>
            <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 space-y-8">
               <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                     <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <p className="text-slate-200 text-lg font-bold leading-relaxed">
                      {COMPANY_DETAILS.address}
                    </p>
                    <a href={COMPANY_DETAILS.gmb} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-blue-400 font-black text-xs uppercase tracking-widest hover:text-white transition-all">
                      Directions via Google Maps <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
               </div>
            </div>
          </div>
          <div className="h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.636!2d79.4507!3d13.6275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4a8e8b2b6b5b%3A0x1b2b3c4d5e6f7g8h!2sNiyaz%20Technologies!5e0!3m2!1sen!2sin!4v1716382000000!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="brightness-[0.9] grayscale-[0.2] hover:brightness-100 hover:grayscale-0 transition-all duration-700"
                title="Google Maps"
             ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
