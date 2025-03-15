import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  )
}

export default App

