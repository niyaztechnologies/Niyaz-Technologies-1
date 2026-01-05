
import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Marketing Insights</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Stay ahead of the competition with our latest tips on SEO, social media, and business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map(post => (
            <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
              <div className="relative h-56 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest">{post.category}</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 text-slate-400 text-sm mb-4">
                  <span><i className="fa-regular fa-calendar"></i> {post.date}</span>
                  <span>•</span>
                  <span><i className="fa-regular fa-user"></i> By {post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
                  Read Article <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </article>
          ))}

          {/* Featured Newsletter */}
          <div className="bg-blue-600 p-8 rounded-3xl flex flex-col justify-center text-white relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-10 text-9xl rotate-12">
              <i className="fa-solid fa-envelope-open-text"></i>
            </div>
            <h3 className="text-2xl font-extrabold mb-4 relative z-10">Join 2,000+ Business Owners</h3>
            <p className="text-blue-100 mb-8 relative z-10">Get weekly marketing hacks delivered to your inbox.</p>
            <div className="space-y-4 relative z-10">
              <input type="email" placeholder="email@company.com" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder:text-blue-200 outline-none focus:bg-white/20 transition-all" />
              <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-extrabold hover:bg-slate-50 transition-all">Subscribe Now</button>
            </div>
          </div>
        </div>

        {/* More Mock Post Entries */}
        <div className="mt-20 text-center">
          <button className="bg-white border border-slate-200 text-slate-800 px-10 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-md">
            View All Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
