import "./BuiltByInstructors.css"

const BuiltByInstructors = () => {
  return (
    <section className="built-by-instructors">
      <div className="container">
        <div className="instructors-content">
          <div className="instructors-text">
            <h2>Built by Instructors</h2>
            <p>
              Gradescope was created by instructors who understand the challenges of teaching and grading. Our platform
              is designed to make your life easier and help your students succeed.
            </p>
            <a href="#signup" className="btn btn-primary">
              Get Started
            </a>
          </div>
          <div className="instructors-image">
            <img src="/images/instructor.jpg" alt="Instructor using Gradescope" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuiltByInstructors

