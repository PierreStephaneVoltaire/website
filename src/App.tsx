import {Education, Experience, Learning, Profile, Projects, ResumeDownload, Skills} from './components';
import cvData from "./cv.json"

const App = () => {
    // Resume download options
    const resumeOptions = [
        { name: 'Developer Resume', path: '/resumes/Pierre_Voltaire_developer_resume.pdf' },
        { name: 'DevOps Resume', path: '/resumes/Pierre_Voltaire_devops_resume.pdf' }
    ];

    return (
        <div className="min-h-screen bg-darkblue text-white">
            <div className="py-12 px-6 flex justify-evenly flex-wrap bg-darkblue">
                <div className="w-full lg:w-1/2 p-4">
                    <Profile profile={cvData.profile}/>
                    <Skills skills={cvData.skills}/>
                    <Education education={cvData.education}/>
                    <Learning learning={cvData.learning}/>
                </div>
                <div className="w-full lg:w-1/2 p-4">
                    <Experience experiences={cvData.experiences}/>
                </div>
                <div className="w-full p-4">
                    <Projects projects={cvData.projects}/>
                    {/* <ResumeDownload resumeOptions={resumeOptions} /> */}
                </div>
            </div>
        </div>
    );
}
export default App;
