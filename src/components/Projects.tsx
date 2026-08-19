import ProjectArt from './ProjectArt';
import SectionLabel from './SectionLabel';

interface Project {
    name: string;
    image?: { url: string };
    description: string;
    url?: string;
    github: string;
}

interface ProjectsSectionProps {
    projects: Project[];
}

const Projects = ({projects}: ProjectsSectionProps) => (
    <section className="main-section" aria-labelledby="projects-heading">
        <SectionLabel label="current_projects" variant="main" id="projects-heading" />
        <div className="p-grid">
            {projects.map((project, idx) => (
                <article key={idx} className="p-card">
                    <div className="p-art">
                        <ProjectArt index={idx} name={project.name} />
                    </div>

                    <div className="p-body">
                        <h3 className="p-name">{project.name}</h3>
                        <p className="p-desc">{project.description}</p>
                    </div>

                    <div className="p-foot">
                        <span className="p-tech">// open_source</span>
                        {project.github && (
                            <a
                                className="p-gh"
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${project.name} on GitHub (opens in new window)`}
                            >
                                GitHub ↗
                            </a>
                        )}
                    </div>
                </article>
            ))}
        </div>
    </section>
);

export default Projects;
