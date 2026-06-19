import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import API_URL from "../config/api";


// Keep your existing 23 questions array exactly here
const questions = [
   {
    question: "Which subject do you enjoy the most?",
    options: [
      { text: "Mathematics & Computer Science", category: "IT" },
      { text: "Biology & Healthcare", category: "Medical" },
      { text: "Business & Economics", category: "Commerce" },
      { text: "Arts & Creativity", category: "Design" },
      { text: "History & Politics", category: "Government" }
    ]
  },

  {
    question: "What type of work excites you?",
    options: [
      { text: "Building software and technology", category: "IT" },
      { text: "Treating and helping patients", category: "Medical" },
      { text: "Managing companies and money", category: "Commerce" },
      { text: "Creating designs and media", category: "Design" },
      { text: "Serving society and administration", category: "Government" }
    ]
  },

  {
    question: "Which skill best describes you?",
    options: [
      { text: "Logical thinking", category: "IT" },
      { text: "Empathy and caring", category: "Medical" },
      { text: "Leadership and planning", category: "Commerce" },
      { text: "Creativity and imagination", category: "Design" },
      { text: "Decision making and responsibility", category: "Government" }
    ]
  },

  {
    question: "Your ideal workplace would be?",
    options: [
      { text: "Tech company", category: "IT" },
      { text: "Hospital or laboratory", category: "Medical" },
      { text: "Corporate office", category: "Commerce" },
      { text: "Design studio", category: "Design" },
      { text: "Government office", category: "Government" }
    ]
  },

  {
    question: "Which activity do you enjoy the most?",
    options: [
      { text: "Coding and solving technical problems", category: "IT" },
      { text: "Studying human health", category: "Medical" },
      { text: "Analyzing markets and finance", category: "Commerce" },
      { text: "Drawing, editing or designing", category: "Design" },
      { text: "Leading people and managing systems", category: "Government" }
    ]
  },

  {
    question: "What kind of challenges do you like?",
    options: [
      { text: "Technical challenges", category: "IT" },
      { text: "Health and science challenges", category: "Medical" },
      { text: "Business problems", category: "Commerce" },
      { text: "Creative challenges", category: "Design" },
      { text: "Social and public issues", category: "Government" }
    ]
  },

  {
    question: "Which tool would you like to master?",
    options: [
      { text: "Programming software", category: "IT" },
      { text: "Medical equipment", category: "Medical" },
      { text: "Financial analysis tools", category: "Commerce" },
      { text: "Design software", category: "Design" },
      { text: "Policy and law systems", category: "Government" }
    ]
  },

  {
    question: "What motivates you the most?",
    options: [
      { text: "Innovation and technology", category: "IT" },
      { text: "Saving and improving lives", category: "Medical" },
      { text: "Building successful businesses", category: "Commerce" },
      { text: "Expressing creativity", category: "Design" },
      { text: "Improving society", category: "Government" }
    ]
  },

  {
    question: "Which project would you choose?",
    options: [
      { text: "Create a mobile app", category: "IT" },
      { text: "Research a disease", category: "Medical" },
      { text: "Create a business plan", category: "Commerce" },
      { text: "Design a brand logo", category: "Design" },
      { text: "Solve a community problem", category: "Government" }
    ]
  },

  {
    question: "What is your strongest quality?",
    options: [
      { text: "Problem solving", category: "IT" },
      { text: "Patience and care", category: "Medical" },
      { text: "Leadership", category: "Commerce" },
      { text: "Original thinking", category: "Design" },
      { text: "Responsibility", category: "Government" }
    ]
  },

  {
    question: "What type of career growth do you prefer?",
    options: [
      { text: "Technology and innovation", category: "IT" },
      { text: "Healthcare expertise", category: "Medical" },
      { text: "Management and entrepreneurship", category: "Commerce" },
      { text: "Creative industries", category: "Design" },
      { text: "Public service leadership", category: "Government" }
    ]
  },

  {
    question: "Which environment suits your personality?",
    options: [
      { text: "Fast-changing technology world", category: "IT" },
      { text: "Healthcare and research environment", category: "Medical" },
      { text: "Business environment", category: "Commerce" },
      { text: "Creative workspace", category: "Design" },
      { text: "Administrative and social work", category: "Government" }
    ]
  },
  {
    question: "Which subject would you choose for a project?",
    options: [
      { text: "Artificial Intelligence", category: "IT" },
      { text: "Human Anatomy", category: "Medical" },
      { text: "Marketing Strategy", category: "Commerce" },
      { text: "Graphic Design", category: "Design" },
      { text: "Public Administration", category: "Government" }
    ]
  },

  {
    question: "What type of achievement makes you proud?",
    options: [
      { text: "Developing a new application", category: "IT" },
      { text: "Helping a patient recover", category: "Medical" },
      { text: "Growing a successful company", category: "Commerce" },
      { text: "Creating amazing artwork", category: "Design" },
      { text: "Making a positive social impact", category: "Government" }
    ]
  },

  {
    question: "What do you enjoy learning about?",
    options: [
      { text: "Computers and new technologies", category: "IT" },
      { text: "Health and medicine", category: "Medical" },
      { text: "Money and businesses", category: "Commerce" },
      { text: "Art and creativity", category: "Design" },
      { text: "Society and laws", category: "Government" }
    ]
  },

  {
    question: "Which career activity sounds interesting?",
    options: [
      { text: "Writing software code", category: "IT" },
      { text: "Performing medical procedures", category: "Medical" },
      { text: "Managing company operations", category: "Commerce" },
      { text: "Designing products and visuals", category: "Design" },
      { text: "Managing public services", category: "Government" }
    ]
  },

  {
    question: "How do you like to solve problems?",
    options: [
      { text: "Using technology and logic", category: "IT" },
      { text: "Using scientific knowledge", category: "Medical" },
      { text: "Using business strategies", category: "Commerce" },
      { text: "Using creativity and imagination", category: "Design" },
      { text: "Using policies and planning", category: "Government" }
    ]
  },

  {
    question: "Which professional do you admire most?",
    options: [
      { text: "Software Engineer", category: "IT" },
      { text: "Doctor", category: "Medical" },
      { text: "CEO or Entrepreneur", category: "Commerce" },
      { text: "Designer or Artist", category: "Design" },
      { text: "IAS Officer", category: "Government" }
    ]
  },

  {
    question: "What type of skills do you want to develop?",
    options: [
      { text: "Programming and technology", category: "IT" },
      { text: "Medical and research skills", category: "Medical" },
      { text: "Management and finance", category: "Commerce" },
      { text: "Design and creativity", category: "Design" },
      { text: "Leadership and administration", category: "Government" }
    ]
  },

  {
    question: "What kind of impact do you want to create?",
    options: [
      { text: "Build useful technologies", category: "IT" },
      { text: "Improve people's health", category: "Medical" },
      { text: "Create economic growth", category: "Commerce" },
      { text: "Make the world more creative", category: "Design" },
      { text: "Serve and improve society", category: "Government" }
    ]
  },

  {
    question: "Which workplace sounds exciting?",
    options: [
      { text: "Software company", category: "IT" },
      { text: "Hospital", category: "Medical" },
      { text: "Corporate headquarters", category: "Commerce" },
      { text: "Creative agency", category: "Design" },
      { text: "Government department", category: "Government" }
    ]
  },

  {
    question: "What is your long-term goal?",
    options: [
      { text: "Create innovative technology", category: "IT" },
      { text: "Become a healthcare expert", category: "Medical" },
      { text: "Become a business leader", category: "Commerce" },
      { text: "Become a creative professional", category: "Design" },
      { text: "Become a public leader", category: "Government" }
    ]
  },

  {
    question: "Which field would you choose for your future?",
    options: [
      { text: "Technology", category: "IT" },
      { text: "Healthcare", category: "Medical" },
      { text: "Business", category: "Commerce" },
      { text: "Creative Arts", category: "Design" },
      { text: "Civil Services", category: "Government" }
    ]
  }
];

