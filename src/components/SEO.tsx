import {useEffect} from 'react';
import cvData from '../cv.json';

interface SkillEntry {
    name: string;
}

interface CvDataWithOptionalSkills {
    skills?: Record<string, SkillEntry[]>;
}

const SEO = () => {
    const data = cvData as typeof cvData & CvDataWithOptionalSkills;

    useEffect(() => {
        // Create JSON-LD structured data for Person
        const personSchema = {
            '@context': 'https://schema.org',
            '@type': 'Person',
            'name': data.profile.name,
            'jobTitle': data.profile.jobTitle,
            'description': data.profile.about,
            'url': 'https://psvoltaire.ca',
            'sameAs': data.profile.links.map(link => link.url),
            'knowsAbout': Object.values(data.skills ?? {}).flat().map(skill => skill.name),
            'alumniOf': data.education.map(edu => ({
                '@type': 'EducationalOrganization',
                'name': edu.school,
                'sameAs': `https://www.google.com/search?q=${encodeURIComponent(edu.school)}`
            })),
            'workExperience': data.experiences.map(exp => ({
                '@type': 'OrganizationRole',
                'roleName': exp.position,
                'startDate': exp.startDate,
                'endDate': exp.endDate === 'Present' ? null : exp.endDate,
                'organizationName': exp.name
            }))
        };

        // Add JSON-LD to document head
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(personSchema);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, [data]);

    return null; // This component doesn't render anything
};

export default SEO;
