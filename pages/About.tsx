
import React from 'react';
import { TEAM_MEMBERS, PROCESS_STEPS, COMPANY_DETAILS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Narrative Header */}
      <section className="bg-slate-950 text-white pt-48 pb-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#1e40af_0%,_transparent_70%)] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-7xl md:text-[10rem] font-black leading-none tracking-tighter mb-10 opacity-10 absolute inset-0 select-none flex items-center justify-center">THE VISION</h1>
          <h2 className="text-5xl md:text-8xl font-black mb-8 leading-tight">Driven by <span className="text-blue-500">Results</span></h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
            Niyaz Technologies was established by Shaik Akthar Basha with a goal to disrupt the digital status quo in Tirupati and empower local brands with enterprise-grade tech.
          </p>
        </div>
      </section>

      {/* The Core Story */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-20 items-center">
           <div className="relative transform-style-3d group">
              <div className="absolute -inset-4 bg-blue-600 rounded-[4rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <img src="https://picsum.photos/seed/vision/800/1000" className="relative w-full rounded-[4rem] shadow-2xl border-8 border-white group-hover:scale-[1.02] transition-transform duration-700" alt="Vision" />
           </div>
           <div>
              <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-sm mb-6 block">OUR STORY</span>
              <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 leading-tight">From Tirupati <br/>to the Global Web</h3>
              <div className="space-y-6 text-slate-500 text-lg font-medium leading-relaxed">
                 <p>
                    We started with a simple observation: local businesses in Tirupati were missing out on the massive potential of precision digital marketing. Under the leadership of Shaik Akthar Basha, we built a command center for growth.
                 </p>
                 <p>
                    Today, we are the best digital marketing agency in Tirupati, recognized for our "3D Strategy" which combines Technical SEO, Immersive Web Design, and Viral Social Media management.
                 </p>
                 <p>
                    Our mission is to ensure your brand doesn't just exist online—it dominates. We treat every client as a strategic partner in our ecosystem.
                 </p>
              </div>
              <div className="mt-12 flex gap-6">
                 <div className="text-center">
                    <span className="block text-4xl font-black text-slate-900">100+</span>
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">Clients Served</span>
                 </div>
                 <div className="w-px h-12 bg-slate-200"></div>
                 <div className="text-center">
                    <span className="block text-4xl font-black text-slate-900">12x</span>
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">Avg Lead Boost</span>
                 </div>
                 <div className="w-px h-12 bg-slate-200"></div>
                 <div className="text-center">
                    <span className="block text-4xl font-black text-slate-900">99%</span>
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">Client Retention</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-2xl flex flex-col md:flex-row items-center gap-16 border border-slate-100">
              <div className="w-full md:w-1/3">
                 <img src={TEAM_MEMBERS[0].image} className="w-full aspect-square rounded-[3rem] object-cover shadow-2xl ring-8 ring-slate-50" alt={TEAM_MEMBERS[0].name} />
              </div>
              <div className="flex-1">
                 <h4 className="text-4xl font-black text-slate-900 mb-2">{TEAM_MEMBERS[0].name}</h4>
                 <p className="text-blue-600 font-black uppercase tracking-widest text-sm mb-8">{TEAM_MEMBERS[0].role}</p>
                 <p className="text-slate-500 text-xl font-medium leading-relaxed italic mb-10">
                    "{TEAM_MEMBERS[0].bio}"
                 </p>
                 <div className="flex gap-6">
                    <a href={COMPANY_DETAILS.socials.whatsapp} className="bg-slate-950 text-white px-8 py-4 rounded-2xl font-black hover:bg-blue-600 transition-all flex items-center gap-3">
                       <i className="fa-brands fa-whatsapp"></i> Chat with CEO
                    </a>
                    <a href={`mailto:${COMPANY_DETAILS.email}`} className="w-14 h-14 bg-slate-100 text-slate-950 rounded-2xl flex items-center justify-center text-xl hover:bg-slate-200 transition-all">
                       <i className="fa-solid fa-envelope"></i>
                    </a>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
