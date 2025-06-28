import {useEffect} from 'react';
import cvData from '../cv.json';

const SEO = () => {
    useEffect(() => {
        // Create JSON-LD structured data for Person
        const personSchema = {
            '@context': 'https://schema.org',
            '@type': 'Person',
            'name': cvData.profile.name,
            'jobTitle': cvData.profile.jobTitle,
            'description': cvData.profile.about,
            'url': 'https://psvoltaire.ca',
            'sameAs': cvData.profile.links.map(link => link.url),
            'knowsAbout': Object.values(cvData.skills).flat().map(skill => skill.name),
            'alumniOf': cvData.education.map(edu => ({
                '@type': 'EducationalOrganization',
                'name': edu.school,
                'sameAs': `https://www.google.com/search?q=${encodeURIComponent(edu.school)}`
            })),
            'workExperience': cvData.experiences.map(exp => ({
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
    }, []);

    return null; // This component doesn't render anything
};

export default SEO;
