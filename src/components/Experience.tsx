
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
    <section className="mt-6 md:mt-0" aria-labelledby="experience-heading">
        <h3 id="experience-heading" className="text-white text-2xl font-bold text-left lg:text-center">Experience</h3>
        <div className="space-y-4 mt-4">
            {experiences.map((exp, idx) => (
                <article key={idx} className="space-y-2">
                    <div className="flex flex-col items-center text-white md:grid md:grid-cols-6 md:gap-4 md:text-left md:items-start">
                        <time className="mb-1 md:mb-0 md:col-span-2 md:text-left w-full">
                            {exp.startDate} - {exp.endDate}
                        </time>
                        <div className="text-xl md:col-span-4 md:text-left w-full">
                          <h4>{exp.position} @ <br className="block md:hidden" />{exp.name}</h4>
                        </div>
                    </div>
                    <ul className="list-disc pl-4 pb-2 pt-2 text-gray-300" role="list">
                        {exp.summary.map((summary, i) => (
                            <li key={i} role="listitem">
                                <ReactMarkdown>{summary}</ReactMarkdown>
                            </li>
                        ))}
                    </ul>
                </article>
            ))}
        </div>
    </section>
);

export default Experience;