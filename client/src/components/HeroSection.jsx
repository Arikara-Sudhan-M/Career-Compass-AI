import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import heroImage from "../assets/hero-banner.png";

const HeroSection = () => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  return (
    <section
      className={`
        min-h-screen
        flex
        items-center
        px-6 md:px-10
        overflow-hidden
        transition-all
        duration-500
        ${
          darkMode
            ? "bg-slate-900 text-white"
            : "bg-gray-50 text-slate-900"
        }
      `}
    >
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          md:grid-cols-2
          gap-10
          items-center
        "
      >

        {/* Left Content */}
        <div>

          <h1
            className="
              text-5xl
              md:text-7xl
              font-extrabold
              leading-tight
            "
          >
            Discover Your
            <br />

            Perfect
            <span className="text-blue-500">
              {" "}Career
            </span>

            <br />

            <span className="text-blue-500">
              Path
            </span>

          </h1>


          {/* Description */}
          <p
            className={`
              mt-6
              text-lg
              leading-8
              max-w-xl
              ${
                darkMode
                  ? "text-gray-300"
                  : "text-gray-600"
              }
            `}
          >
            Career Compass AI helps students choose the right
            degree, explore career opportunities, receive AI
            recommendations, and follow personalized roadmaps.
          </p>


          {/* Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap">

            <button
              onClick={() => navigate("/register")}
              className="
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-8
                py-3
                rounded-xl
                font-semibold
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Get Started 🚀
            </button>


            <button
              onClick={() => navigate("/ai-chat")}
              className={`
                px-8
                py-3
                rounded-xl
                border
                font-semibold
                transition-all
                duration-300
                hover:scale-105
                ${
                  darkMode
                    ? "border-slate-500 hover:bg-slate-800"
                    : "border-gray-300 hover:bg-gray-100"
                }
              `}
            >
              Try AI Assistant 🤖
            </button>

          </div>


          {/* Statistics */}
          <div className="grid grid-cols-4 gap-8 mt-14">


            <div>
              <h2 className="text-4xl font-bold text-blue-500">
                150+
              </h2>

              <p className="mt-1">
                Careers
              </p>
            </div>


            <div>
              <h2 className="text-4xl font-bold text-green-500">
                25+
              </h2>

              <p className="mt-1">
                AI Questions
              </p>
            </div>


            <div>
              <h2 className="text-4xl font-bold text-purple-500">
                95%
              </h2>

              <p className="mt-1">
                Accuracy
              </p>
            </div>


            <div>
              <h2 className="text-4xl font-bold text-orange-500">
                24/7
              </h2>

              <p className="mt-1">
                AI Support
              </p>
            </div>

          </div>


        </div>


        {/* Right Side Image */}
        <div className="flex justify-center">

          <img
            src={heroImage}
            alt="AI Career Guidance"
            className="
              w-full
              max-w-[500px]
              object-contain
              drop-shadow-2xl
              hover:scale-105
              transition-all
              duration-700
            "
          />

        </div>


      </div>
    </section>
  );
};


export default HeroSection;