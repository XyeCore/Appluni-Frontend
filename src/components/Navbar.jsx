import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
<>
<nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-indigo-600">
              UniApply
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/profile" className="px-4 py-2 text-indigo-600 hover:text-indigo-800 transition">
              Profile
            </Link>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </nav>

    
</>
  );
};
