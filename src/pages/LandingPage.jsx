import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Partners from "../components/Partners"
import Stats from "../components/Stats"
import Subjects from "../components/Subjects"
import ExistingAssignments from "../components/ExistingAssignments"
import SmartGrading from "../components/SmartGrading"
import BuiltByInstructors from "../components/BuiltByInstructors"
import JoinSection from "../components/JoinSection"
import Footer from "../components/Footer"

const LandingPage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Partners />
        <Stats />
        <Subjects />
        <ExistingAssignments />
        <SmartGrading />
        <BuiltByInstructors />
        <JoinSection />
        <Footer />
    </>
  )
}

export default LandingPage