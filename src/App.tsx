import {Education, Experience, Hobbies, Learning, Profile, Projects, ResumeDownload, SEO, Skills} from './components';
import cvData from "./cv.json"

const App = () => {
    // PostHog is now configured in main.tsx with PostHogProvider
    
    // Resume download options
    const resumeOptions = [
        { name: 'Developer Resume', path: '/resumes/Pierre_Voltaire_developer_resume.pdf' },
        { name: 'DevOps Resume', path: '/resumes/Pierre_Voltaire_devops_resume.pdf' }
    ];

    return (
        <div className="min-h-screen bg-darkblue text-white">
            {/* SEO Enhancements */}
            <SEO />
            
            {/* PostHog Analytics is now configured in main.tsx */}
            
            <div className="py-12 px-6 flex justify-evenly flex-wrap bg-darkblue">
                {/* Left column - Profile, Skills, Education, Learning */}
                <div className="w-full lg:w-1/2 p-4">
                    <Profile profile={cvData.profile}/>
                    <Skills skills={cvData.skills}/>
                    <Education education={cvData.education}/>
                    <Learning learning={cvData.learning}/>
                </div>
                
                {/* Right column - Experience and Hobbies */}
                <div className="w-full lg:w-1/2 p-4">
                    <Experience experiences={cvData.experiences}/>
                    <Hobbies hobbies={cvData.hobbies}/>
                </div>
                
                {/* Full width section - Projects and Resume Download */}
                <div className="w-full p-4">
                    <Projects projects={cvData.projects}/>
                    <ResumeDownload resumeOptions={resumeOptions} />
                </div>
            </div>
        </div>
    );
}
export default App;
