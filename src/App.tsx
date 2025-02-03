import {Education, Experience, Learning, Profile, Projects, Skills} from './components';
import cvData from "./cv.json"

const App = () => {


    return (
        <div className="min-h-screen bg-darkblue text-white">
            <div className="py-12 px-6  flex justify-evenly flex-wrap bg-darkblue">
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
                </div>
            </div>
        </div>
    );
}
export default App;
