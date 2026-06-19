import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTheme } from "../context/ThemeContext";
import Loader from "../components/Loader";
import API_URL from "../config/api";

const CareerDetails = () => {

  const { darkMode } = useTheme();

  const { id } = useParams();

  const navigate = useNavigate();

  const [career, setCareer] = useState(null);


  useEffect(() => {

    fetchCareer();

  }, []);


  // Fetch Career Details

  const fetchCareer = async () => {

    try {

      const res = await axios.get(
        `${API_URL}/careers/${id}`
      );


      setCareer(res.data.career);


    } catch (error) {

      console.log(error);

      toast.error(
        "Failed to load career details ❌"
      );

    }

  };


  // Save Career

  const saveCareer = async () => {

    try {

      const user = JSON.parse(
        localStorage.getItem("user")
      );


      await axios.post(
        `${API_URL}/users/save-career`,
        {
          userId: user._id,
          careerId: career._id,
        }
      );


      toast.success(
        "❤️ Career Saved Successfully"
      );


    } catch (error) {


      console.log(error);


      toast.error(
        "Failed to Save Career ❌"
      );

    }

  };


  // Loading Screen

  if (!career) {

    return <Loader />;

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
          mb-5
          md:mb-6
          bg-blue-600
          hover:bg-blue-700
          px-4
          md:px-5
          py-2
          rounded-lg
          text-white
          text-sm
          md:text-base
          transition-all
          duration-300
          hover:scale-105
        "
      >

        ⬅ Back

      </button>



      {/* Main Card */}

      <div
        className={`
          p-5
          md:p-8
          rounded-2xl
          shadow-xl
          transition-all
          duration-500
          ${
            darkMode
              ? "bg-slate-800"
              : "bg-white"
          }
        `}
      >


        {/* Career Title */}

        <h1
          className="
            text-3xl
            md:text-4xl
            font-bold
            mb-6
            md:mb-8
          "
        >

          {career.careerName}

        </h1>



        {/* Basic Information Cards */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-4
            md:gap-5
          "
        >


          <div
            className="
              bg-blue-600
              text-white
              p-4
              rounded-xl
              shadow-lg
            "
          >

            <h3 className="font-semibold">

              Category

            </h3>


            <p className="text-sm md:text-base">

              {career.category}

            </p>

          </div>



          <div
            className="
              bg-green-600
              text-white
              p-4
              rounded-xl
              shadow-lg
            "
          >

            <h3 className="font-semibold">

              Salary Range

            </h3>


            <p className="text-sm md:text-base">

              {career.salaryRange}

            </p>

          </div>



          <div
            className="
              bg-purple-600
              text-white
              p-4
              rounded-xl
              shadow-lg
            "
          >

            <h3 className="font-semibold">

              Future Demand

            </h3>


            <p className="text-sm md:text-base">

              {career.futureDemand}

            </p>

          </div>



          <div
            className="
              bg-pink-600
              text-white
              p-4
              rounded-xl
              shadow-lg
            "
          >

            <h3 className="font-semibold">

              Growth Rate

            </h3>


            <p className="text-sm md:text-base">

              {career.growthRate}%

            </p>

          </div>



          <div
            className="
              bg-orange-600
              text-white
              p-4
              rounded-xl
              shadow-lg
              sm:col-span-2
            "
          >

            <h3 className="font-semibold">

              Work Environment

            </h3>


            <p className="text-sm md:text-base">

              {career.workEnvironment}

            </p>

          </div>


        </div>
                {/* Action Buttons */}

        <div
          className="
            mt-8
            flex
            flex-col
            sm:flex-row
            gap-4
          "
        >


          {/* Save Career Button */}

          <button
            onClick={saveCareer}
            className="
              w-full
              sm:w-auto
              bg-red-600
              hover:bg-red-700
              text-white
              px-6
              py-3
              rounded-xl
              font-semibold
              transition-all
              duration-300
              hover:scale-105
            "
          >

            ❤️ Save Career

          </button>



          {/* Roadmap Button */}

          <button
            onClick={() =>
              navigate(
                `/roadmap/${encodeURIComponent(
                  career.careerName
                )}`
              )
            }
            className="
              w-full
              sm:w-auto
              bg-green-600
              hover:bg-green-700
              text-white
              px-6
              py-3
              rounded-xl
              font-semibold
              transition-all
              duration-300
              hover:scale-105
            "
          >

            🚀 View Roadmap

          </button>


        </div>



        {/* Description Section */}

        <div className="mt-8 md:mt-10">


          <h2
            className="
              text-xl
              md:text-2xl
              font-bold
              mb-3
            "
          >

            📄 Description

          </h2>


          <p
            className={`
              text-sm
              md:text-base
              leading-7
              md:leading-8
              ${
                darkMode
                  ? "text-gray-300"
                  : "text-gray-700"
              }
            `}
          >

            {career.description}

          </p>


        </div>



        {/* Required Degrees */}

        <div className="mt-8 md:mt-10">


          <h2
            className="
              text-xl
              md:text-2xl
              font-bold
              mb-3
            "
          >

            🎓 Required Degrees

          </h2>


          <ul
            className={`
              list-disc
              ml-5
              md:ml-6
              space-y-2
              text-sm
              md:text-base
              ${
                darkMode
                  ? "text-gray-300"
                  : "text-gray-700"
              }
            `}
          >

            {
              career.requiredDegree?.map(
                (degree, index) => (

                  <li key={index}>

                    {degree}

                  </li>

                )
              )
            }


          </ul>


        </div>



        {/* Skills Required */}

        <div className="mt-8 md:mt-10">


          <h2
            className="
              text-xl
              md:text-2xl
              font-bold
              mb-3
            "
          >

            🛠 Skills Required

          </h2>


          <ul
            className={`
              list-disc
              ml-5
              md:ml-6
              space-y-2
              text-sm
              md:text-base
              ${
                darkMode
                  ? "text-gray-300"
                  : "text-gray-700"
              }
            `}
          >

            {
              career.skills?.map(
                (skill, index) => (

                  <li key={index}>

                    {skill}

                  </li>

                )
              )
            }


          </ul>


        </div>



        {/* Top Recruiters */}

        <div className="mt-8 md:mt-10">


          <h2
            className="
              text-xl
              md:text-2xl
              font-bold
              mb-3
            "
          >

            🏢 Top Recruiters

          </h2>


          <ul
            className={`
              list-disc
              ml-5
              md:ml-6
              space-y-2
              text-sm
              md:text-base
              ${
                darkMode
                  ? "text-gray-300"
                  : "text-gray-700"
              }
            `}
          >

            {
              career.topRecruiters?.map(
                (company, index) => (

                  <li key={index}>

                    {company}

                  </li>

                )
              )
            }


          </ul>


        </div>



        {/* Eligible Streams */}

        <div className="mt-8 md:mt-10">


          <h2
            className="
              text-xl
              md:text-2xl
              font-bold
              mb-3
            "
          >

            📚 Eligible Streams

          </h2>


          <ul
            className={`
              list-disc
              ml-5
              md:ml-6
              space-y-2
              text-sm
              md:text-base
              ${
                darkMode
                  ? "text-gray-300"
                  : "text-gray-700"
              }
            `}
          >

            {
              career.streamEligibility?.map(
                (stream, index) => (

                  <li key={index}>

                    {stream}

                  </li>

                )
              )
            }


          </ul>


        </div>


      </div>


    </div>

  );

};


export default CareerDetails;