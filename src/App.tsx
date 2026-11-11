import {Header, Sidebar, Experience, SEO} from './components';
import cvData from './cv.json';
import SectionLabel from './components/SectionLabel';

interface SkillEntry {
    name: string;
    icon?: string;
    issuer?: string;
    date?: string;
}

interface CvDataWithOptionalSections {
    skills?: Record<string, SkillEntry[]>;
    learning?: string[];
}

const data = cvData as typeof cvData & CvDataWithOptionalSections;

const App = () => {
    const skills = data.skills ?? {};
    const certifications = (skills.Certifications ?? []).filter(
        (item): item is SkillEntry & { issuer: string; date: string } =>
            typeof item.issuer === 'string' && typeof item.date === 'string',
    );

    return (
        <div>
            <SEO />

            {/* Skip-to-content link for keyboard users */}
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>

            <Header
                name={data.profile.name}
                jobTitle={data.profile.jobTitle}
                status={data.profile.status}
                links={data.profile.links}
            />

            <div className="layout">
                <Sidebar
                    about={data.profile.about}
                    certifications={certifications}
                    education={data.education}
                    learning={data.learning ?? []}
                    skills={skills}
                />

                <main id="main-content" className="main">
                    <Experience experiences={data.experiences} />
                    <section className="main-section" aria-labelledby="projects-heading">
                        <SectionLabel label="projects" variant="main" id="projects-heading" />
                        <h3 className="t-title">NoLift</h3>
                        <p>A powerlifting meet-prep portal for tracking training, analyzing fatigue and progress, and exploring AI-assisted program reviews. Built with React, Express, typed HTTP and MCP services, and AWS storage, deployed on k3s with Terraform.</p>
                        <p><a href="https://dev.nolift.training/">Visit NoLift</a> · <a href="https://github.com/PierreStephaneVoltaire/ai-powerlifting">GitHub</a></p>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default App;
