import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Stats from "./components/Stats";
import SubjectsSection from "./components/SubjectsSection";
import FeatureShowcase from "./components/FeatureShowcase";
import ExistingAssignments from "./components/ExistingAssignments";
import QuickGrading from "./components/QuickGrading";
import Testimonials from "./components/Testimonials";
import InsightsSection from "./components/InsightsSection";
import FeedbackSection from "./components/FeedbackSection";
import AIGradingSection from "./components/AIGradingSection";
import MoreTestimonials from "./components/MoreTestimonials";
import BuiltByInstructors from "./components/BuiltByInstructors";
import JoinSection from "./components/JoinSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Partners />
      <Stats />
      <SubjectsSection />
      <FeatureShowcase />
      <ExistingAssignments />
      <QuickGrading />
      <Testimonials />
      <InsightsSection />
      <FeedbackSection />
      <AIGradingSection />
      <MoreTestimonials />
      <BuiltByInstructors />
      <JoinSection />
      <Footer />
    </div>
  );
}

export default App;

