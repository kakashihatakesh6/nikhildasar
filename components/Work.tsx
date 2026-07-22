"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Download, Github } from 'lucide-react';

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
}

const projects: ProjectProps[] = [
  {
    title: "Shop-Vista -(E-Commerce Store)",
    link: "https://shop-vistaa.netlify.app/",
    image: "/Shop-vista.png",
    category: "web",
    github: "https://github.com/kakashihatakesh6/Shop-Vista",
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
    image: "/mobile/spenza.png",
    category: "mobile",
    downloadUrl: "https://github.com/kakashihatakesh6/expense-tracker/releases",
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
    downloadUrl: "https://github.com/kakashihatakesh6/shopify/releases",
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
    downloadUrl: "https://github.com/kakashihatakesh6/Pay_Per_Parking/releases",
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

const Project: React.FC<ProjectProps> = ({ title, link, image, category, techStack, downloadUrl, github }) => {
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
    <div className="border-slate-800 bg-slate-900/20 backdrop-blur-md border w-[330px] h-[490px] m-3 p-5 hover:border-yellow-400/40 hover:bg-slate-900/40 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.6),_0_0_25px_rgba(234,179,8,0.12)] hover:-translate-y-1.5 duration-300 transition-all rounded-2xl flex flex-col justify-between group">
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
            className="opacity-80 group-hover:opacity-100 max-w-[90%] max-h-[85%] object-contain transition-all duration-500 group-hover/img:scale-[1.04]" 
            alt={title} 
          />
        </div>
      </div>
      
      <div className="mt-4 flex flex-col flex-grow justify-end">
        <div className="text-[9px] font-bold tracking-widest text-slate-500 mb-1.5 uppercase">TECH STACK</div>
        <div className="flex flex-wrap gap-1.5 justify-start max-h-[90px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
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
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold rounded-xl transition-all duration-200 text-xs shadow-md shadow-yellow-400/5 hover:shadow-lg hover:shadow-yellow-400/15 active:scale-[0.98]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download APK</span>
              </a>
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                href={link} 
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