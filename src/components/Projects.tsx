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

// Import CV data to get skills
import cvData from '../cv.json';
import {RippleButton} from './index';

// Function to make technology keywords bold
const formatDescription = (description: string) => {
    // Extract all skill names from the CV data
    const techKeywords: string[] = [];

    // Loop through all skill categories
    Object.values(cvData.skills).forEach(skillCategory => {
        // Add each skill name to our keywords list
        skillCategory.forEach(skill => {
            if (skill.name) {
                techKeywords.push(skill.name);
            }
        });
    });

    // Add learning technologies too
    if (cvData.learning) {
        techKeywords.push(...cvData.learning);
    }

    // Add some common variations and additional terms
    techKeywords.push('CLI', 'GitHub actions', 'Go', 'Golang');

    // Create a regex pattern that matches any of the keywords (case insensitive)
    const pattern = new RegExp(`\\b(${techKeywords.join('|')})\\b`, 'gi');

    // Replace matches with bold version
    return description.replace(pattern, '<strong>$1</strong>');
};

const Projects = ({projects}: ProjectsSectionProps) => (
    <section className="mt-6">
        <h3 className="text-white text-2xl font-bold">Current Projects</h3>
        <div className="flex flex-wrap justify-start gap-6 mt-4">
            {projects.map((project, idx) => (
                <div key={idx} className="bg-gray-800 rounded-lg p-6 mb-4 w-80 flex flex-col h-[400px]">
                    {project.image?.url && (
                        <img src={project.image.url} alt={project.name} className="w-full rounded-md mb-4"/>
                    )}

                    <h4 className="text-white text-xl font-bold mb-3">{project.name}</h4>
                    <p
                        className="text-gray-300 mb-4 flex-grow overflow-auto max-h-[180px]"
                        dangerouslySetInnerHTML={{__html: formatDescription(project.description)}}
                    />

                    <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-gray-700">
                        {project.url && (
                            <RippleButton
                                href={project.url}
                                target="_blank"
                                className="text-white font-semibold bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md transition-colors"
                            >
                                Visit Website
                            </RippleButton>
                        )}
                        <RippleButton
                            href={project.github}
                            target="_blank"
                            className="text-white font-semibold bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md transition-colors"
                        >
                            GitHub
                        </RippleButton>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Projects;
