// ExperienceSection.tsx
import ReactMarkdown from 'react-markdown';

interface Experience {
    name: string;
    position: string;
    startDate: string;
    endDate: string;
    summary: string[];
}

interface ExperienceSectionProps {
    experiences: Experience[];
}

const Experience = ({experiences}: ExperienceSectionProps) => (
    <div className="mt-6 md:mt-0">
        <h3 className="text-white text-2xl font-bold text-left lg:text-center">Experience</h3>
        <div className="space-y-4 mt-4">
            {experiences.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                    <div className="flex flex-col items-center text-white md:grid md:grid-cols-6 md:gap-4 md:text-left md:items-start">
                        <span className="mb-1 md:mb-0 md:col-span-2 md:text-left w-full">{exp.startDate} - {exp.endDate}</span>
                        <span className="text-xl md:col-span-4 md:text-left  w-full">
                          {exp.position} @ <br className="block md:hidden" />{exp.name}
                        </span>
                    </div>
                    <ul className="list-disc pl-4 pb-2 pt-2 text-gray-300">
                        {exp.summary.map((summary, i) => (
                            <li key={i}>
                                <ReactMarkdown>{summary}</ReactMarkdown>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);

export default Experience;
