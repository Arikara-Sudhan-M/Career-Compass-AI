import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTheme } from "../context/ThemeContext";
import API_URL from "../config/api";

const CareerComparison = () => {
  const { darkMode } = useTheme();

  const [careers, setCareers] = useState([]);
  const [career1, setCareer1] = useState("");
  const [career2, setCareer2] = useState("");

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const res = await axios.get(`${API_URL}/careers`);
      setCareers(res.data.careers);
    } catch (error) {
      console.log(error);
    }
  };

  const selectedCareer1 = careers.find(
    (career) => career._id === career1
  );

  const selectedCareer2 = careers.find(
    (career) => career._id === career2
  );

  return (
    <div
      className={`
        min-h-screen
        px-4 md:px-10
        py-6 md:py-10
        transition-all duration-500
        ${
          darkMode
            ? "bg-slate-900 text-white"
            : "bg-gray-100 text-slate-900"
        }
      `}
    >

      {/* Heading */}

      <h1
        className="
          text-3xl md:text-5xl
          font-bold
          mb-3
        "
      >
        ⚖️ Career Comparison
      </h1>


      <p
        className={`
          mb-8
          text-sm md:text-lg
          ${
            darkMode
              ? "text-gray-400"
              : "text-gray-600"
          }
        `}
      >
        Compare two careers and choose the path
        that suits you best.
      </p>


      {/* Career Selectors */}

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-4 md:gap-6
          mb-8
        "
      >

        {/* First Career */}

        <select
          value={career1}
          onChange={(e) =>
            setCareer1(e.target.value)
          }
          className={`
            p-4
            rounded-xl
            shadow-md
            outline-none
            ${
              darkMode
                ? "bg-slate-800 text-white"
                : "bg-white text-slate-900"
            }
          `}
        >

          <option value="">
            Select First Career
          </option>

          {
            careers.map((career) => (
              <option
                key={career._id}
                value={career._id}
              >
                {career.careerName}
              </option>
            ))
          }

        </select>


        {/* Second Career */}

        <select
          value={career2}
          onChange={(e) =>
            setCareer2(e.target.value)
          }
          className={`
            p-4
            rounded-xl
            shadow-md
            outline-none
            ${
              darkMode
                ? "bg-slate-800 text-white"
                : "bg-white text-slate-900"
            }
          `}
        >

          <option value="">
            Select Second Career
          </option>

          {
            careers.map((career) => (
              <option
                key={career._id}
                value={career._id}
              >
                {career.careerName}
              </option>
            ))
          }

        </select>

      </div>
            {/* Empty State */}

      {
        (!selectedCareer1 || !selectedCareer2) && (
          <div
            className={`
              text-center
              mt-16
              text-lg md:text-xl
              ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }
            `}
          >
            🔍 Select two careers to start comparison
          </div>
        )
      }


      {/* Comparison Result */}

      {
        selectedCareer1 &&
        selectedCareer2 && (
          <>

            {/* Mobile View Cards */}

            <div
              className="
                md:hidden
                space-y-5
              "
            >

              {/* Career 1 Card */}

              <div
                className={`
                  rounded-2xl
                  p-5
                  shadow-xl
                  ${
                    darkMode
                      ? "bg-slate-800"
                      : "bg-white"
                  }
                `}
              >

                <h2 className="text-xl font-bold mb-4">
                  📊 {selectedCareer1.careerName}
                </h2>

                <div className="space-y-2 text-sm">

                  <p>
                    <span className="font-semibold">
                      Category:
                    </span>
                    {" "}
                    {selectedCareer1.category}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Salary:
                    </span>
                    {" "}
                    {selectedCareer1.salaryRange}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Future Demand:
                    </span>
                    {" "}
                    {selectedCareer1.futureDemand}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Growth Rate:
                    </span>
                    {" "}
                    {selectedCareer1.growthRate}%
                  </p>

                  <p>
                    <span className="font-semibold">
                      Work Environment:
                    </span>
                    {" "}
                    {selectedCareer1.workEnvironment}
                  </p>

                </div>

              </div>


              {/* Career 2 Card */}

              <div
                className={`
                  rounded-2xl
                  p-5
                  shadow-xl
                  ${
                    darkMode
                      ? "bg-slate-800"
                      : "bg-white"
                  }
                `}
              >

                <h2 className="text-xl font-bold mb-4">
                  🚀 {selectedCareer2.careerName}
                </h2>

                <div className="space-y-2 text-sm">

                  <p>
                    <span className="font-semibold">
                      Category:
                    </span>
                    {" "}
                    {selectedCareer2.category}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Salary:
                    </span>
                    {" "}
                    {selectedCareer2.salaryRange}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Future Demand:
                    </span>
                    {" "}
                    {selectedCareer2.futureDemand}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Growth Rate:
                    </span>
                    {" "}
                    {selectedCareer2.growthRate}%
                  </p>

                  <p>
                    <span className="font-semibold">
                      Work Environment:
                    </span>
                    {" "}
                    {selectedCareer2.workEnvironment}
                  </p>

                </div>

              </div>

            </div>
                        {/* Desktop Comparison Table */}

            <div
              className="
                hidden
                md:block
                overflow-hidden
                rounded-2xl
                shadow-xl
                mt-6
              "
            >

              <table
                className={`
                  w-full
                  text-left
                  ${
                    darkMode
                      ? "bg-slate-800"
                      : "bg-white"
                  }
                `}
              >

                <thead>

                  <tr
                    className={
                      darkMode
                        ? "bg-slate-700"
                        : "bg-blue-100"
                    }
                  >

                    <th className="p-4 border">
                      Feature
                    </th>

                    <th className="p-4 border">
                      {selectedCareer1.careerName}
                    </th>

                    <th className="p-4 border">
                      {selectedCareer2.careerName}
                    </th>

                  </tr>

                </thead>


                <tbody>

                  <tr>
                    <td className="p-4 border font-semibold">
                      Category
                    </td>

                    <td className="p-4 border">
                      {selectedCareer1.category}
                    </td>

                    <td className="p-4 border">
                      {selectedCareer2.category}
                    </td>
                  </tr>


                  <tr>
                    <td className="p-4 border font-semibold">
                      Salary Range
                    </td>

                    <td className="p-4 border">
                      {selectedCareer1.salaryRange}
                    </td>

                    <td className="p-4 border">
                      {selectedCareer2.salaryRange}
                    </td>
                  </tr>


                  <tr>
                    <td className="p-4 border font-semibold">
                      Future Demand
                    </td>

                    <td className="p-4 border">
                      {selectedCareer1.futureDemand}
                    </td>

                    <td className="p-4 border">
                      {selectedCareer2.futureDemand}
                    </td>
                  </tr>


                  <tr>
                    <td className="p-4 border font-semibold">
                      Growth Rate
                    </td>

                    <td className="p-4 border">
                      {selectedCareer1.growthRate}%
                    </td>

                    <td className="p-4 border">
                      {selectedCareer2.growthRate}%
                    </td>
                  </tr>


                  <tr>
                    <td className="p-4 border font-semibold">
                      Work Environment
                    </td>

                    <td className="p-4 border">
                      {selectedCareer1.workEnvironment}
                    </td>

                    <td className="p-4 border">
                      {selectedCareer2.workEnvironment}
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>

          </>
        )
      }

    </div>
  );
};

export default CareerComparison;