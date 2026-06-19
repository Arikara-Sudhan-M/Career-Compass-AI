import { useTheme } from "../context/ThemeContext";

const HowItWorks = () => {
  const { darkMode } = useTheme();

  return (
    <section
      className={`
        py-20
        transition-all
        duration-500
        ${
          darkMode
            ? "bg-slate-900 text-white"
            : "bg-white text-slate-900"
        }
      `}
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        How It Works🚀
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-10">

        <div
          className={`
            p-6
            rounded-lg
            shadow-lg
            transition-all
            duration-300
            ${
              darkMode
                ? "bg-slate-800"
                : "bg-gray-100"
            }
          `}
        >
          <h3 className="text-2xl font-bold mb-4">
            1. Take Assessment
          </h3>

          <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
            Answer questions about your interests, strengths and goals.
          </p>
        </div>


        <div
          className={`
            p-6
            rounded-lg
            shadow-lg
            transition-all
            duration-300
            ${
              darkMode
                ? "bg-slate-800"
                : "bg-gray-100"
            }
          `}
        >
          <h3 className="text-2xl font-bold mb-4">
            2. AI Analysis
          </h3>

          <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
            Our AI analyzes your responses and finds suitable career paths.
          </p>
        </div>


        <div
          className={`
            p-6
            rounded-lg
            shadow-lg
            transition-all
            duration-300
            ${
              darkMode
                ? "bg-slate-800"
                : "bg-gray-100"
            }
          `}
        >
          <h3 className="text-2xl font-bold mb-4">
            3. Get Recommendations
          </h3>

          <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
            Receive personalized degree and career recommendations.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;