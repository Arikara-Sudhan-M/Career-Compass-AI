import { useTheme } from "../context/ThemeContext";

const CareerCategories = () => {
  const { darkMode } = useTheme();

  const categories = [
    "Engineering",
    "Medicine",
    "Business",
    "Design",
    "Law",
    "Data Science",
    "Arts",
    "Agriculture"
  ];

  return (
    <section
      className={`
        py-20
        transition-all
        duration-500
        ${
          darkMode
            ? "bg-slate-800 text-white"
            : "bg-gray-100 text-slate-900"
        }
      `}
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Explore Career Categories💼
      </h2>

      <div className="grid md:grid-cols-4 gap-6 px-10">

        {categories.map((category, index) => (
          <div
            key={index}
            className={`
              p-8
              rounded-lg
              text-center
              shadow-lg
              transition-all
              duration-300
              hover:scale-105
              ${
                darkMode
                  ? "bg-slate-700"
                  : "bg-white"
              }
            `}
          >
            <h3 className="text-xl font-bold">
              {category}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
};

export default CareerCategories;