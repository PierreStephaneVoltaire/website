interface ProjectArtProps {
    /** Zero-based index of the project. Picks one of 3 art variants. */
    index: number;
    /** Optional override for the project name (used to pick a fitting art). */
    name?: string;
}

/**
 * Decorative SVG art shown at the top of each project card.
 * Picks a fitting variant from the project name (k8s/network, web, CLI/terminal)
 * and falls back to cycling by index.
 */
const ProjectArt = ({index, name}: ProjectArtProps) => {
    const lower = (name ?? '').toLowerCase();
    let variant = index % 3;
    if (/(kuber|argo|crossplane|cloud|infra|devops|eks|aws|docker)/.test(lower)) variant = 0;
    else if (/(website|portfolio|web|site|page|app)/.test(lower)) variant = 1;
    else if (/(promoter|cli|secret|vault|tool)/.test(lower)) variant = 2;

    if (variant === 0) {
        return (
            <svg viewBox="0 0 300 96" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                <circle cx="150" cy="48" r="34" stroke="#38bdf8" strokeWidth="0.6" fill="none" opacity="0.28" />
                <circle cx="150" cy="48" r="20" stroke="#38bdf8" strokeWidth="0.4" fill="none" opacity="0.2" />
                <circle cx="150" cy="48" r="7" stroke="#38bdf8" strokeWidth="0.8" fill="none" opacity="0.4" />
                <circle cx="150" cy="48" r="2.5" fill="#38bdf8" opacity="0.5" />
                <circle cx="150" cy="14" r="2.5" fill="#38bdf8" opacity="0.4" />
                <circle cx="180" cy="66" r="2.5" fill="#38bdf8" opacity="0.4" />
                <circle cx="120" cy="66" r="2.5" fill="#38bdf8" opacity="0.4" />
                <line x1="150" y1="14" x2="150" y2="27" stroke="#38bdf8" strokeWidth="0.4" opacity="0.18" />
                <line x1="180" y1="66" x2="165" y2="57" stroke="#38bdf8" strokeWidth="0.4" opacity="0.18" />
                <line x1="120" y1="66" x2="135" y2="57" stroke="#38bdf8" strokeWidth="0.4" opacity="0.18" />
            </svg>
        );
    }

    if (variant === 1) {
        return (
            <svg viewBox="0 0 300 96" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                <rect x="55" y="16" width="190" height="64" rx="4" stroke="#c084fc" strokeWidth="0.6" fill="rgba(192,132,252,0.03)" opacity="0.65" />
                <line x1="55" y1="29" x2="245" y2="29" stroke="#c084fc" strokeWidth="0.4" opacity="0.28" />
                <circle cx="67" cy="23" r="2.5" fill="#c084fc" opacity="0.2" />
                <circle cx="76" cy="23" r="2.5" fill="#c084fc" opacity="0.2" />
                <circle cx="85" cy="23" r="2.5" fill="#c084fc" opacity="0.2" />
                <rect x="68" y="38" width="68" height="3.5" rx="1.5" fill="#c084fc" opacity="0.2" />
                <rect x="68" y="47" width="46" height="2.5" rx="1.2" fill="#c084fc" opacity="0.12" />
                <rect x="68" y="56" width="54" height="2.5" rx="1.2" fill="#c084fc" opacity="0.1" />
                <rect x="68" y="65" width="34" height="2.5" rx="1.2" fill="#c084fc" opacity="0.07" />
                <rect x="162" y="36" width="60" height="40" rx="3" stroke="#c084fc" strokeWidth="0.5" fill="rgba(192,132,252,0.04)" opacity="0.3" />
            </svg>
        );
    }

    // Terminal / CLI variant
    return (
        <svg viewBox="0 0 300 96" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <rect x="38" y="20" width="224" height="58" rx="4" stroke="#34d399" strokeWidth="0.6" fill="rgba(52,211,153,0.02)" opacity="0.55" />
            <text x="53" y="38" fontFamily="monospace" fontSize="8" fill="#34d399" opacity="0.5">$ vault-promoter promote</text>
            <text x="53" y="50" fontFamily="monospace" fontSize="8" fill="#34d399" opacity="0.35">  --env staging &#8594; prod</text>
            <text x="53" y="62" fontFamily="monospace" fontSize="8" fill="#34d399" opacity="0.25">  Promoting 12 secrets...</text>
            <text x="53" y="72" fontFamily="monospace" fontSize="8" fill="#34d399" opacity="0.55">  &#10003; Done</text>
            <rect x="84" y="67" width="5" height="7" rx="1" fill="#34d399" opacity="0.6">
                <animate attributeName="opacity" values="0.6;0;0.6" dur="1.2s" repeatCount="indefinite" />
            </rect>
        </svg>
    );
};

export default ProjectArt;