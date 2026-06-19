import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  // Check whether user token exists
  const token = localStorage.getItem("token");

  // If no token, redirect to login page
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If logged in, allow access
  return children;
};

export default ProtectedRoute;