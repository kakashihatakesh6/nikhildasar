"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

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
}

const projects: ProjectProps[] = [
  {
    title: "Shop-Vista -(E-Commerce Store)",
    link: "https://shop-vistaa.netlify.app/",
    image: "/Shop-vista.png",
    category: "web",
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
    link: "https://github.com/kakashihatakesh6/expense-tracker/",
    image: "/spenza/mb3.jpg",
    category: "mobile",
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
    image: "/shopify/shopify-bg.png",
    category: "mobile",
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
    image: "/payperparking.png",
    category: "mobile",
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
  <div className="text-slate-355 cursor-pointer rounded-full border border-slate-800 bg-slate-950/40 hover:bg-slate-800/80 hover:border-slate-700 flex items-center gap-1.5 px-2.5 py-1 text-[11px] transition-all duration-200 select-none">
    <div className="flex items-center justify-center w-4 h-4 overflow-hidden rounded-sm bg-white/10 p-0.5">
      <img src={image} className="w-full h-full object-contain" alt={name} />
    </div>
    <span>{name}</span>
  </div>
);

const Project: React.FC<ProjectProps> = ({ title, link, image, techStack }) => (
  <div className="border-slate-850 bg-slate-900/20 backdrop-blur-md border w-[330px] h-[480px] m-3 p-4 hover:border-yellow-400/40 hover:bg-slate-900/50 duration-300 transition-all cursor-pointer rounded-xl flex flex-col justify-between group shadow-lg shadow-black/25">
    <div>
      <div className="text-[17px] font-bold text-slate-200 pb-2 flex justify-between items-center group-hover:text-yellow-400 transition-colors duration-300">
        <span className="line-clamp-2 pr-2">{title}</span>
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          href={link} 
          className="text-slate-400 hover:text-yellow-400 transition-colors p-1.5 rounded-full hover:bg-slate-800/50 flex-shrink-0"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      <hr className="w-full mb-4 border-slate-800/80" />
      <div className="w-full h-[180px] overflow-hidden rounded-lg bg-slate-950/40 flex items-center justify-center border border-slate-800/50 relative">
        <img 
          src={image} 
          className="cursor-pointer opacity-85 group-hover:opacity-100 max-w-[95%] max-h-[90%] object-contain transition-all duration-300 group-hover:scale-[1.03]" 
          alt={title} 
        />
      </div>
    </div>
    
    <div className="mt-4 flex flex-col flex-grow justify-end">
      <div className="text-[10px] font-bold tracking-widest text-slate-400 mb-2 uppercase">TECH STACK</div>
      <div className="flex flex-wrap gap-1.5 justify-start max-h-[140px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-800">
        {techStack.map((tech, index) => (
          <TechStackItem key={index} {...tech} />
        ))}
      </div>
    </div>
  </div>
);

const Work = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'mobile'>('web');
  
  const tabs = [
    { id: 'web', label: 'Web Projects' },
    { id: 'mobile', label: 'Mobile Apps' },
  ] as const;

  const filteredProjects = projects.filter(project => project.category === activeTab);

  return (
    <div className="mt-[5rem] h-[auto] w-[360px] md:w-[720px] flex flex-col">
      <div 
        className="stroke-yellow-300 text-[5rem] md:text-[6rem] font-extrabold z-0 opacity-80 text-transparent select-none leading-none mb-6" 
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
              <Project {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Work;