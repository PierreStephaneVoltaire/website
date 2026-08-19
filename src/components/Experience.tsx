import ReactMarkdown from 'react-markdown';
import SectionLabel from './SectionLabel';

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
    <section className="main-section" aria-labelledby="experience-heading">
        <SectionLabel label="experience" variant="main" id="experience-heading" />
        <div className="timeline">
            {experiences.map((exp, idx) => {
                const isCurrent = exp.endDate.toLowerCase() === 'present';
                const dateRange = `${exp.startDate} \u2013 ${exp.endDate}`;
                return (
                    <article
                        key={`${exp.name}-${idx}`}
                        className={`t-item${isCurrent ? ' current' : ''}`}
                    >
                        <div className="t-node" aria-hidden="true" />
                        <div>
                            <div className="t-date">{dateRange}</div>
                            <h3 className="t-title">{exp.position}</h3>
                            <div className="t-org">// {exp.name}</div>
                            <ul className="bullets">
                                {exp.summary.map((bullet, i) => (
                                    <li key={i}>
                                        <ReactMarkdown
                                            components={{
                                                p: ({children}) => <>{children}</>,
                                            }}
                                        >
                                            {bullet}
                                        </ReactMarkdown>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </article>
                );
            })}
        </div>
    </section>
);

export default Experience;
