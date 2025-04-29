import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GlobeAltIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { useAuth } from '../context/AuthContext';



export const Navbar = () => {
  const { t } = useTranslation();

  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Russian' },
    { code: 'az', name: 'Azerbaijani' },
  ];

  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
      // Add logic to load translations for the saved language
    }
  }, []);

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const selectLanguage = (code) => {
    setSelectedLanguage(code);
    setIsLanguageOpen(false);
    localStorage.setItem('selectedLanguage', code);
    i18n.changeLanguage(code); // Dynamically update the language in i18next
  };

  const handleLogout = () => {
    logout(); // Use the AuthContext logout function
    window.location.href = '/auth'; // Redirect to the login page
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
            

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={toggleLanguageDropdown}
                className="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
              >
                <GlobeAltIcon className="h-5 w-5" />
                <span className="hidden sm:inline">
                  {t(selectedLanguage)}
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
                      {t(language.name)}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {isAuthenticated ? (
 <>
              <Link 
                to="/dashboard" 
                className="px-4 py-2 text-indigo-600 hover:text-indigo-800 transition"
              >
                {t('dashboard')}
              </Link>
                          
              <Link 
                onClick={handleLogout} 
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition cursor-pointer"
              >
                {t('logout')}
              </Link>
 </>
              
            ) : (
              <Link 
                to="/auth" 
                className="px-4 py-2 text-indigo-600 hover:text-indigo-800 transition"
              >
                {t('login')}
              </Link>
            )}

          </div>
        </div>
      </div>
    </nav>
  );
};