import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import API_URL from "../config/api";

const Roadmap = () => {

  const { careerName } = useParams();
  const navigate = useNavigate();

  const { darkMode } = useTheme();


  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetchRoadmap();
  }, []);


  // Fetch Roadmap
  const fetchRoadmap = async () => {

    try {

      const res = await axios.get(
        `${API_URL}/roadmaps/${careerName}`
      );

      setRoadmap(res.data.roadmap);

    } catch (error) {

      console.log(error);
      alert("Roadmap not found ❌");

    } finally {

      setLoading(false);

    }

  };


  // Loading Screen
  if (loading) {

    return (

      <div
        className={`
          min-h-screen
          flex
          justify-center
          items-center
          text-xl
          md:text-2xl
          font-semibold
          transition-all
          duration-500
          ${
            darkMode
              ? "bg-slate-900 text-white"
              : "bg-gray-100 text-slate-900"
          }
        `}
      >

        Loading Roadmap...

      </div>

    );

  }


  return (

    <div
      className={`
        min-h-screen
        p-4
        md:p-10
        transition-all
        duration-500
        ${
          darkMode
            ? "bg-slate-900 text-white"
            : "bg-gray-100 text-slate-900"
        }
      `}
    >


      {/* Back Button */}

      <button
        onClick={() => navigate(-1)}
        className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-4
          py-2
          rounded-lg
          mb-6
          transition-all
          duration-300
          hover:scale-105
        "
      >

        ⬅ Back

      </button>



      {
        roadmap ? (

          <>


            {/* Title Card */}

            <div
              className={`
                p-5
                md:p-6
                rounded-xl
                shadow-xl
                mb-6
                transition-all
                duration-500
                ${
                  darkMode
                    ? "bg-slate-800"
                    : "bg-white"
                }
              `}
            >

              <h1
                className="
                  text-3xl
                  md:text-5xl
                  font-bold
                  break-words
                "
              >

                🚀 {roadmap.careerName} Roadmap

              </h1>

            </div>



            {/* Learning Steps */}

            <div
              className={`
                p-5
                md:p-6
                rounded-xl
                shadow-lg
                mb-6
                transition-all
                duration-500
                ${
                  darkMode
                    ? "bg-slate-800"
                    : "bg-white"
                }
              `}
            >

              <h2 className="text-2xl font-bold mb-4">

                📌 Learning Steps

              </h2>


              <ol className="list-decimal ml-5 space-y-3">

                {
                  roadmap.steps?.map((step, index) => (

                    <li
                      key={index}
                      className="leading-7"
                    >
                      {step}
                    </li>

                  ))
                }

              </ol>

            </div>



            {/* Required Skills */}

            <div
              className={`
                p-5
                md:p-6
                rounded-xl
                shadow-lg
                mb-6
                transition-all
                duration-500
                ${
                  darkMode
                    ? "bg-slate-800"
                    : "bg-white"
                }
              `}
            >

              <h2 className="text-2xl font-bold mb-4">

                🛠 Required Skills

              </h2>


              <ul className="list-disc ml-5 space-y-3">

                {
                  roadmap.skills?.map((skill, index) => (

                    <li
                      key={index}
                      className="leading-7"
                    >
                      {skill}
                    </li>

                  ))
                }

              </ul>

            </div>



            {/* Learning Resources */}

            <div
              className={`
                p-5
                md:p-6
                rounded-xl
                shadow-lg
                transition-all
                duration-500
                ${
                  darkMode
                    ? "bg-slate-800"
                    : "bg-white"
                }
              `}
            >

              <h2 className="text-2xl font-bold mb-4">

                📚 Learning Resources

              </h2>


              <ul className="list-disc ml-5 space-y-3">

                {
                  roadmap.resources?.map((resource, index) => (

                    <li
                      key={index}
                      className="leading-7"
                    >
                      {resource}
                    </li>

                  ))
                }

              </ul>

            </div>


          </>

        ) : (

          <div
            className="
              text-center
              text-red-500
              text-xl
              md:text-2xl
              font-semibold
            "
          >

            Roadmap not found ❌

          </div>

        )

      }


    </div>

  );

};


export default Roadmap;