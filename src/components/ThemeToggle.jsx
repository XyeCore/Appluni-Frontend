import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <SunIcon className="h-6 w-6 text-yellow-500" />
      ) : (
        <MoonIcon className="h-6 w-6 text-white" />
      )}
    </button>
  );
}; 