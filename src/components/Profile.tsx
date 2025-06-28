interface ProfileSectionProps {
    profile: {
        name: string;
        jobTitle: string;
        about: string;
        picture: string;
        links: { name: string; url: string, icon: string }[];
    };
}

const Profile = ({profile}: ProfileSectionProps) => (
    <div className="flex justify-evenly flex-col">
        <div className="flex flex-col justify-evenly">
            <h2 className="text-white text-2xl font-bold mt-4">{profile.name}</h2>
            <p className="text-white text-xl pt-4">{profile.jobTitle}</p>
            
            {/* Fix social links with proper accessibility */}
            <div className="flex gap-4 mt-4" role="list" aria-label="Social media links">
                {profile.links.map((link, idx) => (
                    <a 
                        key={idx}
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all"
                        aria-label={`${link.name} profile (opens in new window)`}
                        role="listitem"
                    >
                        <i className={`fa-brands ${link.icon} text-2xl relative z-10`} aria-hidden="true"></i>
                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    </a>
                ))}
            </div>
        </div>

        <div className="flex flex-col justify-evenly py-5">
            <h3 className="text-white text-2xl font-bold">About Me</h3>
            <p className="text-gray-300 mt-2 whitespace-pre-wrap">{profile.about}</p>
        </div>
        
        <div className="flex flex-col justify-evenly py-3 border-t border-gray-700">
            <h3 className="text-white text-xl font-bold">Contact Policy</h3>
            <p className="text-gray-300 mt-2">
                <span className="employment-status bg-blue-600 text-white px-2 py-1 rounded-md text-sm mr-2">
                    Employed but seeking new opportunities
                </span>
                <br className="block md:hidden" />
                <span className="mt-2 md:mt-0 inline-block">
                    Email, LinkedIn direct message, or text responses within 48 hours.
                </span>
            </p>
        </div>
    </div>
);

export default Profile;