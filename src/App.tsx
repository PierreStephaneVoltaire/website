import {Header, Sidebar, Experience, Projects, SEO} from './components';
import cvData from './cv.json';

const App = () => {
    return (
        <div>
            <SEO />

            {/* Skip-to-content link for keyboard users */}
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>

            <Header
                name={cvData.profile.name}
                jobTitle={cvData.profile.jobTitle}
                status={cvData.profile.status}
                links={cvData.profile.links}
            />

            <div className="layout">
                <Sidebar
                    about={cvData.profile.about}
                    links={cvData.profile.links}
                    certifications={cvData.skills.Certifications}
                    education={cvData.education}
                    learning={cvData.learning}
                    skills={cvData.skills}
                />

                <main id="main-content" className="main">
                    <Experience experiences={cvData.experiences} />
                    <Projects projects={cvData.projects} />
                </main>
            </div>
        </div>
    );
};

export default App;