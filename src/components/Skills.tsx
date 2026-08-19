import SectionLabel from './SectionLabel';
import {categoryToTagClass} from '../lib/skillColors';

interface SkillItem {
    icon?: string;
    name: string;
}

interface CertificationItem {
    name: string;
    issuer: string;
    date: string;
}

type SkillCategory = SkillItem[] | CertificationItem[];

interface SkillsData {
    [category: string]: SkillCategory;
}

interface SkillsProps {
    skills: SkillsData;
    /**
     * Where this block is rendered. `main` (default) shows the larger
     * m-lbl heading used in the right column; `sidebar` switches to the
     * smaller s-lbl so it sits naturally next to the other sidebar groups.
     */
    variant?: 'sidebar' | 'main';
    /** Optional id for the section (for aria-labelledby). */
    id?: string;
}

const slugifyCategory = (category: string): string =>
    '--' + category.toLowerCase().replace(/[^a-z0-9]+/g, '-');

const isSkillItem = (item: SkillItem | CertificationItem): item is SkillItem =>
    'icon' in item;

const Skills = ({skills, variant = 'main', id = 'skills-heading'}: SkillsProps) => {
    // The mockup shows skills only; certifications are surfaced in the sidebar.
    const entries = Object.entries(skills).filter(([category]) => category !== 'Certifications');
    const sectionClass = variant === 'main' ? 'main-section' : '';

    return (
        <section className={sectionClass} aria-labelledby={id}>
            <SectionLabel label="skills_and_tools" variant={variant} id={id} />
            <div className="skills-grid">
                {entries.map(([category, items]) => (
                    <div key={category} className="sk-block">
                        <div className="sk-cat">{slugifyCategory(category)}</div>
                        <div className="sk-tags">
                            {items.map((item, i) => {
                                if (!isSkillItem(item)) return null;
                                // Lowercase for visual consistency with the mockup
                                // where every tag reads in lowercase.
                                const label = item.name.toLowerCase();
                                return (
                                    <span key={i} className={`tag ${categoryToTagClass(category)}`}>
                                        {label}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
