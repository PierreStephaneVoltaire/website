interface EducationSectionProps {
    education: {
        school: string;
        degree: string;
        dates: string;
    }[];
}

const Education = ({education}: EducationSectionProps) => (
    <section className="mt-6 space-y-4  ">
        <h3 className="text-white text-2xl font-bold">Education</h3>
        <ul className="mt-6 space-y-4">
            {education.map((edu, idx) => (
                <li key={idx} className="text-gray-300">
                    <div className="text-white font-bold">{edu.degree} at {edu.school}</div>
                    <div>{edu.dates}</div>
                </li>
            ))}
        </ul>
    </section>
);

export default Education;
