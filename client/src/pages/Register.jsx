import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useTheme } from "../context/ThemeContext";
import API_URL from "../config/api";

const Register = () => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    stream: "Science",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.warning("Passwords do not match ⚠️");
      return;
    }

    try {
      const res = await axios.post(
        `${API_URL}/auth/register`,
        {
          name: formData.name,
          email: formData.email,
          stream: formData.stream,
          password: formData.password,
        }
      );


      toast.success(
        res.data.message ||
        "Account created successfully 🎉"
      );


      setFormData({
        name: "",
        email: "",
        stream: "Science",
        password: "",
        confirmPassword: "",
      });


      setTimeout(() => {
        navigate("/login");
      }, 1500);


    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Registration Failed ❌"
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

      {/* Register Card */}

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
          Create Account 🚀
        </h1>


        <p
          className={`
            text-center
            text-sm
            md:text-base
            mb-6
            ${
              darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }
          `}
        >
          Start your AI-powered career journey today
        </p>


        {/* Form */}

        <form
          className="space-y-5"
          onSubmit={handleSubmit}
        >


          {/* Full Name */}

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
              Full Name
            </label>


            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
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
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
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


          {/* Stream */}

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
              12th Stream
            </label>


            <select
              name="stream"
              value={formData.stream}
              onChange={handleChange}
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
            >

              <option value="Science">Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Arts">Arts</option>

            </select>

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
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create password"
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


          {/* Confirm Password */}

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
              Confirm Password
            </label>


            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
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


          {/* Register Button */}

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
            Create Account
          </button>


        </form>


        {/* Login Link */}

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

          Already have an account?{" "}

          <Link
            to="/login"
            className="
              text-blue-500
              font-semibold
              hover:underline
            "
          >
            Login
          </Link>

        </p>


      </div>

    </div>
  );
};


export default Register;