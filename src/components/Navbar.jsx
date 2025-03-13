"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import RubixLogo from "../assets/images/rubrix-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center">
        <img src={RubixLogo} alt="Rubrix Logo" className="h-10 w-auto"  />
        </a>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-teal-500 text-sm font-medium">
            Pricing
          </a>
          <a href="#" className="text-gray-600 hover:text-teal-500 text-sm font-medium">
            Our Story
          </a>
          <a href="#" className="text-gray-600 hover:text-teal-500 text-sm font-medium">
            For Schools
          </a>
          <a href="#" className="text-gray-600 hover:text-teal-500 text-sm font-medium">
            Help Center
          </a>
          <a href="#" className="text-gray-600 hover:text-teal-500 text-sm font-medium">
            Log In
          </a>
          <a
            href="#"
            className="bg-teal-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-600 transition-colors"
          >
            Sign Up
          </a>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden">
            <div className="flex flex-col p-4 space-y-3">
              <a href="#" className="text-gray-600 hover:text-teal-500 text-sm font-medium">
                Pricing
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-500 text-sm font-medium">
                Our Story
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-500 text-sm font-medium">
                For Schools
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-500 text-sm font-medium">
                Help Center
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-500 text-sm font-medium">
                Log In
              </a>
              <a
                href="#"
                className="bg-teal-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-600 transition-colors text-center"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar

