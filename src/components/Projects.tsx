interface ProjectsSectionProps {
    projects: {
        name: string;
        image?: { url: string };
        description: string;
        url?: string;
        github: string;
    }[];
}

const Projects = ({projects}: ProjectsSectionProps) => (

    <section className="mt-6 space-y-4">
        <h3 className="text-white text-2xl font-bold">Projects</h3>
        <div className="grid md:grid-cols-4 gap-8 mt-6">
            {projects.map((project, idx) => (
                <div key={idx} className="bg-gray-800 rounded-lg p-6">

                    {project.image?.url &&
                        <img src={project.image.url} alt={project.name} className="w-full rounded-md mb-4"/>}

                    <h4 className="text-white text-xl font-bold">{project.name}</h4>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex gap-4">
                        {project.url && <a href={project.url} target="_blank" className="text-white">Visit Website</a>}
                        <a href={project.github} target="_blank" className="text-white">GitHub</a>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Projects;
