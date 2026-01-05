
import React from 'react';
import { CASE_STUDIES } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Real Results for Real Businesses</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Browse through our success stories. From local retail to large-scale B2B service providers, we deliver growth.
          </p>
        </div>

        <div className="space-y-24">
          {CASE_STUDIES.map((cs, i) => (
            <div key={cs.id} className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full">
                <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                  <img src={cs.image} alt={cs.client} className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{cs.industry}</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-extrabold text-slate-900 mb-4">{cs.client}</h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed italic border-l-4 border-blue-500 pl-6">
                  "{cs.summary}"
                </p>
                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <span className="block text-3xl font-black text-blue-600 mb-1">{cs.growth}</span>
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{cs.metric}</span>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <span className="block text-3xl font-black text-green-600 mb-1">Top 3</span>
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Keyword Rankings</span>
                  </div>
                </div>
                <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl">
                  View Full Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Grid Placeholder */}
        <div className="mt-32 pt-20 border-t border-slate-100">
          <p className="text-center text-slate-400 font-bold uppercase tracking-widest text-sm mb-12">Trusted by Global and Local Brands</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center opacity-40 grayscale hover:grayscale-0 transition-all">
             {/* Mock SVGs/Icons */}
             {[1,2,3,4,5].map(n => (
               <div key={n} className="flex justify-center text-4xl font-black italic text-slate-400">BRAND {n}</div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
