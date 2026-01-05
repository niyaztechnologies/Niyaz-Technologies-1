
import { Service, PricingPlan, CaseStudy, BlogPost, Testimonial, TeamMember, ProcessStep } from './types';

export const COMPANY_DETAILS = {
  name: "Niyaz Technologies",
  owner: "Shaik Akthar Basha",
  phone: "8330967311",
  displayPhone: "+91 8330967 311",
  email: "niyaztechnologies@gmail.com",
  logoUrl: "https://rest.techbehemoths.com/storage/images/users/main/company-avatar-688ca65b5a414-x2.png",
  address: "Poolavanigunta, 4th right cross railway gate oppsite, Renigunta Rd, SV Auto Nagar, Tirupati, Andhra Pradesh 517501",
  coordinates: { lat: 13.6275, lng: 79.4507 },
  website: "https://niyaztechnologies.com/",
  gmb: "https://maps.app.goo.gl/WJ2Q31C66HtkGie76",
  socials: {
    whatsapp: "https://wa.link/ie6rqn",
    mastodon: "https://mastodon.social/@NiyazTechnologies",
    twitter: "https://x.com/niyaztech_",
    instagram: "https://www.instagram.com/niyaztechnologies/",
    facebook: "https://www.facebook.com/share/1JvxN4kpkX/",
    youtube: "https://www.youtube.com/@NiyazTechnologies",
    pinterest: "https://in.pinterest.com/niyaztechnologies/",
    reddit: "https://www.reddit.com/user/niyaztechnologies/",
    quora: "https://www.quora.com/profile/Niyaz-132",
    telegram: "https://t.me/Niyaztechnologies"
  }
};

