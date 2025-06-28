interface SkillItem {
    icon: string;
    name: string;
}

interface CertificationItem {
    name: string;
    issuer: string;
    date: string;
}

interface SkillsData {
    [category: string]: SkillItem[] | CertificationItem[];
}

interface SkillsSectionProps {
    skills: SkillsData;
}

const Skills = ({skills}: SkillsSectionProps) => {
    const skillsEntries = Object.entries(skills).filter(([category]) => category !== 'Certifications');
    
    return (
        <section aria-labelledby="skills-heading">
            <div className="mt-6 space-y-4">
                <h3 id="skills-heading" className="text-white text-2xl font-bold">Skills & Tools</h3>

                {skillsEntries.map(([category, items], idx) => (
                    <div key={idx}>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <h4 className="text-white font-semibold">{category}:</h4>

                            {items.map((item, i) => {
                                const isSkillItem = (item: SkillItem | CertificationItem): item is SkillItem => 
                                    'icon' in item;
                                
                                if (isSkillItem(item)) {
                                    return (
                                        <span key={i}
                                              className="pill font-semibold flex items-center">
                                            <img 
                                                src={item.icon} 
                                                alt={`${item.name} technology icon`} 
                                                className="w-5 h-5 mr-2"
                                            />
                                            {item.name}
                                        </span>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;