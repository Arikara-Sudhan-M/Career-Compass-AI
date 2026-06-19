import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useTheme } from "../context/ThemeContext";
import API_URL from "../config/api";

const AIChat = () => {

  const { darkMode } = useTheme();
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);
  const textAreaRef = useRef(null);


  // Current Time
  const getCurrentTime = () => {

    return new Date().toLocaleTimeString(
      [],
      {
        hour: "2-digit",
        minute: "2-digit",
      }
    );

  };


  // Auto Scroll
  useEffect(() => {

    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [chat, loading]);


  // Textarea Auto Height
  const handleChange = (e) => {

    setMessage(e.target.value);

    e.target.style.height = "auto";

    e.target.style.height =
      Math.min(e.target.scrollHeight, 150) + "px";

  };


  // Ask AI
  const handleAskAI = async (customMessage = null) => {

    const question = customMessage || message;


    if (!question.trim()) {

      toast.warning(
        "Please enter your question first ⚠️"
      );

      return;

    }


    if (loading) return;


    setChat(prev => [
      ...prev,
      {
        role: "user",
        text: question,
        time: getCurrentTime(),
      }
    ]);


    setMessage("");


    if (textAreaRef.current) {

      textAreaRef.current.style.height = "50px";

    }


    setLoading(true);


    try {

      const response = await axios.post(
        `${API_URL}/ai/chat`,
        {
          message: question,
        }
      );


      setChat(prev => [
        ...prev,
        {
          role: "ai",
          text: response.data.reply,
          time: getCurrentTime(),
        }
      ]);


    }
    catch (error) {


      console.log(error);


      toast.error(
        "Failed to get AI response ❌"
      );


      setChat(prev => [
        ...prev,
        {
          role: "ai",
          text:
            "❌ Sorry, I couldn't process your request. Please try again.",
          time: getCurrentTime(),
        }
      ]);

    }
    finally {

      setLoading(false);

    }

  };


  // New Chat
  const clearChat = () => {

    setChat([]);

    toast.success(
      "Started a new chat ✨"
    );

  };


  // Enter Key Send
  const handleKeyDown = (e) => {

    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {

      e.preventDefault();

      handleAskAI();

    }

  };


  return (

    <motion.div

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}

      className={`
        min-h-screen
        transition-all
        duration-500
        ${
          darkMode
            ? "bg-slate-900"
            : "bg-gray-100"
        }
      `}
    >


      {/* Header */}

      <header
        className={`
          px-4
          py-3
          shadow-lg
          text-white
          ${
            darkMode
              ? "bg-gradient-to-r from-slate-900 to-blue-900"
              : "bg-gradient-to-r from-blue-600 to-indigo-700"
          }
        `}
      >


        <div
          className="
            max-w-5xl
            mx-auto
            flex
            justify-between
            items-center
          "
        >


          <button
            onClick={() => navigate("/dashboard")}
            className="
              px-3 py-2
              text-sm
              rounded-lg
              bg-black/20
              hover:bg-black/30
            "
          >
            ⬅ Back
          </button>


          <button
            onClick={clearChat}
            className="
              px-3 py-2
              text-sm
              rounded-lg
              bg-black/20
              hover:bg-black/30
            "
          >
            📝 New
          </button>

        </div>


        <div className="text-center mt-3">


          <h1
            className="
              text-2xl
              md:text-4xl
              font-bold
            "
          >
            🤖 Career Compass AI
          </h1>


          <p
            className="
              hidden md:block
              text-blue-100
              mt-1
            "
          >
            Your intelligent career guidance assistant
          </p>


        </div>

      </header>
            {/* Main Content */}

      <div
        className="
          max-w-5xl
          mx-auto
          px-3
          md:px-5
          py-4
          flex
          flex-col
          min-h-[75vh]
        "
      >


        {
          chat.length === 0 && (


            <motion.div

              initial={{
                opacity: 0,
                y: 20
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              className="text-center"
            >


              {/* AI Logo */}

              <div
                className="
                  text-4xl
                  md:text-7xl
                  animate-pulse
                "
              >
                🤖
              </div>


              {/* Welcome Heading */}

              <h2
                className={`
                  mt-3
                  text-2xl
                  md:text-5xl
                  font-bold
                  ${
                    darkMode
                    ? "text-white"
                    : "text-slate-900"
                  }
                `}
              >
                Welcome to Career Compass AI
              </h2>


              {/* Description */}

              <p
                className="
                  mt-3
                  text-sm
                  md:text-lg
                  text-gray-400
                  max-w-3xl
                  mx-auto
                "
              >
                Ask your career questions and get
                personalized AI guidance 🚀
              </p>


              {/* Career Suggestions */}

              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-3
                  mt-6
                "
              >


                {/* CSE */}

                <button
                  onClick={() =>
                    handleAskAI(
                      "Suggest the best careers after Computer Science Engineering"
                    )
                  }
                  className={`
                    p-3 md:p-5
                    rounded-xl md:rounded-2xl
                    shadow-lg
                    text-left
                    text-sm md:text-base
                    transition
                    hover:scale-105
                    ${
                      darkMode
                        ? "bg-slate-800 text-white"
                        : "bg-white text-slate-900"
                    }
                  `}
                >
                  💻 Best Careers After CSE
                </button>


                {/* UI UX */}

                <button
                  onClick={() =>
                    handleAskAI(
                      "Give me a complete roadmap to become a UI/UX Designer"
                    )
                  }
                  className={`
                    p-3 md:p-5
                    rounded-xl md:rounded-2xl
                    shadow-lg
                    text-left
                    text-sm md:text-base
                    transition
                    hover:scale-105
                    ${
                      darkMode
                        ? "bg-slate-800 text-white"
                        : "bg-white text-slate-900"
                    }
                  `}
                >
                  🎨 UI/UX Designer Roadmap
                </button>


                {/* Data Analyst */}

                <button
                  onClick={() =>
                    handleAskAI(
                      "How to become a Data Analyst? Give skills, roadmap and salary details."
                    )
                  }
                  className={`
                    p-3 md:p-5
                    rounded-xl md:rounded-2xl
                    shadow-lg
                    text-left
                    text-sm md:text-base
                    transition
                    hover:scale-105
                    ${
                      darkMode
                        ? "bg-slate-800 text-white"
                        : "bg-white text-slate-900"
                    }
                  `}
                >
                  📊 Become a Data Analyst
                </button>


                {/* Cloud Engineer */}

                <button
                  onClick={() =>
                    handleAskAI(
                      "Explain the complete roadmap to become a Cloud Engineer."
                    )
                  }
                  className={`
                    p-3 md:p-5
                    rounded-xl md:rounded-2xl
                    shadow-lg
                    text-left
                    text-sm md:text-base
                    transition
                    hover:scale-105
                    ${
                      darkMode
                        ? "bg-slate-800 text-white"
                        : "bg-white text-slate-900"
                    }
                  `}
                >
                  ☁️ Cloud Engineer Roadmap
                </button>


              </div>


              {/* Search Input */}

              <div
                className="
                  mt-10
                  flex
                  gap-2
                "
              >


                <textarea

                  ref={textAreaRef}
                  value={message}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  rows="1"

                  placeholder="Ask your career question..."


                  className={`
                    flex-1
                    p-3
                    rounded-xl
                    resize-none
                    outline-none
                    text-sm
                    ${
                      darkMode
                        ? "bg-slate-800 text-white"
                        : "bg-gray-100"
                    }
                  `}
                />


                <button
                  onClick={handleAskAI}
                  disabled={loading}

                  className="
                    px-5
                    rounded-xl
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    font-semibold
                  "
                >
                  🚀
                </button>


              </div>


              {/* GroQ AI Footer */}

              <p
                className="
                  mt-8
                  pb-3
                  text-center
                  text-xs
                  leading-relaxed
                  text-gray-500
                "
              >
                ⚡ Powered by GroQ AI
                <br />
                Career Compass AI may make mistakes.
                Verify important career decisions.
              </p>


            </motion.div>


          )

        }
                {/* Chat Messages */}

        <div className="mt-6 space-y-5">

          {
            chat.map((msg, index) => (

              <motion.div
                key={index}

                initial={{
                  opacity: 0,
                  y: 10
                }}

                animate={{
                  opacity: 1,
                  y: 0
                }}

                className={`
                  flex
                  ${
                    msg.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }
                `}
              >


                <div
                  className={`
                    w-full
                    sm:w-auto
                    sm:max-w-3xl
                    p-4
                    rounded-2xl
                    shadow-lg
                    break-words
                    ${
                      msg.role === "user"
                        ? "bg-blue-600 text-white"
                        : darkMode
                        ? "bg-slate-800 text-white"
                        : "bg-white text-slate-900"
                    }
                  `}
                >


                  {/* Message Header */}

                  <div className="flex justify-between text-xs mb-2">


                    <span className="font-bold">

                      {
                        msg.role === "user"
                          ? "👤 You"
                          : "🤖 Career Compass AI"
                      }

                    </span>


                    <span>
                      {msg.time}
                    </span>


                  </div>


                  {/* Message Content */}

                  <ReactMarkdown>

                    {msg.text}

                  </ReactMarkdown>


                </div>


              </motion.div>

            ))

          }


          {/* AI Thinking Loader */}

          {
            loading && (

              <motion.div

                initial={{
                  opacity: 0
                }}

                animate={{
                  opacity: 1
                }}

                className={`
                  inline-block
                  p-3
                  rounded-xl
                  shadow-md
                  ${
                    darkMode
                      ? "bg-slate-800 text-white"
                      : "bg-white text-slate-900"
                  }
                `}
              >

                🤖 AI is thinking...

              </motion.div>

            )

          }


          {/* Auto Scroll */}

          <div ref={chatEndRef}></div>


        </div>


      </div>



      {/* Sticky Input After Chat Starts */}

      {
        chat.length > 0 && (

          <div

            className={`
              sticky
              bottom-0
              border-t
              p-3
              shadow-lg
              ${
                darkMode
                  ? "bg-slate-900 border-slate-700"
                  : "bg-white border-gray-300"
              }
            `}
          >


            <div
              className="
                max-w-5xl
                mx-auto
                flex
                gap-3
              "
            >


              <textarea

                ref={textAreaRef}

                value={message}

                onChange={handleChange}

                onKeyDown={handleKeyDown}

                rows="1"

                placeholder="Ask another career question..."


                className={`
                  flex-1
                  p-3
                  rounded-xl
                  resize-none
                  outline-none
                  text-sm
                  ${
                    darkMode
                      ? "bg-slate-800 text-white"
                      : "bg-gray-100 text-slate-900"
                  }
                `}
              />


              <button

                onClick={handleAskAI}

                disabled={loading}

                className="
                  px-5
                  rounded-xl
                  bg-blue-600
                  hover:bg-blue-700
                  disabled:bg-gray-500
                  text-white
                  font-semibold
                "
              >

                🚀

              </button>


            </div>


            {/* GroQ Footer */}

            <p
              className="
                text-center
                text-xs
                text-gray-500
                mt-3
              "
            >

              ⚡ Powered by GroQ AI

            </p>


          </div>

        )

      }


    </motion.div>

  );

};


export default AIChat;