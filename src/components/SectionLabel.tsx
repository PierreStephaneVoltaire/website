interface SectionLabelProps {
    /** The text shown after the `$ ` prefix. Spaces become underscores in display. */
    label: string;
    /** Use the larger main-section style (`m-lbl`) instead of sidebar (`s-lbl`). */
    variant?: 'sidebar' | 'main';
    /** Optional id to link aria-labelledby on the section. */
    id?: string;
}

/**
 * Section header in the terminal style:
 *   $ --label_name ──────────
 * Used in both the sidebar and the main content.
 */
const SectionLabel = ({label, variant = 'sidebar', id}: SectionLabelProps) => {
    const className = variant === 'main' ? 'm-lbl' : 's-lbl';
    return (
        <div className={className} id={id}>
            {/* The "$ " prefix and trailing line are added by the CSS ::before / ::after */}
            {label}
        </div>
    );
};

export default SectionLabel;