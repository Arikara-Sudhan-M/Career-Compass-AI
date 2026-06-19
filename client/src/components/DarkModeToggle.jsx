import { useTheme } from "../context/ThemeContext";

const DarkModeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        w-10 h-10
        flex items-center justify-center
        rounded-full
        transition-all duration-300
        hover:scale-110
        cursor-pointer
        ${
          darkMode
            ? "bg-slate-800 text-yellow-400 hover:bg-slate-700"
            : "bg-slate-200 text-slate-700 hover:bg-slate-300"
        }
      `}
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
};

export default DarkModeToggle;