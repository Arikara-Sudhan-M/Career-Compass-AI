import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode } = useTheme();

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);


  // Get user data
  const user = JSON.parse(
    localStorage.getItem("user")
  );


  // Logout Function
  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged out successfully");

    navigate("/");
  };


  return (

    <nav
      className={`
        shadow-md
        transition-all duration-300
        ${
          darkMode
          ? "bg-slate-900 text-white"
          : "bg-white text-slate-900"
        }
      `}
    >


      {/* Top Navbar */}
      <div
        className="
          px-4 md:px-8
          py-4
          flex
          justify-between
          items-center
        "
      >


        {/* Logo */}
        <Link
          to="/"
          className="
            text-xl md:text-2xl
            font-bold
          "
        >
          🚀 Career Compass AI
        </Link>


        {/* Desktop Navigation */}
        <div
          className="
            hidden md:flex
            items-center
            gap-6
          "
        >


          <Link
            to="/"
            className="hover:text-blue-500 transition"
          >
            Home
          </Link>


          {
            user ? (
              <>
              
                <Link
                  to="/dashboard"
                  className="hover:text-blue-500 transition"
                >
                  Dashboard
                </Link>


                <Link
                  to="/ai-chat"
                  className="hover:text-blue-500 transition"
                >
                  AI Assistant
                </Link>


                <p
                  className="
                    font-semibold
                    text-blue-500
                  "
                >
                  👤 {user.name}
                </p>


                <button
                  onClick={handleLogout}
                  className="
                    bg-red-600
                    hover:bg-red-700
                    text-white
                    px-4 py-2
                    rounded-lg
                    transition
                  "
                >
                  Logout
                </button>

              </>
            ) : (
              <>

                <Link
                  to="/login"
                  className="hover:text-blue-500 transition"
                >
                  Login
                </Link>


                <Link
                  to="/register"
                  className="hover:text-blue-500 transition"
                >
                  Register
                </Link>

              </>
            )
          }


          <DarkModeToggle />

        </div>


        {/* Mobile Right Side */}
        <div className="flex md:hidden items-center gap-3">


          <DarkModeToggle />


          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              text-2xl
              font-bold
            "
          >
            {menuOpen ? "✕" : "☰"}
          </button>


        </div>


      </div>


      {/* Mobile Menu */}
      {
        menuOpen && (

          <div
            className="
              md:hidden
              px-5
              pb-5
              flex
              flex-col
              gap-4
              border-t
              border-gray-700
            "
          >


            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-500"
            >
              🏠 Home
            </Link>


            {
              user ? (
                <>


                  <Link
                    to="/dashboard"
                    onClick={() => setMenuOpen(false)}
                  >
                    📊 Dashboard
                  </Link>


                  <Link
                    to="/ai-chat"
                    onClick={() => setMenuOpen(false)}
                  >
                    🤖 AI Assistant
                  </Link>


                  <p
                    className="
                      text-blue-500
                      font-semibold
                    "
                  >
                    👤 {user.name}
                  </p>


                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      handleLogout();
                    }}
                    className="
                      bg-red-600
                      text-white
                      px-4
                      py-2
                      rounded-lg
                    "
                  >
                    🚪 Logout
                  </button>


                </>
              ) : (
                <>


                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                  >
                    🔑 Login
                  </Link>


                  <Link
                    to="/register"
                    onClick={() => setMenuOpen(false)}
                  >
                    📝 Register
                  </Link>


                </>
              )
            }


          </div>

        )
      }


    </nav>

  );
};


export default Navbar;