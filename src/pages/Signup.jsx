import { useState } from "react";
import { FaGoogle, FaMicrosoft } from "react-icons/fa";
import AuthScreenIllustration from "../components/AuthScreenIllustration";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router";
import RubixLogo from "../assets/images/rubrix-logo.png";

const Signup = () => {
  const [role, setRole] = useState("student"); // Track whether "student" or "instructor"
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
    name: "",
    studentID: "",
    school: "",
    instructorFirstName: "",
    instructorLastName: "",
    instructorEmail: "",
    inviteCode: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("Please enter both email and password");
      return;
    }
    setTimeout(() => {
      toast.success("Signup successful!");
    }, 1000);
  };

  return (
    <div className="flex min-h-screen w-full text-[#2C2C2C] bg-[#FAF3E0]">
      <AuthScreenIllustration />
      <div className="min-h-screen  sm:w-2/3 w-full flex flex-col items-center justify-center pt-0 font-poppins bg-[#FAF3E0] mt-2">
        
        <div className="flex flex-col justify-center w-full lg:w-2/3 p-8 md:p-16">
        <div className="flex items-center justify-center w-full font-light">  
          <p>Already have an account?</p>
          <Link to="/login" className="flex items-center ml-2 underline"> 
            Login
          </Link>
        </div>
        <h2 className="text-2xl text-[#234E70] font-semibold text-center">Create your <span className="text-[#0095ff] font-dayone text-xl">rubrix</span> account now</h2>
          <h2 className="text-lg text-[#234E70] font-semibold text-center mb-2">
            Sign up as an...
          </h2>

          {/* Role Toggle */}
          <div className="flex justify-center mb-4 w-full">
            <button
              onClick={() => setRole("instructor")}
              className={`px-6 w-1/2 py-2 border border-[#0095ff] font-bold rounded-l cursor-pointer ${
                role === "instructor" ? "bg-[#0095ff] font-bold text-white" : "transparent text-[#0095ff]"
              }`}
            >
              Instructor
            </button>
            <button
              onClick={() => setRole("student")}
              className={`px-6 w-1/2 py-2 border font-semibold border-[#0095ff] rounded-r cursor-pointer ${
                role === "student" ? "bg-[#0095ff] font-bold text-white" : "transparent text-[#0095ff]"
              }`}
            >
              Student
            </button>
          </div>

          <Toaster position="top-right" reverseOrder={false} />

          {/* Student Form */}
          {role === "student" ? (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-md font-semibold">Course Entry Code <span className="text-red-600">*</span></label>
                <input
                  type="text"
                  name="courseEntryCode"
                  className="w-full px-3 py-2 border border-gray-300 rounded outline-0 focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-md font-semibold">School <span className="text-red-600">*</span></label>
                <input
                  type="text"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded outline-0 focus:ring focus:ring-blue-300"
                  placeholder="Search for your school"
                  required
                />
              </div>
              <div>
                <label className="block text-md font-semibold">Name <span className="text-red-600">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded outline-0 focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-md font-semibold">Email Address <span className="text-red-600">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded outline-0 focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-md font-semibold">Student ID <span className="text-red-600">*</span></label>
                <input
                  type="text"
                  name="studentID"
                  value={formData.studentID}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded outline-0 focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <button type="submit" className="w-full py-2 bg-[#00b377] mt-2 text-white font-bold rounded hover:bg-[#00b377d1] cursor-pointer">
                Sign up as a student
              </button>
            </form>
          ) : (
            // Instructor Form
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex space-x-2">
                <div className="w-1/2">
                  <label className="block text-md font-semibold">First Name <span className="text-red-600">*</span></label>
                  <input
                    type="text"
                    name="instructorFirstName"
                    value={formData.instructorFirstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded outline-0 focus:ring focus:ring-blue-300"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-md font-semibold">Last Name <span className="text-red-600">*</span></label>
                  <input
                    type="text"
                    name="instructorLastName"
                    value={formData.instructorLastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded outline-0 focus:ring focus:ring-blue-300"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-md font-semibold">School Email Address <span className="text-red-600">*</span></label>
                <input
                  type="email"
                  name="instructorEmail"
                  value={formData.instructorEmail}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded outline-0 focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-md font-semibold">School <span className="text-red-600">*</span></label>
                <input
                  type="text"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded outline-0 focus:ring focus:ring-blue-300"
                  placeholder="Search for your school"
                  required
                />
              </div>
              <div>
                <label className="block text-md font-semibold">How Did You Hear About Us? (Optional)</label>
                <input
                  type="text"
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded outline-0 focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-md font-semibold">Invite Code (Optional)</label>
                <input
                  type="text"
                  name="inviteCode"
                  value={formData.inviteCode}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded outline-0 focus:ring focus:ring-blue-300"
                />
              </div>
              <button type="submit" className="w-full py-2 bg-[#00b377] mt-2 text-white font-bold rounded hover:bg-[#00b377d1] cursor-pointer">
                Sign up as an instructor
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
