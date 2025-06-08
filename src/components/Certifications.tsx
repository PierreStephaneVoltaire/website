// Component for displaying certifications

interface Certification {
    name: string;
    issuer: string;
    date: string;
}

interface CertificationsSectionProps {
    certifications: Certification[];
}

const Certifications = ({certifications}: CertificationsSectionProps) => (
    <section className="mt-6 space-y-4">
        <h3 className="text-white text-2xl font-bold">Certifications</h3>
        <ul className="mt-6 space-y-4">
            {certifications.map((cert, idx) => (
                <li key={idx} className="text-gray-300">
                    <div className="text-white">{cert.name}</div>
                    <div>Issued by: {cert.issuer}</div>
                    <div>{cert.date}</div>
                </li>
            ))}
        </ul>
    </section>
);

export default Certifications;
