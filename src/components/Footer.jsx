import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logo-white.svg" alt="Gradescope" className="logo-white" />
            <p>Save time grading and get a clear picture of how your students are doing.</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Product</h3>
              <ul>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#security">Security</a>
                </li>
                <li>
                  <a href="#integrations">Integrations</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Resources</h3>
              <ul>
                <li>
                  <a href="#documentation">Documentation</a>
                </li>
                <li>
                  <a href="#guides">Guides</a>
                </li>
                <li>
                  <a href="#api">API</a>
                </li>
                <li>
                  <a href="#status">Status</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Legal</h3>
              <ul>
                <li>
                  <a href="#terms">Terms of Service</a>
                </li>
                <li>
                  <a href="#privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="#cookies">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Gradescope. All rights reserved.</p>
          <div className="social-links">
            <a href="#twitter" className="social-link">
              Twitter
            </a>
            <a href="#linkedin" className="social-link">
              LinkedIn
            </a>
            <a href="#facebook" className="social-link">
              Facebook
            </a>
            <a href="#instagram" className="social-link">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

