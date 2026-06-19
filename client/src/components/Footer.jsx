import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`
        text-center 
        py-6
        transition-all
        duration-500
        ${
          darkMode
            ? "bg-slate-950 text-white"
            : "bg-slate-200 text-slate-900"
        }
      `}
    >
      <p className="font-medium">
        © 2026 Career Compass AI. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;