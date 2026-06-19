import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTheme } from "../context/ThemeContext";
import Loader from "../components/Loader";
import API_URL from "../config/api";

const Dashboard = () => {
  const { darkMode } = useTheme();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const navigate = useNavigate();

  const [careers, setCareers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetchCareers();
  }, []);


  // Fetch Careers
  const fetchCareers = async () => {

    try {

      const res = await axios.get(
  `${API_URL}/careers`
);

      setCareers(
        res.data.careers
      );

    } catch (error) {

      console.log(error);

      toast.error(
        "Failed to load careers ❌"
      );

    } finally {

      setLoading(false);

    }

  };


  // Show Loader
  if (loading) {
    return <Loader />;
  }


  const searchTerm =
    search.toLowerCase().trim();


  // Recommended Careers Based On Stream
  const recommendedCareers =
    careers.filter((career) => {

      if (user?.stream === "Science") {

        return [
          "IT",
          "Engineering",
          "Medical"
        ].includes(
          career.category
        );

      }


      if (user?.stream === "Commerce") {

        return [
          "Commerce",
          "Finance",
          "Banking",
          "Marketing"
        ].includes(
          career.category
        );

      }


      if (user?.stream === "Arts") {

        return [
          "Design",
          "Media",
          "Civil Services"
        ].includes(
          career.category
        );

      }


      return false;

    });


  // Search Filter
  const filteredCareers =
    careers.filter((career) => {

      const careerName =
        career.careerName?.toLowerCase() || "";

      const category =
        career.category?.toLowerCase() || "";

      const futureDemand =
        career.futureDemand?.toLowerCase() || "";

      const salaryRange =
        career.salaryRange?.toLowerCase() || "";


      if (!searchTerm)
        return true;


      return (
        careerName.includes(searchTerm) ||
        category === searchTerm ||
        futureDemand === searchTerm ||
        salaryRange.includes(searchTerm)
      );

    });


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

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="
          mb-6
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-5
          py-2
          rounded-lg
          transition-all
          duration-300
          hover:scale-105
        "
      >
        ⬅ Back
      </button>


      {/* Dashboard Heading */}
      <h1 className="text-4xl font-bold mb-6">
        Dashboard
      </h1>


      {/* User Profile */}
      <div
        className={`
          p-6
          rounded-lg
          mb-10
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
                <h2 className="text-2xl font-semibold mb-4">
          Welcome, {user?.name}
        </h2>

        <p className="mb-2">
          <strong>Email:</strong> {user?.email}
        </p>

        <p className="mb-2">
          <strong>Stream:</strong> {user?.stream}
        </p>

        <p className="mb-4">
          <strong>Role:</strong> {user?.role}
        </p>


        {/* Dashboard Action Buttons */}
        <div className="flex gap-4 flex-wrap">

          {/* Saved Careers */}
          <button
            onClick={() =>
              navigate("/saved-careers")
            }
            className="
              bg-pink-600
              hover:bg-pink-700
              px-4
              py-2
              rounded-lg
              text-white
              transition-all
              duration-300
              hover:scale-105
            "
          >
            ❤️ My Saved Careers
          </button>


          {/* Career Comparison */}
          <button
            onClick={() =>
              navigate("/career-comparison")
            }
            className="
              bg-purple-600
              hover:bg-purple-700
              px-4
              py-2
              rounded-lg
              text-white
              transition-all
              duration-300
              hover:scale-105
            "
          >
            ⚖️ Compare Careers
          </button>


          {/* Career Quiz */}
          <button
            onClick={() =>
              navigate("/career-quiz")
            }
            className="
              bg-green-600
              hover:bg-green-700
              px-4
              py-2
              rounded-lg
              text-white
              transition-all
              duration-300
              hover:scale-105
            "
          >
            🧠 Career Quiz
          </button>


          {/* AI Career Assistant */}
          <button
            onClick={() =>
              navigate("/ai-chat")
            }
            className="
              bg-blue-600
              hover:bg-blue-700
              px-4
              py-2
              rounded-lg
              text-white
              transition-all
              duration-300
              hover:scale-105
            "
          >
            🤖 AI Assistant
          </button>

        </div>

      </div>


      {/* Recommended Careers Heading */}
      <h2
        className={`
          text-3xl
          font-bold
          mb-6
          ${
            darkMode
              ? "text-green-400"
              : "text-green-700"
          }
        `}
      >
        🎯 Recommended Careers For You
      </h2>


      {/* Recommended Career Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">

        {
          recommendedCareers
            .slice(0, 6)
            .map((career) => (

              <div
                key={career._id}
                className={`
                  p-5
                  rounded-lg
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-2xl
                  ${
                    darkMode
                      ? "bg-green-900 text-white"
                      : "bg-green-100 text-slate-900"
                  }
                `}
              >

                <h3 className="text-xl font-bold mb-3">
                  {career.careerName}
                </h3>


                <p className="mb-2">
                  <strong>Category:</strong>{" "}
                  {career.category}
                </p>


                <p className="mb-2">
                  <strong>Salary:</strong>{" "}
                  {career.salaryRange}
                </p>


                <p className="mb-2">
                  <strong>Future Demand:</strong>{" "}
                  {career.futureDemand}
                </p>


                <Link
                  to={`/career/${career._id}`}
                  className="
                    inline-block
                    mt-4
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

              </div>

          ))

        }

      </div>
            {/* Search Section */}
      <div className="mb-8">

        <input
          type="text"
          placeholder="🔍 Search careers, category, demand, salary..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className={`
            w-full
            md:w-2/4
            p-4
            rounded-lg
            outline-none
            shadow-md
            transition-all
            duration-300
            ${
              darkMode
                ? "bg-slate-800 text-white border border-slate-700"
                : "bg-white text-slate-900 border border-gray-300"
            }
          `}
        />

      </div>


      {/* Available Careers Heading */}
      <h2
        className={`
          text-3xl
          font-bold
          mb-6
          ${
            darkMode
              ? "text-blue-400"
              : "text-blue-700"
          }
        `}
      >
        📚 Explore All Careers
      </h2>


      {/* Career Cards */}
      <div className="grid md:grid-cols-3 gap-6">

        {
          filteredCareers.length > 0 ? (

            filteredCareers.map((career) => (

              <div
                key={career._id}
                className={`
                  p-6
                  rounded-xl
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-2xl
                  ${
                    darkMode
                      ? "bg-slate-800 text-white"
                      : "bg-white text-slate-900"
                  }
                `}
              >

                {/* Career Name */}
                <h3 className="text-xl font-bold mb-3">
                  {career.careerName}
                </h3>


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
                <p className="mb-2">
                  <strong>Future Demand:</strong>{" "}
                  {career.futureDemand}
                </p>


                {/* Growth Rate */}
                <p className="mb-2">
                  <strong>Growth Rate:</strong>{" "}
                  {career.growthRate}%
                </p>


                {/* Description */}
                <p
                  className={`
                    mt-3
                    text-sm
                    ${
                      darkMode
                        ? "text-gray-300"
                        : "text-gray-600"
                    }
                  `}
                >
                  {career.description}
                </p>


                {/* View Details Button */}
                <Link
                  to={`/career/${career._id}`}
                  className="
                    inline-block
                    mt-5
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    px-5
                    py-2
                    rounded-lg
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  View Details
                </Link>


              </div>

            ))

          ) : (

            <div
              className={`
                col-span-3
                text-center
                text-2xl
                mt-10
                ${
                  darkMode
                    ? "text-gray-400"
                    : "text-gray-600"
                }
              `}
            >
              😕 No careers found matching your search
            </div>

          )
        }

      </div>
          </div>

  );

};

export default Dashboard;