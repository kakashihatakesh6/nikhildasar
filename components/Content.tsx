import AboutMe from './AboutMe';
import Work from './Work';
import Contact from './Contact';
import GitHubCalendarComponent from './GitHubCalendar';
import TypeWriterComponent from './TypeWriterComponent';
import FramerMotionComponent from './FramerMotionComponent';
import Footer from './Footer';

const Body = () => {
    return (
        <div className="w-full h-auto" >
            <div className='p-3 px-5 mt-12 font-bold text-xl text-color' >
                Hi,I'm
            </div>
                <FramerMotionComponent/>
                <TypeWriterComponent/>
                <div className=' max-w-[720px] text-slate-200 px-5 p-2 desc-color  text-[13px] md:text-[15px] my-4  ' >
                    {/* A Full-Stack Developer expertise in NextJS/ReactJS/NodeJS.I always aim for writing a clean and efficient code, always eager to learn new technologies and implement in my projects to enhance performance and deliver a quality product. */}
                    Full-Stack & AI Engineer specializing in Go, Node.js, Next.js, AWS, LangChain, LangGraph, and RAG. Passionate about building scalable, high-performance applications with clean architecture and modern AI technologies.
                </div>
                <GitHubCalendarComponent/>
                <AboutMe />
                <Work/>
                <Contact />
                <Footer/>
        </div>
    )
}

export default Body 