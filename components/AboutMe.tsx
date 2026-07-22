import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Skills from './Skills'
import { Brain, GraduationCap, FileText, Calendar, MapPin, Download, ExternalLink, Award } from 'lucide-react'

const AboutMe = () => {
    return (
        <div className="mt-[5rem] h-[auto] w-full max-w-[360px] md:max-w-[720px] flex flex-col" id="about">
            <div 
                className="stroke-yellow-300 text-[2.2rem] xs:text-[2.8rem] sm:text-[4rem] md:text-[6rem] font-extrabold z-0 opacity-80 text-transparent select-none leading-none mb-6 whitespace-nowrap" 
                style={{ strokeWidth: "1.5px", WebkitTextStrokeWidth: "1.9px", WebkitTextStrokeColor: "yellow" }}
            >
                {"<"}About Me {"/>"}
            </div>

            <div className="w-full mt-6 bg-slate-900/20 backdrop-blur-md border border-slate-800/80 rounded-3xl p-5 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden" >
                {/* Glowing ambient dots */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-yellow-400/5 rounded-full blur-[60px] pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-500/5 rounded-full blur-[60px] pointer-events-none" />

                <Tabs defaultValue="skills" className="w-full">
                    {/* Premium tab navigation list */}
                    <TabsList className="flex bg-slate-950/60 p-1 rounded-2xl border border-slate-800/80 w-full mb-8 h-auto gap-1 text-slate-400">
                        <TabsTrigger 
                            value="skills" 
                            className="flex-1 flex items-center justify-center gap-2 py-3 text-xs md:text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-300 data-[state=active]:bg-yellow-400 data-[state=active]:text-black text-slate-400 hover:text-slate-200"
                        >
                            <Brain className="w-4 h-4" />
                            <span>Skills</span>
                        </TabsTrigger>
                        <TabsTrigger 
                            value="education" 
                            className="flex-1 flex items-center justify-center gap-2 py-3 text-xs md:text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-300 data-[state=active]:bg-yellow-400 data-[state=active]:text-black text-slate-400 hover:text-slate-200"
                        >
                            <GraduationCap className="w-4 h-4" />
                            <span>Education</span>
                        </TabsTrigger>
                        <TabsTrigger 
                            value="resume" 
                            className="flex-1 flex items-center justify-center gap-2 py-3 text-xs md:text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-300 data-[state=active]:bg-yellow-400 data-[state=active]:text-black text-slate-400 hover:text-slate-200"
                        >
                            <FileText className="w-4 h-4" />
                            <span>Resume</span>
                        </TabsTrigger>
                    </TabsList>

                    {/* Skills tab content */}
                    <TabsContent value="skills" className="outline-none">
                        <div className="flex flex-wrap justify-center gap-0.5 m-auto">
                            <Skills />
                        </div>
                    </TabsContent>

                    {/* Education tab content */}
                    <TabsContent value="education" className="outline-none">
                        <div className="flex justify-center p-2">
                            <div className="relative border-l border-slate-800 ml-4 md:ml-6 pl-6 md:pl-8 space-y-8 w-full max-w-xl py-2">
                                {/* Timeline Dot */}
                                <div className="absolute -left-1.5 top-2.5 w-3 h-3 rounded-full bg-yellow-400 border border-slate-900 shadow-[0_0_10px_rgba(234,179,8,0.8)]" />
                                
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2.5">
                                        <span className="text-[10px] uppercase font-bold tracking-widest text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-0.5 rounded-full select-none flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            <span>2019 - 2023</span>
                                        </span>
                                        <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-0.5 rounded-full select-none flex items-center gap-1">
                                            <Award className="w-3 h-3" />
                                            {/* <span>8.03 CGPA</span> */}
                                            {/* <span>8.03 CGPA</span> */}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-lg md:text-xl font-extrabold text-slate-100 hover:text-yellow-400 transition-colors duration-300">
                                        Bachelor of Technology in Information Technology
                                    </h3>
                                    
                                    <div className="text-slate-400 text-xs flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 font-semibold">
                                        <span className="flex items-center gap-1 text-slate-300">
                                            <GraduationCap className="w-3.5 h-3.5" />
                                            <span>Government Engineering College</span>
                                        </span>
                                        <span className="hidden sm:inline text-slate-600">|</span>
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-3.5 h-3.5" />
                                            {/* <span>Bilaspur, Chhattisgarh</span> */}
                                            <span>Bilaspur</span>
                                        </span>
                                    </div>
                                    
                                    <p className="text-xs text-slate-400 leading-relaxed pt-2">
                                        Built a solid foundation in computer science and core IT disciplines. Focus areas included Data Structures & Algorithms, Database Management Systems (DBMS), Software Engineering, and Web Technologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    {/* Resume tab content */}
                    <TabsContent value="resume" className="outline-none">
                        <div className="flex flex-col items-center p-2 w-full">
                            {/* Action Buttons header */}
                            <div className="flex justify-between items-center w-full mb-6">
                                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 select-none">
                                    Curriculum Vitae
                                </span>
                                <a 
                                    href="/nikhil-dasar-resume.pdf" 
                                    download={true} 
                                    className="flex items-center gap-1.5 px-4 py-2.5 bg-yellow-400 hover:bg-yellow-350 text-black font-extrabold text-xs rounded-xl shadow-lg shadow-yellow-400/10 active:scale-[0.98] transition-all duration-200 cursor-pointer"
                                >
                                    <Download className="w-3.5 h-3.5" />
                                    <span>Download Resume</span>
                                </a>
                            </div>

                            {/* Direct Clean Image Display */}
                            <div className="w-full flex justify-center">
                                <a 
                                    href="/nikhil-dasar-resume.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-full cursor-pointer group/resume block select-none"
                                >
                                    <img 
                                        src="/nikhil-dasar-resume.jpg" 
                                        alt="Nikhil Dasar Resume" 
                                        className="w-full h-auto rounded-2xl border border-slate-800/80 bg-slate-950/20 shadow-lg group-hover/resume:border-yellow-400/30 transition-all duration-300" 
                                    />
                                </a>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default AboutMe