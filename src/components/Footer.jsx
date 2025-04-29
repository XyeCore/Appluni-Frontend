import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('aboutUs')}</h3>
            <p className="text-sm text-gray-400">
              {t('footerDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-indigo-400">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/universities" className="text-gray-400 hover:text-indigo-400">
                  {t('universities')}
                </Link>
              </li>
              <li>
                <Link to="/auth" className="text-gray-400 hover:text-indigo-400">
                  {t('login')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('contactUs')}</h3>
            <p className="text-sm text-gray-400">
              {t('email')}: support@example.com
            </p>
            <p className="text-sm text-gray-400">
              {t('phone')}: +1 234 567 890
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} XeCore. {t('allRightsReserved')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;