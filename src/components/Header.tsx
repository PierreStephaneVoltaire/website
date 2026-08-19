import SocialIcon from './SocialIcon';

interface ProfileLink {
    name: string;
    url: string;
    icon?: string;
}

interface HeaderProps {
    name: string;
    jobTitle: string;
    status?: string;
    links: ProfileLink[];
}

/**
 * Build the "~/slug" path shown next to the name. Derived from the job title
 * so the header is data-driven.
 */
const derivePath = (jobTitle: string): string => {
    const slug = jobTitle
        .toLowerCase()
        .replace(/&/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    return `~/${slug || 'engineer'}`;
};

const Header = ({name, jobTitle, status, links}: HeaderProps) => {
    const path = derivePath(jobTitle);

    return (
        <header className="site-header" role="banner">
            <div className="hdr-brand">
                <span className="hdr-name">{name}</span>
                <span className="hdr-cursor" aria-hidden="true" />
                <span className="hdr-path">{path}</span>
            </div>

            <div className="hdr-right">
                {status && (
                    <div className="hdr-status" role="status" aria-live="polite">
                        <div className="hdr-dot" aria-hidden="true" />
                        <span>{status}</span>
                    </div>
                )}

                <nav className="hdr-links" aria-label="Social links">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            className="hdr-link"
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={link.name}
                            aria-label={`${link.name} (opens in new window)`}
                        >
                            <SocialIcon name={link.name} />
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;