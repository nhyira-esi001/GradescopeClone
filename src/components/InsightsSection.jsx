import "./InsightsSection.css"

const InsightsSection = () => {
  return (
    <section className="insights-section bg-light">
      <div className="container">
        <h2 className="section-title">Gain Valuable Insight</h2>
        <p className="section-subtitle">
          Understand how your students are performing with detailed analytics and reports.
        </p>

        <div className="insights-content">
          <div className="insights-stats">
            <div className="stat-box">
              <h3>85%</h3>
              <p>Time saved on grading</p>
            </div>
            <div className="stat-box">
              <h3>92%</h3>
              <p>Instructor satisfaction</p>
            </div>
            <div className="stat-box">
              <h3>3.5x</h3>
              <p>More detailed feedback</p>
            </div>
            <div className="stat-box">
              <h3>98%</h3>
              <p>Student engagement</p>
            </div>
          </div>

          <div className="insights-testimonials">
            <div className="insight-testimonial">
              <p>
                "The analytics provided by Gradescope have helped me identify areas where my students are struggling,
                allowing me to adjust my teaching accordingly."
              </p>
              <div className="testimonial-author">
                <img src="/avatars/john.jpg" alt="John Smith" className="author-avatar-small" />
                <div>
                  <h4>John Smith</h4>
                  <p>Professor of Engineering, UC Berkeley</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InsightsSection

