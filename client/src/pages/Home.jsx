import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorks from "../components/HowItWorks";
import CareerCategories from "../components/CareerCategories";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`
        min-h-screen 
        transition-all 
        duration-500
        ${
          darkMode
            ? "bg-[#03143a] text-white"
            : "bg-white text-black"
        }
      `}
    >
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <CareerCategories />
      <Footer />
    </div>
  );
};

export default Home;