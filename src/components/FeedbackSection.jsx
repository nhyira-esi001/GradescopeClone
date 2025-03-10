import "./FeedbackSection.css"

const FeedbackSection = () => {
  return (
    <section className="feedback-section">
      <div className="container">
        <div className="feedback-content">
          <div className="feedback-chart">
            <img src="/charts/feedback-chart.png" alt="Feedback Analytics" />
          </div>
          <div className="feedback-text">
            <h2>Feedback Delivered Instantly</h2>
            <p>
              Students receive detailed feedback as soon as you finish grading. Track student progress over time and
              identify areas where they need additional support.
            </p>
            <div className="feedback-testimonials">
              {[1, 2, 3].map((id) => (
                <div key={id} className="feedback-testimonial">
                  <p>
                    "The immediate feedback has been invaluable for my learning. I can see exactly where I went wrong
                    and how to improve."
                  </p>
                  <div className="testimonial-author-small">
                    <img src={`/avatars/student${id}.jpg`} alt={`Student ${id}`} className="author-avatar-small" />
                    <div>
                      <h4>Student Testimonial</h4>
                      <p>Computer Science Major</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeedbackSection

