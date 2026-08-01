"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Download, Github, X, ChevronLeft, ChevronRight, Play, Image as ImageIcon, Monitor, Smartphone } from 'lucide-react';

interface TechStack {
  name: string;
  image: string;
}

interface ProjectProps {
  title: string;
  link: string;
  image: string;
  category: 'web' | 'mobile';
  techStack: TechStack[];
  downloadUrl?: string;
  github?: string;
  description: string;
  features: string[];
  gallery?: string[];
  videoUrl?: string;
}

const projects: ProjectProps[] = [
  {
    title: "Shop-Vista -(E-Commerce Store)",
    link: "https://shop-vistaa.netlify.app/",
    image: "/Shop-vista.png",
    category: "web",
    github: "https://github.com/kakashihatakesh6/Shop-Vista",
    description: "A full-featured e-commerce application displaying modern catalog management, persistent global state, and dynamic user interfaces. Features comprehensive search, custom filtering, and an integrated shopping cart.",
    features: [
      "Responsive layout for smooth shopping experience on desktop and mobile",
      "Dynamic catalog search with sorting, category filters, and rating systems",
      "Global store state managed using Redux Toolkit",
      "Secure online payment processing powered by Razorpay integration",
      "Robust backend API using Express.js and MongoDB database management"
    ],
    techStack: [
      { name: "Next JS", image: "/nextjs.png" },
      { name: "React JS", image: "/react.png" },
      { name: "Redux", image: "/redux.jpg" },
      { name: "Tailwind", image: "/tailwind.png" },
      { name: "NodeJS", image: "/node-js.png" },
      { name: "JavaScript", image: "/typescript.png" },
      { name: "express", image: "/express.png" },
      { name: "MongoDB", image: "/mongodb.png" },
      { name: "Razorpay", image: "/razorpay.png" },
    ],
  },
  {
    title: "Tickora -(Booking)",
    link: "https://tickora-new.vercel.app/",
    image: "/tickora-thumbnail.png",
    category: "web",
    github: "https://github.com/kakashihatakesh6/Tickora-Booking",
    description: "A fast, high-performance event ticketing and reservation platform optimized for peak concurrency and data consistency.",
    features: [
      "Scalable booking management powered by high-speed Redis caching layers",
      "Real-time event seating choice maps and ticketing workflows",
      "Stripe or Razorpay payment checkouts with secure transactional callbacks",
      "Responsive portal pages with interactive event categorization and styling"
    ],
    techStack: [
      { name: "Next JS", image: "/nextjs.png" },
      { name: "React JS", image: "/react.png" },
      { name: "Redis", image: "/redis.png" },
      { name: "Tailwind", image: "/tailwind.png" },
      { name: "NodeJS", image: "/node-js.png" },
      { name: "JavaScript", image: "/typescript.png" },
      { name: "express", image: "/express.png" },
      { name: "Postgres", image: "/postgres.png" },
      { name: "Razorpay", image: "/razorpay.png" },
    ],
  },
  {
    title: "Desire-Netflix - (Streaming Platform)",
    link: "https://moviepot-rosy.vercel.app/auth",
    image: "/netflix.png",
    category: "web",
    github: "https://github.com/kakashihatakesh6/Netflix-Clone",
    description: "A custom video streaming portal capturing the look and feel of major production video sites, featuring profile creation, persistent search, and trailer playback overlays.",
    features: [
      "Dynamic movie library loading with categories and custom sliders",
      "Video streaming player overlay with media play and pause controllers",
      "User authentication and profile settings with NextAuth database adapters",
      "Clean UI styled using Tailwind CSS and components from Shadcn UI"
    ],
    techStack: [
      { name: "Next JS", image: "/nextjs.png" },
      { name: "React JS", image: "/react.png" },
      { name: "Tailwind", image: "/tailwind.png" },
      { name: "NodeJS", image: "/node-js.png" },
      { name: "Prisma", image: "/prisma.png" },
      { name: "TypeScript", image: "/typescript.png" },
      { name: "Express", image: "/express.png" },
      { name: "NextAuth", image: "/node-js.png" },
      { name: "Shadcn", image: "/shadcn.png" },
    ],
  },
  {
    title: "New-Shop-Vista -(E-Commerce Store)",
    link: "https://new-shopvista.vercel.app/",
    image: "/new_shop_vista.png",
    category: "web",
    github: "https://github.com/kakashihatakesh6/New-Shop-Vista",
    description: "An optimized, high-fidelity next-gen iteration of the Shop-Vista platform, loaded with SEO enhancements, smooth page transitions, and quick product load speeds.",
    features: [
      "Blazing fast performance scoring with Next.js static and server rendering",
      "Intuitive navigation dashboard and animated cart drawers",
      "Interactive checkout pipeline using Razorpay payment gateway options",
      "Redux global state syncing with client side local storage persistence"
    ],
    techStack: [
      { name: "Next JS", image: "/nextjs.png" },
      { name: "React JS", image: "/react.png" },
      { name: "Redux", image: "/redux.jpg" },
      { name: "Tailwind", image: "/tailwind.png" },
      { name: "NodeJS", image: "/node-js.png" },
      { name: "JavaScript", image: "/typescript.png" },
      { name: "express", image: "/express.png" },
      { name: "MongoDB", image: "/mongodb.png" },
      { name: "Razorpay", image: "/razorpay.png" },
    ],
  },
  {
    title: "Sages - (School Website for administration and faculty)",
    link: "https://sagess.netlify.app/",
    image: "/sages.png",
    category: "web",
    github: "https://github.com/kakashihatakesh6/School-Website",
    description: "A centralized dashboard for students, teachers, and parents to access curriculum schedules, announcements, and school administrative resources.",
    features: [
      "Real-time announcements panel for urgent calendar and class updates",
      "Fully responsive and accessible school staff listings with contact forms",
      "Parent resources download portal and interactive event timelines",
      "Modern animations and clean interface layout using Tailwind CSS"
    ],
    techStack: [
      { name: "Next JS", image: "/nextjs.png" },
      { name: "React JS", image: "/react.png" },
      { name: "Tailwind", image: "/tailwind.png" },
      { name: "NodeJS", image: "/node-js.png" },
      { name: "JavaScript", image: "/typescript.png" },
    ],
  },
  {
    title: "Spenza AI - (Expense Tracker - Android App)",
    link: "https://github.com/kakashihatakesh6/spenza-ai/",
    image: "/mobile/spenza.png",
    category: "mobile",
    downloadUrl: "https://drive.google.com/file/d/1xVBxMh5j5B5HQ62YCztk7x1uJatvt4KF/view?usp=drive_link",
    videoUrl: "/mobile/spenza.mp4",
    description: "A mobile financial dashboard application designed to manage daily expenditures, structure monthly budgeting, and generate smart statistical insights.",
    features: [
      "Visual charts displaying transaction history categories and budget limits",
      "Native device integration for attaching receipts and capturing photo invoices",
      "Robust state storage with client authentication checks",
      "Automatic weekly budget summaries and financial alerts"
    ],
    techStack: [
      { name: "Next JS", image: "/nextjs.png" },
      { name: "React JS", image: "/react.png" },
      { name: "Redux", image: "/redux.jpg" },
      { name: "Tailwind", image: "/tailwind.png" },
      { name: "NodeJS", image: "/node-js.png" },
      { name: "Express", image: "/express.png" },
      { name: "Mongo", image: "/mongodb.png" },
      { name: "Razorpay", image: "/razorpay.png" },
    ],
  },
  {
    title: "Shopify - (E-Commerce - Android App)",
    link: "https://github.com/kakashihatakesh6/shopify",
    image: "/mobile/shopiffy.png",
    category: "mobile",
    downloadUrl: "https://drive.google.com/file/d/1b93-98MeezU0jNvOirX9Z1rj21AB3I0S/view?usp=drive_link",
    description: "A fully features, native-feel android application bringing standard e-commerce workflows, reviews, checkouts, and tracking to mobile screens.",
    features: [
      "Fluid page navigation and transitions optimized for mobile gesture inputs",
      "Interactive product details slider and instant item comparison view",
      "Persistent user wishlist and shopping bag local caching",
      "Direct mobile payment checkouts with Razorpay SDK integration"
    ],
    techStack: [
      { name: "Next JS", image: "/nextjs.png" },
      { name: "React JS", image: "/react.png" },
      { name: "Redux", image: "/redux.jpg" },
      { name: "Tailwind", image: "/tailwind.png" },
      { name: "NodeJS", image: "/node-js.png" },
      { name: "Express", image: "/express.png" },
      { name: "Mongo", image: "/mongodb.png" },
      { name: "Razorpay", image: "/razorpay.png" },
    ],
  },
  {
    title: "Pay Per Parking - (Vehicle Parking Booking Application)",
    link: "https://github.com/kakashihatakesh6/Pay_Per_Parking",
    image: "/mobile/payperparking.png",
    category: "mobile",
    downloadUrl: "https://drive.google.com/file/d/1b93-98MeezU0jNvOirX9Z1rj21AB3I0S/view?usp=drive_link",
    description: "A premium mobile system matching drivers with available parking spaces in real-time. Features geographical slot mapping and reservations.",
    features: [
      "Google Maps API tracking to view nearby available garage parking zones",
      "Live vacancy monitoring and timers connected through Firebase database hooks",
      "Instant reservations checkouts and receipts generated with scan codes",
      "Lightweight, native Kotlin architecture for efficient execution"
    ],
    techStack: [
      { name: "Kotlin", image: "/nextjs.png" },
      { name: "XML", image: "/react.png" },
      { name: "SDK", image: "/redux.jpg" },
      { name: "Firebase", image: "/node-js.png" },
      { name: "Razorpay", image: "/razorpay.png" },
    ],
  },
];

const TechStackItem: React.FC<TechStack> = ({ name, image }) => (
  <div className="text-slate-300 cursor-pointer rounded-full border border-slate-800 bg-slate-950/40 hover:bg-slate-800/80 hover:border-slate-700 flex items-center gap-1.5 px-2.5 py-1 text-[11px] transition-all duration-200 select-none">
    <div className="flex items-center justify-center w-4 h-4 overflow-hidden rounded-sm bg-white/10 p-0.5">
      <img src={image} className="w-full h-full object-contain" alt={name} />
    </div>
    <span>{name}</span>
  </div>
);

interface ProjectCardProps extends ProjectProps {
  onOpenModal: () => void;
}

const Project: React.FC<ProjectCardProps> = ({ title, link, image, category, techStack, downloadUrl, github, onOpenModal }) => {
  const hoverTimeoutRef = React.useRef<any>(null);

  const handleMouseEnter = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      onOpenModal();
    }, 200);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    onOpenModal();
  };

  React.useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  let mainTitle = title;
  let subTitle = "";
  
  if (title.includes(" - ")) {
    const parts = title.split(" - ");
    mainTitle = parts[0];
    subTitle = parts.slice(1).join(" - ").trim();
  } else if (title.includes(" -")) {
    const parts = title.split(" -");
    mainTitle = parts[0];
    subTitle = parts.slice(1).join(" -").trim();
  } else if (title.includes("- ")) {
    const parts = title.split("- ");
    mainTitle = parts[0];
    subTitle = parts.slice(1).join("- ").trim();
  }
  
  if (subTitle.startsWith('(') && subTitle.endsWith(')')) {
    subTitle = subTitle.slice(1, -1).trim();
  }

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      className="border-slate-800 bg-slate-900/20 backdrop-blur-md border w-[330px] h-[490px] m-3 p-5 hover:border-yellow-400/40 hover:bg-slate-900/40 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.6),_0_0_25px_rgba(234,179,8,0.12)] hover:-translate-y-1.5 duration-300 transition-all rounded-2xl flex flex-col justify-between group cursor-pointer animate-in fade-in zoom-in-95 duration-200"
    >
      <div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-[10px] uppercase font-bold tracking-wider text-yellow-400/80 bg-yellow-400/5 border border-yellow-400/20 px-2.5 py-0.5 rounded-full select-none">
            {category === 'web' ? 'Web Project' : 'Mobile App'}
          </span>
        </div>
        
        <h3 className="text-[18px] font-bold text-slate-100 line-clamp-1 group-hover:text-yellow-400 transition-colors duration-300" title={mainTitle}>
          {mainTitle}
        </h3>
        
        {subTitle && (
          <p className="text-[11px] text-slate-400 font-medium line-clamp-1 mt-0.5 mb-3">
            {subTitle}
          </p>
        )}
        {!subTitle && <div className="h-[17px] mt-0.5 mb-3"></div>}

        <div className="w-full h-[180px] overflow-hidden rounded-xl bg-slate-950/50 flex items-center justify-center border border-slate-800/50 relative group/img">
          <img 
            src={image} 
            className="opacity-80 group-hover:opacity-100 max-w-[90%] max-h-[85%] object-contain transition-all duration-500 group-hover:scale-105" 
            alt={title} 
          />
          {/* Interactive Hover Overlay */}
          <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <span className="px-4 py-2 bg-yellow-400 text-black text-xs font-extrabold rounded-full shadow-lg shadow-yellow-400/25 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1.5 select-none">
              <span>View Details</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex flex-col flex-grow justify-end">
        <div className="text-[9px] font-bold tracking-widest text-slate-500 mb-1.5 uppercase">TECH STACK</div>
        <div className="flex flex-wrap gap-1.5 justify-start max-h-[80px] overflow-y-auto pr-1 no-scrollbar">
          {techStack.map((tech, index) => (
            <TechStackItem key={index} {...tech} />
          ))}
        </div>
        
        <hr className="w-full my-4 border-slate-800/50" />
        
        <div className="flex gap-2.5">
          {category === 'web' ? (
            <>
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                href={link} 
                onClick={(e) => e.stopPropagation()}
                className={`${github ? 'flex-1' : 'w-full'} flex items-center justify-center gap-1.5 py-2 px-3 bg-yellow-400 hover:bg-yellow-350 text-black font-extrabold rounded-xl transition-all duration-200 text-xs shadow-md shadow-yellow-400/5 hover:shadow-lg hover:shadow-yellow-400/15 active:scale-[0.98]`}
              >
                <span>Visit Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              {github && (
                <a 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  href={github} 
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-slate-950 border border-slate-800/60 hover:bg-slate-900 hover:border-slate-700 text-slate-300 font-bold rounded-xl transition-all duration-200 text-xs active:scale-[0.98]"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Code</span>
                </a>
              )}
            </>
          ) : (
            <>
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                href={downloadUrl || `${link}/releases`} 
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold rounded-xl transition-all duration-200 text-xs shadow-md shadow-yellow-400/5 hover:shadow-lg hover:shadow-yellow-400/15 active:scale-[0.98]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download APK</span>
              </a>
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                href={link} 
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-slate-950 border border-slate-800/60 hover:bg-slate-900 hover:border-slate-700 text-slate-300 font-bold rounded-xl transition-all duration-200 text-xs active:scale-[0.98]"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Code</span>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

interface ProjectModalProps {
  project: ProjectProps;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'video' | 'gallery'>('video');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  let mainTitle = project.title;
  let subTitle = "";
  
  if (project.title.includes(" - ")) {
    const parts = project.title.split(" - ");
    mainTitle = parts[0];
    subTitle = parts.slice(1).join(" - ").trim();
  } else if (project.title.includes(" -")) {
    const parts = project.title.split(" -");
    mainTitle = parts[0];
    subTitle = parts.slice(1).join(" -").trim();
  } else if (project.title.includes("- ")) {
    const parts = project.title.split("- ");
    mainTitle = parts[0];
    subTitle = parts.slice(1).join("- ").trim();
  }
  
  if (subTitle.startsWith('(') && subTitle.endsWith(')')) {
    subTitle = subTitle.slice(1, -1).trim();
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-6 cursor-pointer"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30, rotateX: 12 }}
        animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30, rotateX: -12 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        style={{ transformPerspective: 1200 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-slate-900/95 border border-slate-800/80 w-full max-w-5xl h-[85vh] md:h-[80vh] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[0_0_50px_rgba(0,0,0,0.8)] cursor-default"
      >
        {/* Glow Effects */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-yellow-400/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-slate-950/60 border border-slate-800 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 text-slate-400 p-2 rounded-full z-[110] transition-all duration-200 cursor-pointer active:scale-95 shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LEFT PANEL: Media (Video / Pics) */}
        <div className="w-full md:w-[55%] h-[40%] md:h-full bg-slate-950 flex flex-col justify-between relative border-b md:border-b-0 md:border-r border-slate-800/50">
          
          {/* Media Switcher Tab */}
          <div className="absolute top-4 left-4 z-10 flex bg-slate-900/90 backdrop-blur-md p-0.5 rounded-full border border-slate-800/80">
            <button
              onClick={() => setActiveTab('video')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase transition-all duration-300 ${
                activeTab === 'video'
                  ? 'bg-yellow-400 text-black shadow-md shadow-yellow-400/10'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Play className="w-3.5 h-3.5" />
              <span>Video Demo</span>
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase transition-all duration-300 ${
                activeTab === 'gallery'
                  ? 'bg-yellow-400 text-black shadow-md shadow-yellow-400/10'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Gallery</span>
            </button>
          </div>

          {/* Media Body */}
          <div className="flex-1 w-full h-full flex items-center justify-center overflow-hidden p-6 pt-16 relative">
            {activeTab === 'video' ? (
              // Video Demo Area
              project.videoUrl ? (
                <div className="w-full h-full flex items-center justify-center p-4">
                  <video 
                    src={project.videoUrl} 
                    className="w-full max-h-full rounded-xl object-contain shadow-2xl border border-slate-800"
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    controls
                  />
                </div>
              ) : (
                /* High-fidelity Simulated Video Demo */
                <div className="w-full h-full flex flex-col items-center justify-center p-2">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-3 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 flex items-center gap-1.5 select-none animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>Interactive Auto-Scroll Demo</span>
                  </div>
                  
                  {project.category === 'web' ? (
                    /* Web Browser Mockup Frame */
                    <div className="w-full max-w-[420px] aspect-[16/10] bg-slate-900 border border-slate-700/60 rounded-xl overflow-hidden flex flex-col shadow-2xl">
                      {/* Browser header */}
                      <div className="bg-slate-950 border-b border-slate-800 px-3 py-2 flex items-center gap-2 select-none">
                        <div className="flex gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                        </div>
                        <div className="bg-slate-900 border border-slate-800/80 rounded-md text-[9px] text-slate-500 px-2 py-0.5 flex-1 max-w-[200px] text-center truncate ml-4">
                          {project.link.replace('https://', '')}
                        </div>
                      </div>
                      {/* Scrolling Browser Screen content */}
                      <div className="flex-1 w-full bg-slate-950 overflow-hidden relative select-none">
                        <div className="absolute inset-0 overflow-hidden flex justify-center items-start">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-auto object-contain opacity-90 select-none pointer-events-none" 
                            style={{ animation: 'autoScroll 20s linear infinite' }}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Mobile Device Mockup Frame */
                    <div className="w-[180px] h-[340px] md:w-[200px] md:h-[380px] bg-slate-900 border-4 border-slate-950 rounded-[30px] overflow-hidden flex flex-col shadow-2xl relative">
                      {/* Speaker / Camera Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-950 rounded-b-xl z-20 flex items-center justify-center">
                        <div className="w-8 h-1 bg-slate-800 rounded-full"></div>
                      </div>
                      {/* Scrolling Phone Screen content */}
                      <div className="flex-1 w-full bg-slate-950 overflow-hidden relative select-none pt-4">
                        <div className="absolute inset-0 overflow-hidden flex justify-center items-start">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-[90%] h-auto object-contain opacity-90 pt-2 select-none pointer-events-none"
                            style={{ animation: 'autoScrollMobile 15s linear infinite' }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            ) : (
              // Image Gallery View
              <div className="w-full h-full flex flex-col items-center justify-center p-2 relative group/gallery">
                <div className="relative w-full max-h-[80%] flex items-center justify-center">
                  <img 
                    src={images[activeImageIndex]} 
                    alt={`${project.title} screenshot ${activeImageIndex + 1}`} 
                    className="max-w-[95%] max-h-full rounded-2xl object-contain shadow-2xl border border-slate-800/50"
                  />
                  
                  {/* Slider Arrows */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-2 bg-slate-900/80 border border-slate-800 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 text-slate-300 p-2 rounded-full transition-all duration-200 cursor-pointer active:scale-90"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute right-2 bg-slate-900/80 border border-slate-800 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 text-slate-300 p-2 rounded-full transition-all duration-200 cursor-pointer active:scale-90"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>

                {/* Slider Indicators */}
                {images.length > 1 && (
                  <div className="flex gap-1.5 mt-4">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImageIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          activeImageIndex === i ? 'w-5 bg-yellow-400' : 'bg-slate-700 hover:bg-slate-500'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT PANEL: Info details */}
        <div className="w-full md:w-[45%] h-[60%] md:h-full overflow-y-auto p-6 md:p-8 flex flex-col justify-between bg-slate-900/40 no-scrollbar">
          <div>
            {/* Project Category and Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] uppercase font-bold tracking-widest text-yellow-400/90 bg-yellow-400/5 border border-yellow-400/20 px-2.5 py-1 rounded-full select-none flex items-center gap-1.5">
                {project.category === 'web' ? <Monitor className="w-3 h-3" /> : <Smartphone className="w-3 h-3" />}
                <span>{project.category === 'web' ? 'Web Application' : 'Mobile Application'}</span>
              </span>
            </div>

            {/* Title & Subtitle */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-100 tracking-tight leading-tight hover:text-yellow-400 transition-colors duration-300">
              {mainTitle}
            </h2>
            
            {/* Subtitle */}
            {subTitle && (
              <p className="text-xs text-slate-400 font-semibold mt-1 mb-5">
                {subTitle}
              </p>
            )}
            {!subTitle && <div className="h-[20px] mt-1 mb-5"></div>}

            {/* Description */}
            <div className="bg-slate-950/30 border border-slate-800/60 p-4 rounded-2xl mb-6 shadow-inner">
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                {project.description}
              </p>
            </div>

            {/* Key Features List */}
            {project.features && project.features.length > 0 && (
              <div className="mb-6">
                <h4 className="text-[10px] font-bold tracking-widest text-slate-500 mb-3 uppercase">KEY FEATURES</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="text-yellow-400 font-bold mt-0.5 select-none">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack List */}
            <div className="mb-6">
              <h4 className="text-[10px] font-bold tracking-widest text-slate-500 mb-3 uppercase">TECH STACK</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, index) => (
                  <TechStackItem key={index} {...tech} />
                ))}
              </div>
            </div>
          </div>

          {/* Action Call to Action Footer */}
          <div>
            <hr className="w-full my-5 border-slate-800/50" />
            
            <div className="flex gap-3">
              {project.category === 'web' ? (
                <>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-yellow-400 hover:bg-yellow-350 text-black font-extrabold rounded-2xl transition-all duration-200 text-xs shadow-lg shadow-yellow-400/5 hover:shadow-yellow-400/15 active:scale-[0.98]"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  {project.github && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-slate-950 border border-slate-800/80 hover:bg-slate-900 hover:border-slate-700 text-slate-300 font-bold rounded-2xl transition-all duration-200 text-xs active:scale-[0.98]"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                  )}
                </>
              ) : (
                <>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.downloadUrl || `${project.link}/releases`}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-yellow-400 hover:bg-yellow-350 text-black font-extrabold rounded-2xl transition-all duration-200 text-xs shadow-lg shadow-yellow-400/5 hover:shadow-yellow-400/15 active:scale-[0.98]"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download APK</span>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-slate-950 border border-slate-800/80 hover:bg-slate-900 hover:border-slate-700 text-slate-300 font-bold rounded-2xl transition-all duration-200 text-xs active:scale-[0.98]"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Work = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'mobile'>('web');
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);
  
  const tabs = [
    { id: 'web', label: 'Web Projects' },
    { id: 'mobile', label: 'Mobile Apps' },
  ] as const;

  const filteredProjects = projects.filter(project => project.category === activeTab);

  return (
    <div className="mt-[5rem] h-[auto] w-[360px] md:w-[720px] flex flex-col" id="work">
      <div 
        className="stroke-yellow-300 text-[2.5rem] xs:text-[3rem] sm:text-[4rem] md:text-[6rem] font-extrabold z-0 opacity-80 text-transparent select-none leading-none mb-6 whitespace-nowrap" 
        style={{ strokeWidth: "1.5px", WebkitTextStrokeWidth: "1.9px", WebkitTextStrokeColor: "yellow" }}
      >
        {"<"}Work {"/>"}
      </div>

      {/* Tabs */}
      <div className="flex justify-start mb-6 px-3">
        <div className="flex bg-slate-950/45 backdrop-blur-md p-1 rounded-full border border-slate-800/80 relative">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-colors duration-300 ${
                  isActive ? 'text-black' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-yellow-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid with Animations */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center m-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
            >
              <Project 
                {...project} 
                onOpenModal={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Rich Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Work;
