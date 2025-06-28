import {Education, Experience, Hobbies, Learning, Profile, Projects, ResumeDownload, SEO, Skills, Certifications} from './components';
import ThemeToggle from './components/ThemeToggle';
import cvData from "./cv.json"

const App = () => {    
    const resumeOptions = [
        { name: 'DevOps Resume', path: '/resumes/Pierre_Voltaire_devops_resume.pdf' },
        { name: 'Developer Resume', path: '/resumes/Pierre_Voltaire_developer_resume.pdf' }
    ];

    return (
        <div className="min-h-screen bg-darkblue text-white relative">
            <SEO />
            <ThemeToggle />
            
            {/* Skip navigation for keyboard users */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-white"
            >
                Skip to main content
            </a>
                        
            <main id="main-content" className="py-12 px-6 flex justify-evenly flex-wrap bg-darkblue">
                <section aria-labelledby="personal-info" className="w-full lg:w-1/2 p-4">
                    <h2 id="personal-info" className="sr-only">Personal Information</h2>
                    <Profile profile={cvData.profile}/>
                    <Skills skills={cvData.skills}/>
                    <Certifications certifications={cvData.skills.Certifications}/>
                    <Education education={cvData.education}/>
                    <Learning learning={cvData.learning}/>
                </section>
                
                <section aria-labelledby="professional-info" className="w-full lg:w-1/2 p-4">
                    <h2 id="professional-info" className="sr-only">Professional Experience</h2>
                    <Experience experiences={cvData.experiences}/>
                    <Hobbies hobbies={cvData.hobbies}/>
                </section>
                
                <section aria-labelledby="projects-and-downloads" className="w-full p-4">
                    <h2 id="projects-and-downloads" className="sr-only">Projects and Downloads</h2>
                    <Projects projects={cvData.projects}/>
                    <ResumeDownload resumeOptions={resumeOptions} />
                </section>
            </main>
        </div>
    );
}

export default App;