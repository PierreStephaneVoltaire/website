import {Header, Sidebar, Experience, SEO} from './components';
import cvData from './cv.json';

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
                </main>
            </div>
        </div>
    );
};

export default App;
