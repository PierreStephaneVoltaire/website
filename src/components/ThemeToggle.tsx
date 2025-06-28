import { useState, useEffect } from 'react';

type Theme = 'original' | 'dark' | 'light';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>('original');

  useEffect(() => {
    // Check for saved theme preference or default to 'original'
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    
    root.classList.remove('theme-original', 'theme-dark', 'theme-light');
    
    root.classList.add(`theme-${newTheme}`);
    
    
    localStorage.setItem('theme', newTheme);
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <div className="absolute top-4 right-4 z-50 flex items-center bg-gray-800 theme-toggle-bg rounded-lg p-1 shadow-lg">
      <button
        onClick={() => handleThemeChange('original')}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 ${
          theme === 'original'
            ? 'bg-blue-600 text-white'
            : 'text-gray-300 hover:text-white'
        }`}
        aria-label="Switch to original dark blue theme"
        aria-pressed={theme === 'original'}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
        </svg>
        <span className="sr-only">Original theme</span>
      </button>
      
      <button
        onClick={() => handleThemeChange('dark')}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 ${
          theme === 'dark'
            ? 'bg-blue-600 text-white'
            : 'text-gray-300 hover:text-white'
        }`}
        aria-label="Switch to pure dark theme"
        aria-pressed={theme === 'dark'}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
        <span className="sr-only">Dark theme</span>
      </button>
      
      <button
        onClick={() => handleThemeChange('light')}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 ${
          theme === 'light'
            ? 'bg-blue-600 text-white'
            : 'text-gray-300 hover:text-white'
        }`}
        aria-label="Switch to light theme"
        aria-pressed={theme === 'light'}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
        <span className="sr-only">Light theme</span>
      </button>
    </div>
  );
};

export default ThemeToggle;
