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
    // Filter out the Certifications section
    const skillsEntries = Object.entries(skills).filter(([category]) => category !== 'Certifications');
    
    return (
        <section>
            <div className="mt-6 space-y-4">
                <h3 className="text-white text-2xl font-bold">Skills & Tools</h3>

                {skillsEntries.map(([category, items], idx) => (
                    <div key={idx}>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <h4 className="text-white font-semibold">{category}:</h4>

                            {items.map((item, i) => {
                                // Type guard to check if item has icon property (SkillItem)
                                const isSkillItem = (item: SkillItem | CertificationItem): item is SkillItem => 
                                    'icon' in item;
                                
                                if (isSkillItem(item)) {
                                    return (
                                        <span key={i}
                                              className="pill bg-white text-black font-semibold px-3 py-0.5 rounded-full flex items-center">
                                            <img src={item.icon} alt={item.name} className="w-5 h-5 mr-2"/>
                                            {item.name}
                                        </span>
                                    );
                                }
                                return null; // Should never happen as Certifications are filtered out
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;