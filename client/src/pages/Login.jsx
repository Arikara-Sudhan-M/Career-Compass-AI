import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useTheme } from "../context/ThemeContext";
import API_URL from "../config/api";

const Login = () => {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${API_URL}/auth/login`,
        {
          email,
          password,
        }
      );

      // Store JWT Token
      localStorage.setItem(
        "token",
        res.data.token
      );

      // Store User Details
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      // Success Notification
      toast.success(
        `Welcome back, ${res.data.user.name} 🎉`
      );

      // Clear Form
      setEmail("");
      setPassword("");

      // Redirect to Dashboard
      setTimeout(() => {
        navigate("/dashboard");
      }, 1200);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Login Failed ❌"
      );

      console.log(error);

    }
  };


  return (
    <div
      className={`
        min-h-screen
        flex
        items-center
        justify-center
        px-4
        py-6
        transition-all
        duration-500
        ${
          darkMode
            ? "bg-slate-900"
            : "bg-gray-100"
        }
      `}
    >

      {/* Login Card */}
      <div
        className={`
          w-full
          max-w-md
          p-6
          md:p-8
          rounded-2xl
          shadow-2xl
          transition-all
          duration-500
          ${
            darkMode
              ? "bg-slate-800 text-white"
              : "bg-white text-slate-900"
          }
        `}
      >

        {/* Heading */}
        <h1
          className="
            text-2xl
            md:text-3xl
            font-bold
            text-center
            mb-2
          "
        >
          Welcome Back 👋
        </h1>


        <p
          className={`
            text-center
            mb-6
            text-sm
            md:text-base
            ${
              darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }
          `}
        >
          Login to continue your career journey
        </p>


        {/* Login Form */}
        <form
          className="space-y-5"
          onSubmit={handleLogin}
        >

          {/* Email */}
          <div>

            <label
              className={`
                block
                mb-2
                text-sm
                font-medium
                ${
                  darkMode
                    ? "text-gray-300"
                    : "text-gray-700"
                }
              `}
            >
              Email Address
            </label>


            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className={`
                w-full
                p-3
                rounded-xl
                outline-none
                text-sm
                transition-all
                duration-300
                focus:ring-2
                focus:ring-blue-500
                ${
                  darkMode
                    ? "bg-slate-700 text-white"
                    : "bg-gray-100 text-slate-900 border border-gray-300"
                }
              `}
              required
            />

          </div>


          {/* Password */}
          <div>

            <label
              className={`
                block
                mb-2
                text-sm
                font-medium
                ${
                  darkMode
                    ? "text-gray-300"
                    : "text-gray-700"
                }
              `}
            >
              Password
            </label>


            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className={`
                w-full
                p-3
                rounded-xl
                outline-none
                text-sm
                transition-all
                duration-300
                focus:ring-2
                focus:ring-blue-500
                ${
                  darkMode
                    ? "bg-slate-700 text-white"
                    : "bg-gray-100 text-slate-900 border border-gray-300"
                }
              `}
              required
            />

          </div>


          {/* Login Button */}
          <button
            type="submit"
            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              text-white
              py-3
              rounded-xl
              font-semibold
              transition-all
              duration-300
              hover:scale-[1.02]
              active:scale-95
            "
          >
            Login
          </button>

        </form>


        {/* Register Link */}
        <p
          className={`
            text-center
            mt-6
            text-sm
            ${
              darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }
          `}
        >
          Don't have an account?{" "}

          <Link
            to="/register"
            className="
              text-blue-500
              font-semibold
              hover:underline
            "
          >
            Create Account
          </Link>

        </p>

      </div>

    </div>
  );
};


export default Login;