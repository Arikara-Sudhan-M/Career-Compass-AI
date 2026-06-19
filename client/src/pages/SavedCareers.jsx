import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useTheme } from "../context/ThemeContext";
import API_URL from "../config/api";

const SavedCareers = () => {
  const { darkMode } = useTheme();

  const [savedCareers, setSavedCareers] = useState([]);

  useEffect(() => {
    fetchSavedCareers();
  }, []);


  // Fetch Saved Careers
  const fetchSavedCareers = async () => {
    try {

      const user = JSON.parse(
        localStorage.getItem("user")
      );


      const res = await axios.get(
  `${API_URL}/users/saved-careers/${user._id}`
);

      setSavedCareers(
        res.data.savedCareers
      );

    } catch (error) {

      console.log(error);

      toast.error(
        "Failed to load saved careers ❌"
      );

    }
  };


  // Remove Saved Career
  const removeCareer = async (careerId) => {

    try {

      const user = JSON.parse(
        localStorage.getItem("user")
      );


      await axios.delete(
  `${API_URL}/users/remove-career/${user._id}/${careerId}`
);


      setSavedCareers(
        savedCareers.filter(
          (career) =>
            career._id !== careerId
        )
      );


      toast.success(
        "❤️ Career Removed Successfully"
      );

    } catch (error) {

      console.log(error);

      toast.error(
        "Failed to Remove Career ❌"
      );

    }

  };


  return (

    <div
      className={`
        min-h-screen
        p-10
        transition-all
        duration-500
        ${
          darkMode
            ? "bg-slate-900 text-white"
            : "bg-gray-100 text-slate-900"
        }
      `}
    >

      {/* Page Heading */}
      <h1 className="text-4xl font-bold mb-8">
        ❤️ My Saved Careers
      </h1>


      {/* Empty State */}
      {
        savedCareers.length === 0 ? (

          <div
            className={`
              text-center
              text-2xl
              mt-20
              ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }
            `}
          >
            😕 No Saved Careers Yet
          </div>

        ) : (

          <div className="grid md:grid-cols-3 gap-6">

            {
              savedCareers.map((career) => (

                <div
                  key={career._id}
                  className={`
                    p-6
                    rounded-xl
                    shadow-lg
                    transition-all
                    duration-300
                    hover:scale-105
                    ${
                      darkMode
                        ? "bg-slate-800 text-white"
                        : "bg-white text-slate-900"
                    }
                  `}
                >

                  {/* Career Name */}
                  <h2 className="text-xl font-bold mb-3">
                    {career.careerName}
                  </h2>


                  {/* Category */}
                  <p className="mb-2">
                    <strong>Category:</strong>{" "}
                    {career.category}
                  </p>


                  {/* Salary */}
                  <p className="mb-2">
                    <strong>Salary:</strong>{" "}
                    {career.salaryRange}
                  </p>


                  {/* Future Demand */}
                  <p className="mb-4">
                    <strong>Future Demand:</strong>{" "}
                    {career.futureDemand}
                  </p>


                  {/* Buttons */}
                  <div className="flex gap-3 flex-wrap">

                    <Link
                      to={`/career/${career._id}`}
                      className="
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        px-4
                        py-2
                        rounded-lg
                        transition-all
                        duration-300
                        hover:scale-105
                      "
                    >
                      View Details
                    </Link>


                    <button
                      onClick={() =>
                        removeCareer(career._id)
                      }
                      className="
                        bg-red-600
                        hover:bg-red-700
                        text-white
                        px-4
                        py-2
                        rounded-lg
                        transition-all
                        duration-300
                        hover:scale-105
                      "
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))
            }

          </div>

        )
      }

    </div>

  );
};

export default SavedCareers;