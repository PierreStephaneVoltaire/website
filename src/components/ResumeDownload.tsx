import {useState} from 'react';
import SectionLabel from './SectionLabel';

const resumeOptions = [
    {name: 'DevOps resume', path: '/resumes/Pierre_Voltaire_devops_resume.pdf'},
    {name: 'Developer resume', path: '/resumes/Pierre_Voltaire_developer_resume.pdf'},
];

const ResumeDownload = () => {
    const [selectedResume, setSelectedResume] = useState(resumeOptions[0].path);

    const openResume = () => {
        window.open(selectedResume, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="resume-panel">
            <SectionLabel label="resume" />
            <div className="resume-controls">
                <label htmlFor="resume-select" className="sr-only">Select resume type</label>
                <select
                    id="resume-select"
                    className="resume-select"
                    value={selectedResume}
                    onChange={(event) => setSelectedResume(event.target.value)}
                >
                    {resumeOptions.map((option) => (
                        <option key={option.path} value={option.path}>{option.name}</option>
                    ))}
                </select>
                <button type="button" className="resume-button" onClick={openResume}>
                    View PDF ↗
                </button>
            </div>
        </div>
    );
};

export default ResumeDownload;
