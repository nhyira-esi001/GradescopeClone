import "./QuickGrading.css"

const QuickGrading = () => {
  return (
    <section className="quick-grading bg-light">
      <div className="container">
        <div className="grading-content">
          <div className="grading-image">
            <img src="/screenshots/grading-interface.png" alt="Grading Interface" />
          </div>
          <div className="grading-text">
            <h2>Quick, Precise Grading</h2>
            <p>
              Grade assignments in half the time with our intuitive interface. Create reusable rubrics, provide detailed
              feedback, and maintain consistency across all submissions.
            </p>
            <ul className="grading-features">
              <li>Create custom rubrics for any assignment type</li>
              <li>Grade anywhere, anytime with our mobile-friendly interface</li>
              <li>Automatically detect and grade handwritten answers</li>
              <li>Track student progress and identify areas for improvement</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuickGrading

