import React from 'react';
import Link from 'next/link';

const projects = [
  {
    title: "Shop-Vista -(E-Commerce Store)",
    link: "https://shop-vistaa.netlify.app/",
    image: "/Shop-vista.png",
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
    title: "Desire-Netflix - (Streaming Platform)",
    link: "https://moviepot-rosy.vercel.app/auth",
    image: "/netflix.png",
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
    //   { name: "JavaScript", image: "/typescript.png" },
    ],
  },
  {
    title: "New-hop-Vista -(E-Commerce Store)",
    link: "https://new-shopvista.vercel.app/",
    image: "/new_shop_vista.png",
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
  // {
  //   title: "Sitting-Position-Detection - (Web-App)",
  //   link: "https://sitting-position-detection.vercel.app/",
  //   image: "/sitting-position/spd-cover.png",
  //   techStack: [
  //     { name: "Next JS", image: "/nextjs.png" },
  //     { name: "React JS", image: "/react.png" },
  //     { name: "Tailwind", image: "/tailwind.png" },
  //     { name: "NodeJS", image: "/node-js.png" },
  //     { name: "Tensor Flow", image: "/react.png" },
  //   ],
  // },
  // {
  //   title: "Sitting-Position-Detection - (Web-App)",
  //   link: "https://sitting-position-detection.vercel.app/",
  //   image: "/sitting-position/spd-cover.png",
  //   techStack: [
  //     { name: "Next JS", image: "/nextjs.png" },
  //     { name: "React JS", image: "/react.png" },
  //     { name: "Tailwind", image: "/tailwind.png" },
  //     { name: "NodeJS", image: "/node-js.png" },
  //     { name: "Tensor Flow", image: "/react.png" },
  //   ],
  // },
  {
    title: "Sages - (School Website for administration and faculty)",
    link: "https://sagess.netlify.app/",
    image: "/sages.png",
    techStack: [
      { name: "Next JS", image: "/nextjs.png" },
      { name: "React JS", image: "/react.png" },
      { name: "Tailwind", image: "/tailwind.png" },
      { name: "NodeJS", image: "/node-js.png" },
      { name: "JavaScript", image: "/typescript.png" },
    ],
  },
  {
    title: "Shopify - (E-Commerce - Android App )",
    link: "https://github.com/kakashihatakesh6/shopify",
    image: "/shopify/shopify-bg.png",
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
  <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40 border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200'>
    <div className='rounded-md'>
      <img src={image} width={24} alt={name} />
    </div>
    <div>{name}</div>
  </div>
);

interface TechStack {
  name: string;
  image: string;
}

interface ProjectProps {
  title: string;
  link: string;
  image: string;
  techStack: TechStack[];
}

const Project: React.FC<ProjectProps> = ({ title, link, image, techStack }) => (
    <div className='border-slate-700 border w-[330px] min-h-[300px] h-[505px] m-3 p-1 hover:bg-slate-900 duration-300 transition-all cursor-pointer'>
      <div className='text-[17px] text-slate-300 p-4 pb-2 text-center flex justify-center gap-2'>
        <a target='_blank' href={link} className='flex flex-row'>
          <span>{title}</span>
          <img className='w-6 h-6 pt-1' src="link.png" alt="link" />
        </a>
      </div>
      <hr className='w-[70%] mb-4 text-center m-auto text-slate-400 bg-slate-700 border-slate-600' />
      <div className='w-[95%] object-cover h-[auto] m-auto'>
        <img src={image} className='cursor-pointer opacity-75 hover:opacity-100 h-[10rem] object-contain transition-all duration-200' alt={title} />
      </div>
      <div className='m-2 text-lg ml-4 text-slate-300 mt-8'>TECH STACK</div>
      <div className='flex flex-wrap w-[400px]'>
        {techStack.map((tech, index) => (
          <TechStackItem key={index} {...tech} />
        ))}
      </div>
    </div>
  );
  
  const Work = () => (
    <div className='mt-[5rem] h-[auto] w-[360px] md:w-[720px]'>
      <div className='stroke-yellow-300 text-[5rem] md:text-[6rem] font-extrabold z-0 opacity-80 text-transparent' style={{ strokeWidth: "1.5px", WebkitTextStrokeWidth: "1.9px", WebkitTextStrokeColor: "yellow" }}>
        {"<"}Work {"/>"}   
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center m-auto'>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
  
  export default Work;