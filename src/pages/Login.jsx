import { useState } from "react";
import { FaGoogle, FaMicrosoft  } from "react-icons/fa"
import AuthScreenIllustration from '../components/AuthScreenIllustration'
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router";

const Login = () => {

  const [formData, setFormData] = useState({ email: "", password: "", remember: false });

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
      toast.success("Login successful!");
    }, 1000);
  };

  return (
    <div className='flex min-h-screen w-full bg-[#FAF3E0] text-[#2C2C2C] font-poppins'>
        <AuthScreenIllustration />
        <div className="min-h-screen w-full sm:w-2/3 flex items-center justify-center">
            <div className="flex flex-col justify-center w-full lg:w-2/3 p-8 md:p-16">
              <div className="flex items-center justify-center w-full font-light">  
                <p>Don't have an account?</p>
                <Link to="/signup" className="flex items-center ml-2 underline"> 
                  Sign up
                </Link>
              </div>
            <h2 className="text-2xl text-[#234E70] font-semibold text-center mb-6">Log in with your <span className="text-[#0095ff] font-dayone text-xl">rubrix</span> account</h2>
            <Toaster position="top-right" reverseOrder={false} />
            <form className="space-y-4" onSubmit={handleSubmit}>
              
              <div>
                <label className="block text-lg text-[#2C2C2C] font-semibold mb-1">Email <span className="text-red-600">*</span></label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full text-md px-3 py-2 border border-gray-300 rounded outline-0 focus:ring focus:ring-blue-300"
                  required
                />
              </div>

              
              <div>
                <label className="block text-md text-[#2C2C2C] font-semibold mb-1">Password <span className="text-red-600">*</span></label>
                <input 
                  type="password" 
                  name="password" 
                  value={formData.password} 
                  onChange={handleChange} 
                  className="w-full px-3 py-2 border border-gray-300 rounded outline-0 focus:ring focus:ring-blue-300"
                  required
                />
                <a href="#" className="text-sm text-blue-500 hover:underline float-right mt-1">Forgot your password?</a>
              </div>

              
              <div className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  name="remember" 
                  checked={formData.remember} 
                  onChange={handleChange} 
                  className="w-4 h-4"
                />
                <label className="text-sm">Remember me</label>
              </div>

              
              <button type="submit" className="w-full py-2 bg-[#00b377] mt-2 text-white font-bold rounded hover:bg-[#00b377d1] cursor-pointer">
                Log In
              </button>
            </form>

            
            <div className="flex items-center my-4">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-2 text-sm text-gray-500">Or log in with</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center space-x-2 border py-2 rounded hover:bg-gray-100">
                <FaMicrosoft  className="text-lg" />
                <span>Microsoft</span>
              </button>
              <button className="flex items-center justify-center space-x-2 border py-2 rounded hover:bg-gray-100">
                <FaGoogle className="text-lg" />
                <span>Google</span>
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login