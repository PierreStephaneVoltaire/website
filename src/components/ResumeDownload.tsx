import { useState } from 'react';

interface ResumeDownloadProps {
  resumeOptions: {
    name: string;
    path: string;
  }[];
}

const ResumeDownload = ({ resumeOptions }: ResumeDownloadProps) => {
  const [selectedResume, setSelectedResume] = useState<string>(resumeOptions[0]?.path || '');

  const handleViewResume = () => {
    window.open(selectedResume, '_blank');
  };

  return (
    <section className="mt-8 pt-6 border-t border-gray-700" aria-labelledby="resume-heading">
      <h3 id="resume-heading" className="text-white text-2xl font-bold text-left lg:text-center mb-4">View Resume</h3>
      
      {/* No-JS fallback: Direct view links */}
      <noscript>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {resumeOptions.map((option, index) => (
            <a 
              key={index}
              href={option.path}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-center w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label={`View ${option.name} (opens in new window)`}
            >
              View {option.name}
            </a>
          ))}
        </div>
      </noscript>
      
      {/* JavaScript-enabled version */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="relative w-full sm:w-auto">
          <label htmlFor="resume-select" className="sr-only">Select resume type</label>
          <select 
            id="resume-select"
            value={selectedResume}
            onChange={(e) => setSelectedResume(e.target.value)}
            className="bg-gray-800 text-white pl-4 pr-10 py-2 rounded-md w-full sm:w-auto appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 12px center',
              backgroundSize: '12px'
            }}
            aria-label="Choose resume type to view"
          >
            {resumeOptions.map((option, index) => (
              <option key={index} value={option.path}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        
        <button 
          onClick={handleViewResume}
          className="px-4 py-2 rounded-md w-full sm:w-auto transition-colors bg-blue-600 hover:bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          aria-label="View selected resume in new window"
        >
          View Resume
        </button>
      </div>
    </section>
  );
};

export default ResumeDownload;
