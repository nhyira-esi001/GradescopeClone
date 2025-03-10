import "./ExistingAssignments.css"

const ExistingAssignments = () => {
  const steps = [
    {
      id: 1,
      title: "Upload Your Assignments",
      description: "Upload your existing assignments or create new ones",
      icon: "/icons/upload.svg",
    },
    {
      id: 2,
      title: "Students Submit Work",
      description: "Students can submit their work online or on paper",
      icon: "/icons/submit.svg",
    },
    {
      id: 3,
      title: "Grade with Rubrics",
      description: "Create rubrics for consistent and efficient grading",
      icon: "/icons/grade.svg",
    },
    {
      id: 4,
      title: "Provide Feedback",
      description: "Give detailed feedback to help students improve",
      icon: "/icons/feedback.svg",
    },
  ]

  return (
    <section className="existing-assignments">
      <div className="container">
        <h2 className="section-title">Use Your Existing Assignments</h2>
        <p className="section-subtitle">
          No need to change your teaching style. Gradescope works with your existing assignments and workflow.
        </p>

        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.id} className="step-item">
              <div className="step-icon">
                <img src={step.icon || "/placeholder.svg"} alt={step.title} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExistingAssignments

