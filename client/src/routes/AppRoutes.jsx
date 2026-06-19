import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import CareerDetails from "../pages/CareerDetails";
import SavedCareers from "../pages/SavedCareers";
import CareerComparison from "../pages/CareerComparison";
import CareerQuiz from "../pages/CareerQuiz";
import Roadmap from "../pages/Roadmap";
import AIChat from "../pages/AIChat";
import NotFound from "../pages/NotFound";

// Protected Route
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>

      {/* =====================
          Public Routes
      ====================== */}

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />


      {/* =====================
          Protected Routes
      ====================== */}

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />


      {/* Career Details */}
      <Route
        path="/career/:id"
        element={
          <ProtectedRoute>
            <CareerDetails />
          </ProtectedRoute>
        }
      />


      {/* Saved Careers */}
      <Route
        path="/saved-careers"
        element={
          <ProtectedRoute>
            <SavedCareers />
          </ProtectedRoute>
        }
      />


      {/* Career Comparison */}
      <Route
        path="/career-comparison"
        element={
          <ProtectedRoute>
            <CareerComparison />
          </ProtectedRoute>
        }
      />


      {/* Career Quiz */}
      <Route
        path="/career-quiz"
        element={
          <ProtectedRoute>
            <CareerQuiz />
          </ProtectedRoute>
        }
      />


      {/* Career Roadmap */}
      <Route
        path="/roadmap/:careerName"
        element={
          <ProtectedRoute>
            <Roadmap />
          </ProtectedRoute>
        }
      />


      {/* AI Career Assistant */}
      <Route
        path="/ai-chat"
        element={
          <ProtectedRoute>
            <AIChat />
          </ProtectedRoute>
        }
      />


      {/* 404 Not Found Route */}
      <Route
        path="*"
        element={<NotFound />}
      />


    </Routes>
  );
};

export default AppRoutes;