export const SERVICES: Service[] = [
  {
    id: 'seo',
    title: '3D SEO Authority & Local Google Maps Ranking',
    description: 'Niyaz Technologies is the best SEO company in Tirupati. We provide specialized search engine optimization to help local businesses rank #1. We are the best digital marketing company in tirupati for organic growth.',
    icon: 'fa-magnifying-glass-chart',
    features: [
      'Local SEO (Google Maps ranking)', 
      'Technical SEO & Site Audits', 
      'Keyword Research Tirupati', 
      'On-Page + Technical SEO',
      'Authority Backlink Building',
      'E-commerce SEO Strategies'
    ],
    longContent: 'Our SEO services in Tirupati ensure your brand is visible exactly when customers search for "digital marketing services in tirupati" or related terms. We focus on technical excellence and content relevance to dominate the first page of Google.'
  },
  {
    id: 'web-design',
    title: 'Best Website Designers in Tirupati - 3D Responsive',
    description: 'Looking for the best website designers tirupati? Our web development company in tirupati crafts 3D-responsive sites that convert visitors into loyal customers.',
    icon: 'fa-laptop-code',
    features: [
      'Business Website Development', 
      'High-Converting Landing Pages', 
      'Speed & Performance Optimization', 
      'SEO-Friendly Code Structure',
      'UI/UX Excellence',
      'Custom Web Applications'
    ],
    longContent: 'We are recognized as one of the best website design companies in tirupati, focusing on performance, speed, and aesthetic 3D design that engages every visitor.'
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing & Brand Awareness',
    description: 'Transform your brand with the best digital marketing agency in tirupati. We manage Instagram, Facebook, and LinkedIn with viral content strategies.',
    icon: 'fa-share-nodes',
    features: [
      'Instagram & Reel Marketing', 
      'Facebook Ads Management', 
      'Brand Awareness Campaigns', 
      'Professional Content Writing',
      'Influencer Collaboration',
      'Engagement Growth Strategies'
    ],
    longContent: 'Professional content writing and social strategy for businesses seeking digital marketing tirupati success. We help you build a community around your brand.'
  },
  {
    id: 'ads',
    title: 'Google Ads (PPC) & Meta Advertising Expert',
    description: 'Niyaz Technologies is a premier choice among advertising companies in tirupati, offering hyper-targeted Google and Meta Ads that deliver instant ROI.',
    icon: 'fa-bullhorn',
    features: [
      'Google Search & Display Ads', 
      'Call-Only Ad Campaigns', 
      'Advanced Conversion Tracking', 
      'Retargeting Sales Funnels',
      'Competitor Analysis',
      'ROAS Optimization'
    ],
    longContent: 'Stop wasting budget. Partner with the best digital marketing company in tirupati for ads that actually convert leads into loyal customers.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Suresh V',
    role: 'Managing Director',
    company: 'Auto Hub Tirupati',
    content: 'Niyaz Technologies is definitely the best digital marketing company in Tirupati. Our sales doubled in 3 months thanks to their amazing SEO services in tirupati near Renigunta Rd.',
    avatar: 'https://i.pravatar.cc/150?u=suresh',
    rating: 5
  },
  {
    id: '2',
    name: 'Lakshmi P',
    role: 'Founder',
    company: 'SV Organics',
    content: 'The website designers at Niyaz Technologies are exceptional. Best website designers Tirupati has to offer! Our site is now a lead machine and mobile perfect.',
    avatar: 'https://i.pravatar.cc/150?u=lakshmi',
    rating: 5
  },
  {
    id: '3',
    name: 'Dr. Ramesh G',
    role: 'Chief Surgeon',
    company: 'Tirupati Health Care',
    content: 'We searched for the best digital marketing agency in tirupati and found Niyaz Technologies. Their SEO company in tirupati expertise helped our hospital rank #1 locally on Maps.',
    avatar: 'https://i.pravatar.cc/150?u=ramesh',
    rating: 5
  },
  {
    id: '4',
    name: 'Farooq Shaik',
    role: 'Owner',
    company: 'Modern Textiles',
    content: 'Excellent digital marketing services in tirupati. Their social media management and content writing brought us hundreds of new customers in the SV Auto Nagar area.',
    avatar: 'https://i.pravatar.cc/150?u=farooq',
    rating: 5
  },
  {
    id: '5',
    name: 'Anita Reddy',
    role: 'Principal',
    company: 'Bright Minds Academy',
    content: 'As a web development company in tirupati, they are unmatched. They built a portal that handles all our admissions seamlessly. High performance and great support!',
    avatar: 'https://i.pravatar.cc/150?u=anita',
    rating: 5
  },
  {
    id: '6',
    name: 'Venkat Rao',
    role: 'CEO',
    company: 'Tirupati Real Estates',
    content: 'The best digital marketing company in tirupati for real estate. Their advertising strategies on Meta and Google changed our business trajectory and ROI.',
    avatar: 'https://i.pravatar.cc/150?u=venkat',
    rating: 5
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Shaik Akthar Basha',
    role: 'Founder & CEO',
    image: 'https://i.pravatar.cc/300?u=akthar',
    bio: 'Lead strategist at Niyaz Technologies with deep expertise in SEO and Digital Marketing in Tirupati. Dedicated to scaling local businesses to global standards.',
    socials: { linkedin: '#' }
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  { id: 1, title: 'Deep Digital Audit', description: 'Comprehensive review of your digital presence and competitor gap analysis in Tirupati.', icon: 'fa-magnifying-glass' },
  { id: 2, title: '3D Growth Roadmap', description: 'Tailored strategy focusing on your specific industry goals and market behavior.', icon: 'fa-chess' },
  { id: 3, title: 'Precision Execution', description: 'Implementing technical SEO, web design, and ad campaigns by our expert team.', icon: 'fa-rocket' },
  { id: 4, title: 'Continuous Scaling', description: 'Optimizing for 10x ROI and maintaining absolute market dominance.', icon: 'fa-arrow-up-right-dots' }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Startup Local',
    price: '₹9,999',
    period: 'mo',
    description: 'Perfect for new shops and startups in Tirupati.',
    features: ['GMB SEO Optimization', '1 Social Media Platform', 'Basic Content Writing', 'Monthly Progress Report', 'Local Keyword Focus'],
    isPopular: false,
    cta: 'Get Started'
  },
  {
    name: 'Growth Matrix',
    price: '₹24,999',
    period: 'mo',
    description: 'Best for scaling businesses looking for the best digital marketing services in tirupati.',
    features: ['Full SEO Service', '3 Social Platforms', 'Ad Management Support', 'Weekly Analytics Updates', 'Competitor Monitoring', 'Priority Support'],
    isPopular: true,
    cta: 'Start Scaling'
  },
  {
    name: 'Enterprise 3D',
    price: 'Custom',
    period: 'mo',
    description: 'Full-stack digital transformation for industry leaders.',
    features: ['Advanced Web Development', 'Omnichannel Strategy', 'Daily Ad Optimization', 'Priority 24/7 Support', 'Custom CRM Integration', 'Unlimited Consultations'],
    isPopular: false,
    cta: 'Consult Now'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    client: 'Tirupati Fashion Hub',
    industry: 'Retail',
    growth: '250%',
    metric: 'Sales Growth',
    image: 'https://picsum.photos/seed/fashion/800/600',
    summary: 'Engineered a 3D digital presence that transformed a local boutique into a top-rated fashion destination in Tirupati.'
  },
  {
    id: '2',
    client: 'SV Logistics & Movers',
    industry: 'Service',
    growth: '15x',
    metric: 'Lead Velocity',
    image: 'https://picsum.photos/seed/logistics/800/600',
    summary: 'Optimized local search visibility and conversion funnels, making them the most visible logistics service in the region.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Why your Tirupati Business needs SEO in 2024',
    excerpt: 'Local search visibility is no longer optional. Learn how to rank #1 for digital marketing agency in tirupati keywords.',
    date: '2024-05-15',
    author: 'Akthar Basha',
    image: 'https://picsum.photos/seed/seo/400/250',
    category: 'SEO'
  },
  {
    id: '2',
    title: 'Best Website Designers Tirupati Advice',
    excerpt: 'How immersive web design increases conversion rates for service providers and retailers alike.',
    date: '2024-05-10',
    author: 'Akthar Basha',
    image: 'https://picsum.photos/seed/web/400/250',
    category: 'Web Design'
  }
];
