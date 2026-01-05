
import React from 'react';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Simple Pricing</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Choose Your Growth Path</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            No hidden costs. No long-term contracts. Just pure performance-based marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, i) => (
            <div key={i} className={`relative bg-white rounded-3xl p-8 border ${plan.isPopular ? 'border-blue-500 ring-4 ring-blue-500/10 scale-105 z-10' : 'border-slate-200'}`}>
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-slate-500 text-sm mb-6 h-10">{plan.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-slate-500 font-medium"> / {plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                    <i className="fa-solid fa-check text-green-500"></i> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                plan.isPopular ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-50 p-12 rounded-3xl border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-2xl font-bold text-slate-900 mb-2">Need a custom enterprise solution?</h4>
            <p className="text-slate-600">We offer customized packages for large-scale operations and multi-location businesses.</p>
          </div>
          <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg">
            Talk to an Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
