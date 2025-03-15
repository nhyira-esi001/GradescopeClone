import React from 'react'
import RubixLogo from "../assets/images/rubrix-logo.png";

const AuthScreenIllustration = () => {
  return (
    <div className="relative hidden sm:block w-full  sm:w-2/5 min-h-screen bg-[#FAF3E0] sm:shadow-md rounded-md font-poppins overflow-hidden">
      {/* Image as a background (absolutely positioned) */}
      <img
        src="/assets/images/AuthIllustration/joanna.jpg"
        alt="Auth Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay Content (Text, Buttons, etc.) */}
      <div className="relative z-10 flex flex-col top-115 left-0 h-full min-h-screen p-5 text-white">
            <img src={RubixLogo} className='h-8 w-8 mb-2' alt="" />
        <h1 className="text-xl text-[#f8f3e6] font-bold mb-1">Easy Assessments</h1>
        <p className="text-2xl  font-semibold leading-6">
            Take advantage of a <br /> smooth grading system!
        </p>
        {/* More text or buttons can go here */}
      </div>
    </div>
  )
}

export default AuthScreenIllustration