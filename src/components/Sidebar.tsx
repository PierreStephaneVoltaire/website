import SectionLabel from './SectionLabel';
import {categoryToTagClass} from '../lib/skillColors';

interface Certification {
    name: string;
    issuer: string;
    date: string;
}

interface EducationItem {
    school: string;
    degree: string;
    dates: string;
}

interface ProfileLink {
    name: string;
    url: string;
    icon?: string;
}

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

interface SidebarProps {
    about: string;
    links: ProfileLink[];
    certifications: Certification[];
    education: EducationItem[];
    learning: string[];
    skills: SkillsData;
}

/**
 * A certification badge text + class. A date containing "Progress" (or the
 * sentinel value "In Progress") is treated as not-yet-active; everything else
 * is shown as active. The check is intentionally case-insensitive.
 */
const certStatus = (date: string): { text: string; className: string } => {
    const isProgress = /in\s*progress/i.test(date);
    if (isProgress) {
        return {text: '\u2B22 in_progress', className: 'cert-badge badge-wip'};
    }
    return {text: '\u2713 active', className: 'cert-badge badge-ok'};
};

/** Friendly name for the category sub-header, e.g. "Languages" -> "--languages" */
const slugifyCategory = (category: string): string =>
    '--' + category.toLowerCase().replace(/[^a-z0-9]+/g, '-');

const isSkillItem = (item: SkillItem | CertificationItem): item is SkillItem =>
    'icon' in item;

const Sidebar = ({about, links, certifications, education, learning, skills}: SidebarProps) => {
    // Filter the skills grid the same way Skills.tsx does, so we can render it
    // directly inside the sidebar (the certifications category is shown as its
    // own block a bit further down).
    const skillEntries = Object.entries(skills).filter(([category]) => category !== 'Certifications');

    return (
        <aside className="sidebar" aria-label="Profile summary">
            <div>
                <SectionLabel label="about_me" id="about-lbl" />
                <p className="about-text" id="about-text">{about}</p>
            </div>

            <div>
                <SectionLabel label="contact" />
                <p className="contact-text">
                    {links.map((link, i) => (
                        <span key={link.name}>
                            {i > 0 && <span className="contact-divider" aria-hidden="true"> \u00B7 </span>}
                            <a
                                className="contact-link"
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${link.name} (opens in new window)`}
                            >
                                {link.name}
                            </a>
                        </span>
                    ))}
                    <br />
                    Responses within 48 hours
                </p>
            </div>

            {skillEntries.length > 0 && (
                <div>
                    <SectionLabel label="skills_and_tools" id="skills-heading" />
                    <div className="skills-grid">
                        {skillEntries.map(([category, items]) => (
                            <div key={category} className="sk-block">
                                <div className="sk-cat">{slugifyCategory(category)}</div>
                                <div className="sk-tags">
                                    {items.map((item, i) => {
                                        if (!isSkillItem(item)) return null;
                                        return (
                                            <span key={i} className={`tag ${categoryToTagClass(category)}`}>
                                                {item.name.toLowerCase()}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {certifications.length > 0 && (
                <div>
                    <SectionLabel label="certifications" />
                    <div className="certs">
                        {certifications.map((cert, idx) => {
                            const badge = certStatus(cert.date);
                            return (
                                <div key={idx} className="cert-card">
                                    <div className="cert-name">{cert.name}</div>
                                    <div className="cert-meta">{cert.issuer}</div>
                                    <div className="cert-meta">{cert.date}</div>
                                    <div className={badge.className}>{badge.text}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {education.length > 0 && (
                <div>
                    <SectionLabel label="education" />
                    <div className="edu-list">
                        {education.map((edu, idx) => (
                            <div key={idx}>
                                <div className="edu-deg">{edu.degree}</div>
                                <div className="edu-school">{edu.school}</div>
                                <div className="edu-yr">{edu.dates}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {learning.length > 0 && (
                <div>
                    <SectionLabel label="currently_learning" />
                    <div className="learn-list">
                        {learning.map((item, idx) => (
                            <div key={idx} className="learn-item">{item}</div>
                        ))}
                    </div>
                </div>
            )}
        </aside>
    );
};

export default Sidebar;
