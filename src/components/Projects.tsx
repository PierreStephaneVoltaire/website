interface ProjectsSectionProps {
    projects: {
        name: string;
        image?: {
            url: string;
        };
        description: string;
        url?: string;
        github: string;
    }[];
}

import cvData from '../cv.json';
import { RippleButton } from './index';

const formatDescription = (description: string) => {
    const techKeywords: string[] = [];
    
    Object.values(cvData.skills).forEach(skillCategory => {
        skillCategory.forEach(skill => {
            if (skill.name) {
                techKeywords.push(skill.name);
            }
        });
    });
    
    if (cvData.learning) {
        techKeywords.push(...cvData.learning);
    }
    
    techKeywords.push('CLI', 'GitHub actions', 'Go', 'Golang');
    
    const pattern = new RegExp(`\\b(${techKeywords.join('|')})\\b`, 'gi');
    return description.replace(pattern, '<strong>$1</strong>');
};

const Projects = ({projects}: ProjectsSectionProps) => (
    <section className="mt-6" aria-labelledby="projects-heading">
        <h3 id="projects-heading" className="text-white text-2xl font-bold">Current Projects</h3>
        <div className="flex flex-wrap justify-start gap-6 mt-4" role="list">
            {projects.map((project, idx) => (
                <article 
                    key={idx} 
                    className="bg-gray-800 rounded-lg p-6 mb-4 w-80 flex flex-col h-[400px]"
                    role="listitem"
                >
                    {project.image?.url && (
                        <img 
                            src={project.image.url} 
                            alt={`Screenshot of ${project.name} project interface`}
                            className="w-full rounded-md mb-4"
                        />
                    )}

                    <h4 className="text-white text-xl font-bold mb-3">{project.name}</h4>
                    <div 
                        className="text-gray-300 mb-4 flex-grow overflow-auto max-h-[180px]"
                        dangerouslySetInnerHTML={{ __html: formatDescription(project.description) }}
                    />
                    
                    <nav className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-gray-700" aria-label={`${project.name} project links`}>
                        {project.url && (
                            <RippleButton 
                                href={project.url} 
                                target="_blank" 
                                className="text-white font-semibold bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md transition-colors"
                                ariaLabel={`Visit ${project.name} website`}
                            >
                                Visit Website
                            </RippleButton>
                        )}
                        <RippleButton 
                            href={project.github} 
                            target="_blank" 
                            className="text-white font-semibold bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md transition-colors"
                            ariaLabel={`View ${project.name} source code on GitHub`}
                        >
                            GitHub
                        </RippleButton>
                    </nav>
                </article>
            ))}
        </div>
    </section>
);

export default Projects;