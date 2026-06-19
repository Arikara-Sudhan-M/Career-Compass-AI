import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const NotFound = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-5
        transition-all
        duration-500
        ${
          darkMode
            ? "bg-slate-900 text-white"
            : "bg-gray-100 text-slate-900"
        }
      `}
    >

      {/* Error Number */}
      <h1
        className="
          text-8xl
          font-extrabold
          text-red-500
          mb-4
          animate-pulse
        "
      >
        404
      </h1>


      {/* Title */}
      <h2
        className="
          text-4xl
          font-bold
          mb-4
        "
      >
        🚫 Page Not Found
      </h2>


      {/* Description */}
      <p
        className={`
          text-lg
          max-w-lg
          mb-8
          ${
            darkMode
              ? "text-gray-400"
              : "text-gray-600"
          }
        `}
      >
        Oops! The page you are looking for
        doesn't exist or has been moved.
      </p>


      {/* Home Button */}
      <Link
        to="/"
        className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-8
          py-3
          rounded-lg
          font-semibold
          transition-all
          duration-300
          hover:scale-105
          shadow-lg
        "
      >
        🏠 Back To Home
      </Link>


    </div>
  );
};

export default NotFound;