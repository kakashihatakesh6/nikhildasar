import Link from 'next/link'
import Content from '../components/Content'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import VisitorCounter from '@/components/VisitorCounter'
import Chatbot from '@/components/chatbot/Chatbot'
import { MessageCircle, FileText, Linkedin, Github, Twitter, Mail } from 'lucide-react'
import { Bebas_Neue } from 'next/font/google'

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] })

export default function Home() {

  return (
    <div className="w-screen h-screen relative" >
      <div className='overlay'></div>
      <video src="/bg.mp4" loop autoPlay muted playsInline className="h-[100%] w-[100%] object-cover"></video>

      {/* Top Left ND Logo */}
      <Link href="/" className="absolute top-6 left-6 z-50 flex items-center justify-center font-extrabold text-2xl tracking-widest text-slate-100 cursor-pointer select-none group">
        <span className="text-yellow-400 group-hover:text-white transition-colors duration-300">N</span>
        <span className="text-white group-hover:text-yellow-400 transition-colors duration-300">D</span>
        <span className="absolute -inset-2 bg-yellow-400/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </Link>

      {/* Top Center Email Link (Direct compose in Gmail) */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=nkdasar@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-2.5 bg-slate-950/80 backdrop-blur-2xl border border-slate-800/80 hover:border-yellow-400/40 px-5 py-2.5 rounded-full text-xs font-bold text-slate-200 hover:text-yellow-400 hover:shadow-[0_0_25px_rgba(234,179,8,0.2)] transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.7)] group"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-yellow-400 to-amber-500"></span>
        </span>
        <Mail className="w-4 h-4 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
        <span className="tracking-widest font-extrabold uppercase text-[10px]">nkdasar@gmail.com</span>
      </a>

      {/* Top Right Desktop Navigation Menu */}
      <div className="absolute top-6 right-8 z-50 hidden md:flex items-center gap-10 select-none">
        <a 
          href="#about" 
          className={`${bebasNeue.className} relative pb-1 group/nav text-xl lg:text-2xl tracking-[0.12em] text-slate-100 hover:text-yellow-400 hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer`}
        >
          <span>About</span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover/nav:w-[70%] h-[2.5px] bg-yellow-400 rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(234,179,8,0.8)] pointer-events-none" />
        </a>
        <a 
          href="#work" 
          className={`${bebasNeue.className} relative pb-1 group/nav text-xl lg:text-2xl tracking-[0.12em] text-slate-100 hover:text-yellow-400 hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer`}
        >
          <span>Work</span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover/nav:w-[70%] h-[2.5px] bg-yellow-400 rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(234,179,8,0.8)] pointer-events-none" />
        </a>
        <a 
          href="#contact" 
          className={`${bebasNeue.className} relative pb-1 group/nav text-xl lg:text-2xl tracking-[0.12em] text-slate-100 hover:text-yellow-400 hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer`}
        >
          <span>Contact</span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover/nav:w-[70%] h-[2.5px] bg-yellow-400 rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(234,179,8,0.8)] pointer-events-none" />
        </a>
      </div>

      <div className='content flex' >
        <div className='w-[640px] m-auto border-[0.05px] border-opacity-5 border-white h-[auto] relative'>

          {/* Mobile Hamburger menu shifted to the top right */}
          <div className='px-4 pt-4 absolute right-4 top-2 text-white md:hidden z-50' >
            <Sheet>
              <SheetTrigger> <img src="/burger.png" alt="" /> </SheetTrigger>
              <SheetContent className='bg-slate-950 bg-opacity-40 border-none text-slate-400' >
                <SheetHeader>
                  <SheetTitle className='text-slate-400 text-center text-xl'>CONNECT WITH ME</SheetTitle>
                  <SheetDescription className='text-slate-400'>
                    <div className='text-slate-400 flex flex-col w-[50px] m-auto h-70% justify-evenly gap-6'>
                      <div><a target='_blank' rel="noopener noreferrer" href={'https://twitter.com/Kakashish6'}><img src="/twitterWhite.png" className='cursor-pointer mt-8' width={37} alt="" /></a></div>
                      <div><a target='_blank' rel="noopener noreferrer" href={'https://github.com/kakashihatakesh6'}><img src="/githubwhite.png" className='cursor-pointer' width={37} alt="" /></a></div>
                      <div><a target='_blank' rel="noopener noreferrer" href={'https://www.linkedin.com/in/nikhil-dasar-baa2a5217/'}> <img src="/linkedinwhite.png" className='cursor-pointer' width={37} alt="" /></a></div>
                      <div className='h-[100px] border border-white w-[1px] ml-5'></div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          <Content />
        </div>

        {/* Floating Left Side Menu (WhatsApp & Resume) - Expands Right */}
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/917989397686"
            className="flex items-center gap-0 w-12 hover:w-36 h-12 bg-slate-900/80 hover:bg-emerald-500 hover:text-white border-y border-r border-slate-800/80 hover:border-emerald-500 rounded-r-2xl overflow-hidden cursor-pointer shadow-lg transition-all duration-300 group"
          >
            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 text-slate-300 group-hover:text-white">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span className="opacity-0 group-hover:opacity-100 text-[10px] font-extrabold uppercase tracking-wider whitespace-nowrap transition-all duration-300 pr-4 pl-1">
              WhatsApp
            </span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/nikhil-dasar-resume.pdf"
            className="flex items-center gap-0 w-12 hover:w-44 h-12 bg-slate-900/80 hover:bg-yellow-400 hover:text-black border-y border-r border-slate-800/80 hover:border-yellow-400 rounded-r-2xl overflow-hidden cursor-pointer shadow-lg transition-all duration-300 group"
          >
            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 text-slate-300 group-hover:text-black">
              <FileText className="w-5 h-5" />
            </div>
            <span className="opacity-0 group-hover:opacity-100 text-[10px] font-extrabold uppercase tracking-wider whitespace-nowrap transition-all duration-300 pr-4 pl-1">
              Download CV
            </span>
          </a>
        </div>

        {/* Floating Right Side Menu (LinkedIn, GitHub, Twitter) - Expands Left */}
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4 font-sans">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/nikhil-dasar-baa2a5217/"
            className="flex flex-row-reverse items-center gap-0 w-12 hover:w-36 h-12 bg-slate-900/80 hover:bg-blue-600 hover:text-white border-y border-l border-slate-800/80 hover:border-blue-600 rounded-l-2xl overflow-hidden cursor-pointer shadow-lg transition-all duration-300 group"
          >
            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 text-slate-300 group-hover:text-white">
              <Linkedin className="w-5 h-5" />
            </div>
            <span className="opacity-0 group-hover:opacity-100 text-[10px] font-extrabold uppercase tracking-wider whitespace-nowrap transition-all duration-300 pl-4 pr-1">
              LinkedIn
            </span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kakashihatakesh6"
            className="flex flex-row-reverse items-center gap-0 w-12 hover:w-32 h-12 bg-slate-900/80 hover:bg-slate-700 hover:text-white border-y border-l border-slate-800/80 hover:border-slate-700 rounded-l-2xl overflow-hidden cursor-pointer shadow-lg transition-all duration-300 group"
          >
            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 text-slate-300 group-hover:text-white">
              <Github className="w-5 h-5" />
            </div>
            <span className="opacity-0 group-hover:opacity-100 text-[10px] font-extrabold uppercase tracking-wider whitespace-nowrap transition-all duration-300 pl-4 pr-1">
              GitHub
            </span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/Kakashish6"
            className="flex flex-row-reverse items-center gap-0 w-12 hover:w-32 h-12 bg-slate-900/80 hover:bg-sky-500 hover:text-white border-y border-l border-slate-800/80 hover:border-sky-500 rounded-l-2xl overflow-hidden cursor-pointer shadow-lg transition-all duration-300 group"
          >
            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 text-slate-300 group-hover:text-white">
              <Twitter className="w-5 h-5" />
            </div>
            <span className="opacity-0 group-hover:opacity-100 text-[10px] font-extrabold uppercase tracking-wider whitespace-nowrap transition-all duration-300 pl-4 pr-1">
              Twitter
            </span>
          </a>
        </div>
      </div>
      <VisitorCounter />
      <Chatbot />
    </div>

  );
}
