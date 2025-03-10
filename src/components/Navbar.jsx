"use client"

import { useState } from "react"
import "./Navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <img src="/logo.svg" alt="Gradescope" className="logo" />
          </a>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#how-it-works">How It Works</a>
          </li>
          <li>
            <a href="#for-schools">For Schools</a>
          </li>
          <li>
            <a href="#help">Help</a>
          </li>
          <li>
            <a href="#login" className="btn-login">
              Log In
            </a>
          </li>
          <li>
            <a href="#signup" className="btn btn-primary">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

