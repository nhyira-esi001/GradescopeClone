import "./FeatureShowcase.css"

const FeatureShowcase = () => {
  return (
    <section className="feature-showcase">
      <div className="container">
        <div className="feature-content">
          <div className="feature-text">
            <h2>Streamline Your Grading Process</h2>
            <p>
              Gradescope helps you grade paper-based exams, online homework, and programming projects in half the time.
              Create rubrics to ensure fair, consistent grading and provide detailed feedback to your students.
            </p>
            <a href="#learn-more" className="btn btn-primary">
              Learn More
            </a>
          </div>
          <div className="feature-image">
            <img src="/screenshots/platform-screenshot.png" alt="Gradescope Platform" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureShowcase

