import "./Testimonials.css"

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Gradescope has transformed my grading process. What used to take hours now takes minutes, and the feedback I can provide is much more detailed.",
      name: "Dr. Sarah Johnson",
      title: "Professor of Computer Science",
      university: "Stanford University",
      avatar: "/avatars/sarah.jpg",
    },
    {
      id: 2,
      quote:
        "With Gradescope, it is so intuitive to grade assignments. The AI features save me countless hours, and my students appreciate the detailed feedback they receive.",
      name: "Prof. Michael Williams",
      title: "Associate Professor of Physics",
      university: "MIT",
      avatar: "/avatars/michael.jpg",
    },
    {
      id: 3,
      quote:
        "I can't imagine going back to my old way of grading. Gradescope has made it possible for me to provide better feedback while spending less time on administrative tasks.",
      name: "Dr. Emily Chen",
      title: "Assistant Professor of Mathematics",
      university: "Princeton University",
      avatar: "/avatars/emily.jpg",
    },
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-quote">
                <p>"{testimonial.quote}"</p>
              </div>
              <div className="testimonial-author">
                <img src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} className="author-avatar" />
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.title}</p>
                  <p className="author-university">{testimonial.university}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

