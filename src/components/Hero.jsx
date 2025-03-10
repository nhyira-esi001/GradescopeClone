import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Deliver and Grade Your Assessments Anywhere</h1>
          <p>Save time grading and get a clear picture of how your students are doing</p>
          <div className="hero-buttons">
            <a href="#signup" className="btn btn-primary">
              Get Started
            </a>
            <a href="#learn-more" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/hero-image.svg" alt="Gradescope Platform" />
        </div>
      </div>
    </section>
  )
}

export default Hero

