import "./MoreTestimonials.css"

const MoreTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Gradescope has completely changed how I approach grading. The AI features are incredibly helpful, and my students love the detailed feedback.",
      name: "Dr. Robert Chen",
      title: "Professor of Chemistry",
      university: "University of California, Berkeley",
      avatar: "/avatars/robert.jpg",
    },
    {
      id: 2,
      quote:
        "The time I save with Gradescope allows me to focus more on teaching and less on administrative tasks. It's been a game-changer for our department.",
      name: "Prof. Lisa Martinez",
      title: "Department Chair, Mathematics",
      university: "University of Washington",
      avatar: "/avatars/lisa.jpg",
    },
    {
      id: 3,
      quote:
        "Gradescope's analytics help me identify patterns in student performance that I wouldn't have noticed otherwise. I can now tailor my teaching to address specific challenges.",
      name: "Dr. James Wilson",
      title: "Associate Professor of Economics",
      university: "Harvard University",
      avatar: "/avatars/james.jpg",
    },
  ]

  return (
    <section className="more-testimonials">
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

export default MoreTestimonials

