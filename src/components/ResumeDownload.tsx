import { useState } from 'react';

interface ResumeDownloadProps {
  resumeOptions: {
    name: string;
    path: string;
  }[];
}

const ResumeDownload = ({ resumeOptions }: ResumeDownloadProps) => {
  const [selectedResume, setSelectedResume] = useState<string>(resumeOptions[0]?.path || '');
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [countdown, setCountdown] = useState(0);

  // Rate limiting logic
  const handleDownload = () => {
    // Check if user is already rate limited
    if (isRateLimited) {
      return;
    }

    // Get current timestamp and download history from localStorage
    const now = Date.now();
    const downloadHistory = JSON.parse(localStorage.getItem('resumeDownloads') || '[]');
    
    // Clean up old downloads (older than 1 minute)
    const recentDownloads = downloadHistory.filter((timestamp: number) => now - timestamp < 60000);
    
    // Check if user has downloaded too many times (more than 3 in a minute)
    if (recentDownloads.length >= 3) {
      setIsRateLimited(true);
      setCountdown(60);
      
      // Set a countdown timer
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsRateLimited(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      return;
    }
    
    // Add current timestamp to download history
    localStorage.setItem('resumeDownloads', JSON.stringify([...recentDownloads, now]));
    
    // Trigger the download
    window.open(selectedResume, '_blank');
  };

  return (
    <div className="mt-8 pt-6 border-t border-gray-700">
      <h3 className="text-white text-2xl font-bold text-left lg:text-center mb-4">Download Resume</h3>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <select 
          value={selectedResume}
          onChange={(e) => setSelectedResume(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded-md w-full sm:w-auto"
        >
          {resumeOptions.map((option, index) => (
            <option key={index} value={option.path}>
              {option.name}
            </option>
          ))}
        </select>
        <button 
          onClick={handleDownload}
          disabled={isRateLimited}
          className={`px-4 py-2 rounded-md w-full sm:w-auto ${isRateLimited ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {isRateLimited ? `Try again in ${countdown}s` : 'Download Resume'}
        </button>
      </div>
    </div>
  );
};

export default ResumeDownload;
