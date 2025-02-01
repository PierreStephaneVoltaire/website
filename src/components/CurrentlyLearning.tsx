interface LearningSectionProps {
    learning: string[];
}

const CurrentlyLearning = ({learning}: LearningSectionProps) => (
    <section className="mt-6 space-y-4  ">
        <h3 className="text-white text-2xl font-bold">Currently Learning</h3>
        <ul className="mt-6 text-gray-300">
            {learning.map((item, idx) => (
                <li key={idx} className="flex items-center">
                    <span className="mr-2">•</span> {item}
                </li>
            ))}
        </ul>
    </section>
);

export default CurrentlyLearning;
