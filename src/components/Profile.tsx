// ProfileSection.tsx
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
    <div className=" flex justify-evenly flex-col">

        <div className="flex  flex-col justify-evenly">
            <h2 className="text-white text-2xl font-bold mt-4">{profile.name}</h2>
            <p className="text-white text-xl pt-4">{profile.jobTitle}</p>
            <div className="flex gap-4 mt-4">
                {profile.links.map((link, idx) => (
                    <button key={idx}
                            className="w-10 h-10 flex items-center justify-center rounded-full  relative overflow-hidden"
                    >
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                            <i className={`fa-brands ${link.icon} text-2xl`}></i>
                        </a>
                    </button>

                ))}
            </div>


        </div>
        <div className="flex  flex-col justify-evenly py-5">
            <h3 className="text-white text-2xl font-bold">About Me</h3>
            <p className="text-gray-300 mt-2 whitespace-pre">{profile.about}</p>
        </div>
    </div>
);

export default Profile;
