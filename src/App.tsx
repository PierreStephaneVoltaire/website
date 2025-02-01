import React from "react";
import {Education, Experience, Learning, Profile, Projects, Skills} from './components';
import cvData from "./cv.json"

const App = () => {


    return (
        <div className="min-h-screen bg-darkblue text-white">
            <div className="py-12 px-6 grid md:grid-cols-12 sm:grid-cols-6 bg-darkblue">
                <div className="col-span-6">
                    <Profile profile={cvData.profile}/>
                    <Skills skills={cvData.skills}/>
                    <Education education={cvData.education}/>
                    <Learning learning={cvData.learning}/>

                </div>
                <div className="col-span-6">
                    <Experience experiences={cvData.experiences}/>
                </div>
                <div className="col-span-12">
                    <Projects projects={cvData.projects}/>
                </div>
            </div>


        </div>
    );
}
export default App;
