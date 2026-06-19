import { useTheme } from "../context/ThemeContext";

const FeaturesSection = () => {
  const { darkMode } = useTheme();

  return (
    <section
      className={`
        py-20 
        px-10 
        transition-all 
        duration-500
        ${darkMode 
          ? "bg-slate-800 text-white" 
          : "bg-gray-100 text-slate-900"}
      `}
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Key Features✨
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div
          className={`
            p-6 
            rounded-lg 
            shadow-lg 
            transition-all 
            duration-300
            ${darkMode 
              ? "bg-slate-700" 
              : "bg-white"}
          `}
        >
          <h3 className="text-2xl font-bold mb-3">
            AI Career Recommendations
          </h3>
          <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
            Get personalized career suggestions based on your interests and skills.
          </p>
        </div>


        <div
          className={`
            p-6 
            rounded-lg 
            shadow-lg 
            transition-all 
            duration-300
            ${darkMode 
              ? "bg-slate-700" 
              : "bg-white"}
          `}
        >
          <h3 className="text-2xl font-bold mb-3">
            Degree Recommendations
          </h3>
          <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
            Discover the most suitable degree programs after 12th grade.
          </p>
        </div>


        <div
          className={`
            p-6 
            rounded-lg 
            shadow-lg 
            transition-all 
            duration-300
            ${darkMode 
              ? "bg-slate-700" 
              : "bg-white"}
          `}
        >
          <h3 className="text-2xl font-bold mb-3">
            Career Roadmaps
          </h3>
          <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
            Follow a step-by-step path from student to professional.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;