const CareerQuiz = () => {

  // Theme Context
  const { darkMode } = useTheme();


  // States
  const [answers, setAnswers] = useState({});
  const [scores, setScores] = useState({});
  const [result, setResult] = useState([]);
  const [recommendedCareers, setRecommendedCareers] = useState([]);


  // Handle option selection
  const handleAnswer = (questionIndex, category) => {

    setAnswers({
      ...answers,
      [questionIndex]: category,
    });

  };


  // Calculate Career Match
  const calculateResult = async () => {

    if (Object.keys(answers).length !== questions.length) {

      toast.warning(
        "Please answer all questions ⚠️"
      );

      return;

    }


    let categoryScores = {};


    Object.values(answers).forEach((category) => {

      categoryScores[category] =
        (categoryScores[category] || 0) + 1;

    });


    // Convert score into percentage

    const percentages = Object.entries(categoryScores)
      .map(([category, score]) => ({

        category,

        percentage: Math.round(
          (score / questions.length) * 100
        ),

      }))

      .sort(
        (a, b) => b.percentage - a.percentage
      );


    setScores(categoryScores);

    setResult(percentages);


    try {


      const response = await axios.get(
        `${API_URL}/careers`
      );


      const careers = response.data.careers;


      const matchedCareers = careers.filter(
        (career) =>
          percentages
            .slice(0, 3)
            .some(
              (item) =>
                item.category === career.category
            )
      );


      setRecommendedCareers(
        matchedCareers.slice(0, 6)
      );


    } catch (error) {


      console.log(error);


      toast.error(
        "Failed to fetch career recommendations ❌"
      );


    }

  };


  // Reset Quiz

  const resetQuiz = () => {


    setAnswers({});

    setScores({});

    setResult([]);

    setRecommendedCareers([]);


  };


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


      {/* Header */}

      <div className="text-center mb-8 md:mb-10">


        <h1
          className="
            text-3xl
            md:text-5xl
            font-bold
          "
        >

          🧠 AI Career Assessment Quiz

        </h1>


        <p

          className={`
            mt-3
            text-sm
            md:text-lg
            px-2
            ${
              darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }
          `}

        >

          Answer all questions and discover your best career path

        </p>


      </div>



      {/* Progress Bar */}

      <div className="mb-6 md:mb-8">


        <p
          className="
            mb-2
            font-semibold
            text-sm
            md:text-base
          "
        >

          Progress:
          {" "}
          {Object.keys(answers).length}
          {" / "}
          {questions.length}
          {" Questions Completed"}

        </p>


        <div

          className={`
            w-full
            h-3
            md:h-4
            rounded-full
            overflow-hidden
            ${
              darkMode
                ? "bg-gray-700"
                : "bg-gray-300"
            }
          `}

        >


          <div

            className="
              h-full
              bg-green-500
              rounded-full
              transition-all
              duration-500
            "

            style={{

              width: `${
                (Object.keys(answers).length /
                  questions.length) * 100
              }%`

            }}

          />


        </div>


      </div>
            {/* Questions Section */}

      {
        questions.map((q, index) => (

          <div
            key={index}
            className={`
              mb-5
              md:mb-6
              p-4
              md:p-6
              rounded-2xl
              shadow-lg
              transition-all
              duration-500
              ${
                darkMode
                  ? "bg-slate-800 text-white"
                  : "bg-white text-slate-900"
              }
            `}
          >


            {/* Question */}

            <h2
              className="
                text-lg
                md:text-xl
                font-bold
                mb-4
                md:mb-5
                leading-relaxed
              "
            >

              Q{index + 1}. {q.question}

            </h2>


            {/* Options */}

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-3
              "
            >


              {
                q.options.map((option, i) => (

                  <button
                    key={i}

                    onClick={() =>
                      handleAnswer(
                        index,
                        option.category
                      )
                    }

                    className={`
                      p-3
                      md:p-4
                      rounded-xl
                      text-left
                      text-sm
                      md:text-base
                      transition-all
                      duration-300
                      active:scale-95

                      ${
                        answers[index] === option.category

                          ? "bg-green-600 text-white shadow-md"

                          : darkMode

                          ? "bg-slate-700 text-white hover:bg-blue-600"

                          : "bg-gray-200 text-slate-900 hover:bg-blue-200"
                      }

                    `}
                  >

                    {option.text}

                  </button>

                ))
              }


            </div>


          </div>

        ))
      }



      {/* Action Buttons */}

      <div
        className="
          flex
          flex-col
          sm:flex-row
          justify-center
          gap-4
          my-8
          md:my-10
        "
      >


        {/* Calculate Button */}

        <button

          onClick={calculateResult}

          className="
            w-full
            sm:w-auto
            bg-blue-600
            hover:bg-blue-700
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

          🎯 Calculate Result

        </button>



        {/* Reset Button */}

        <button

          onClick={resetQuiz}

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

          🔄 Retake Quiz

        </button>


      </div>
            {/* Career Match Results */}

      {
        result.length > 0 && (

          <>

            <h2
              className={`
                text-2xl
                md:text-3xl
                font-bold
                text-center
                mb-6
                md:mb-8
                ${
                  darkMode
                    ? "text-green-400"
                    : "text-green-700"
                }
              `}
            >

              🎯 Your Career Match Results

            </h2>


            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-3
                gap-4
                md:gap-6
                mb-8
                md:mb-10
              "
            >

              {
                result.map((item, index) => (

                  <div
                    key={index}
                    className={`
                      p-5
                      md:p-6
                      rounded-2xl
                      shadow-lg
                      text-center
                      transition-all
                      duration-300
                      hover:scale-105
                      ${
                        darkMode
                          ? "bg-green-900 text-white"
                          : "bg-green-100 text-slate-900"
                      }
                    `}
                  >

                    <h3
                      className="
                        text-xl
                        md:text-2xl
                        font-bold
                      "
                    >

                      {item.category}

                    </h3>


                    <p
                      className="
                        mt-3
                        text-sm
                        md:text-lg
                      "
                    >

                      Match Percentage

                    </p>


                    <p
                      className="
                        text-3xl
                        font-bold
                        mt-2
                      "
                    >

                      {item.percentage}%

                    </p>


                  </div>

                ))

              }


            </div>


          </>

        )

      }


      {/* Recommended Careers */}

      {
        recommendedCareers.length > 0 && (

          <div>


            <h2
              className={`
                text-2xl
                md:text-3xl
                font-bold
                text-center
                mb-6
                md:mb-8
                ${
                  darkMode
                    ? "text-blue-400"
                    : "text-blue-700"
                }
              `}
            >

              🚀 Recommended Careers For You

            </h2>


            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-3
                gap-4
                md:gap-6
              "
            >


              {
                recommendedCareers.map((career) => (

                  <div
                    key={career._id}
                    className={`
                      p-5
                      md:p-6
                      rounded-2xl
                      shadow-lg
                      transition-all
                      duration-300
                      hover:scale-[1.02]
                      ${
                        darkMode
                          ? "bg-slate-800 text-white"
                          : "bg-white text-slate-900"
                      }
                    `}
                  >


                    {/* Career Title */}

                    <h3
                      className="
                        text-xl
                        md:text-2xl
                        font-bold
                        mb-3
                      "
                    >

                      {career.careerName}

                    </h3>


                    {/* Details */}

                    <p className="mb-2 text-sm md:text-base">

                      <strong>Category:</strong>
                      {" "}
                      {career.category}

                    </p>


                    <p className="mb-2 text-sm md:text-base">

                      <strong>Salary:</strong>
                      {" "}
                      {career.salaryRange}

                    </p>


                    <p className="mb-4 text-sm md:text-base">

                      <strong>Future Demand:</strong>
                      {" "}
                      {career.futureDemand}

                    </p>


                    {/* View Button */}

                    <Link
                      to={`/career/${career._id}`}
                      className="
                        inline-block
                        w-full
                        text-center
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        px-5
                        py-3
                        rounded-xl
                        font-semibold
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


          </div>

        )

      }


    </div>

  );

};


export default CareerQuiz;