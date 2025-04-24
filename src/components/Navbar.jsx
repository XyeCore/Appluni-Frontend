import { Link } from 'react-router-dom';
import { useState } from 'react';
import { GlobeAltIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { isLoggedIn } from '../App'; // Import the isLoggedIn variable

export const Navbar = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Russian' },
    { code: 'az', name: 'Azerbaijani' },
  ];

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const selectLanguage = (code) => {
    setSelectedLanguage(code);
    setIsLanguageOpen(false);
    // Add your language change logic here
  };

  return (
    <nav className="bg-white shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-indigo-600">
               Appluni
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            
            {/* Test Link */}
          <Link 
                to="/dashboard" 
                className="px-4 py-2 text-gray-300 hover:text-indigo-800 transition"
              >
                (test)
              </Link>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={toggleLanguageDropdown}
                className="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
              >
                <GlobeAltIcon className="h-5 w-5" />
                <span className="hidden sm:inline">
                  {languages.find(lang => lang.code === selectedLanguage)?.name}
                </span>
                <ChevronDownIcon className="h-4 w-4 ml-1" />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-100">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => selectLanguage(language.code)}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        selectedLanguage === language.code
                          ? 'bg-indigo-50 text-indigo-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {language.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {isLoggedIn ? (
 <>
              <Link 
                to="/dashboard" 
                className="px-4 py-2 text-indigo-600 hover:text-indigo-800 transition"
              >
                Dashboard
              </Link>
                          
              <Link className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
              Log Out
              </Link>
 </>
              
            ) : (
              <Link 
                to="/auth" 
                className="px-4 py-2 text-indigo-600 hover:text-indigo-800 transition"
              >
                Log In
              </Link>
            )}

          </div>
        </div>
      </div>
    </nav>
  );
};