interface SkillsSectionProps {
    skills: { [category: string]: { icon: string; name: string }[] };
}

const Skills = ({skills}: SkillsSectionProps) => (
    <section>
        <div className="mt-6 space-y-4">
            <h3 className="text-white text-2xl font-bold">Skills & Tools</h3>

            {Object.entries(skills).map(([category, items], idx) => (
                <div key={idx}>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <h4 className="text-white font-semibold">{category}:</h4>

                        {items.map((item, i) => (
                            <span key={i}
                                  className="bg-white text-black font-semibold px-3 py-0.5 rounded-full flex items-center">
                <img src={item.icon} alt={item.name} className="w-5 h-5 mr-2"/>
                                {item.name}
              </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Skills;
