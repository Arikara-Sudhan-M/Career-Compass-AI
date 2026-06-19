import { useTheme } from "../context/ThemeContext";

const Loader = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`
        min-h-screen
        flex
        flex-col
        justify-center
        items-center
        gap-5
        transition-all
        duration-500
        ${
          darkMode
            ? "bg-slate-900 text-white"
            : "bg-gray-100 text-slate-900"
        }
      `}
    >

      {/* Animated Spinner */}
      <div
        className="
          w-16
          h-16
          border-4
          border-blue-500
          border-t-transparent
          rounded-full
          animate-spin
        "
      >
      </div>


      {/* Loading Text */}
      <h2
        className="
          text-2xl
          font-bold
          animate-pulse
        "
      >
        Loading...
      </h2>


      {/* Subtitle */}
      <p
        className={`
          text-lg
          ${
            darkMode
              ? "text-gray-400"
              : "text-gray-600"
          }
        `}
      >
        Please wait while we prepare your data
      </p>

    </div>
  );
};

export default Loader;