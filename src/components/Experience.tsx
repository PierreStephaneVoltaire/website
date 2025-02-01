// ExperienceSection.tsx
interface ExperienceSectionProps {
    experiences: {
        name: string;
        position: string;
        startDate: string;
        endDate: string;
        summary: string[];
    }[];
}

const Experience = ({experiences}: ExperienceSectionProps) => (
    <div className="mt-6 md:mt-0">
        <h3 className="text-white text-2xl font-bold md:text-center md:p-6">Experience</h3>
        <div className="space-y-4 mt-4">
            {experiences.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                    <div className="grid grid-cols-6 gap-4 text-white">
                        <span className="col-span-2">{exp.startDate} - {exp.endDate}</span>
                        <span className="col-span-4 text-xl">{exp.position} @ {exp.name}</span>
                    </div>
                    <ul className="list-disc pl-8 pb-2 pt-2 text-gray-300">
                        {exp.summary.map((summary, i) => (
                            <li key={i} className="pl-8">{summary}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);

export default Experience;
