
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

const data = [
  { name: 'Month 1', traffic: 400, conversions: 24, rank: 80 },
  { name: 'Month 2', traffic: 800, conversions: 35, rank: 65 },
  { name: 'Month 3', traffic: 1200, conversions: 48, rank: 40 },
  { name: 'Month 4', traffic: 2100, conversions: 92, rank: 15 },
  { name: 'Month 5', traffic: 3800, conversions: 180, rank: 5 },
  { name: 'Month 6', traffic: 5400, conversions: 310, rank: 2 },
];

const SEODashboard: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-800">Growth Dashboard</h3>
          <p className="text-slate-500 text-sm">Real-time performance metrics for Tirupati Tech Client</p>
        </div>
        <div className="flex gap-4">
          <div className="text-center">
            <span className="block text-xs text-slate-400 uppercase font-bold tracking-wider">Avg. ROI</span>
            <span className="text-lg font-bold text-green-600">12.4x</span>
          </div>
          <div className="text-center">
            <span className="block text-xs text-slate-400 uppercase font-bold tracking-wider">Keywords Top 3</span>
            <span className="text-lg font-bold text-blue-600">42</span>
          </div>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
            <Tooltip 
              contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
            />
            <Area type="monotone" dataKey="traffic" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorTraffic)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
          <h4 className="text-sm font-medium text-slate-500 mb-1">Total Leads</h4>
          <p className="text-2xl font-bold text-slate-800">689</p>
          <span className="text-xs font-bold text-green-600"><i className="fa-solid fa-arrow-up"></i> 24% from last month</span>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
          <h4 className="text-sm font-medium text-slate-500 mb-1">Ad Spend</h4>
          <p className="text-2xl font-bold text-slate-800">$1,240</p>
          <span className="text-xs font-bold text-blue-600"><i className="fa-solid fa-minus"></i> Optimized efficiency</span>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
          <h4 className="text-sm font-medium text-slate-500 mb-1">Search Impression</h4>
          <p className="text-2xl font-bold text-slate-800">142K</p>
          <span className="text-xs font-bold text-green-600"><i className="fa-solid fa-arrow-up"></i> 41% visibility boost</span>
        </div>
      </div>
    </div>
  );
};

export default SEODashboard;
