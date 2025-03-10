import "./SubjectsSection.css"

const SubjectsSection = () => {
  const subjects = [
    { id: 1, name: "Computer Science", icon: "/icons/computer-science.svg" },
    { id: 2, name: "Mathematics", icon: "/icons/mathematics.svg" },
    { id: 3, name: "Physics", icon: "/icons/physics.svg" },
    { id: 4, name: "Chemistry", icon: "/icons/chemistry.svg" },
    { id: 5, name: "Biology", icon: "/icons/biology.svg" },
    { id: 6, name: "Engineering", icon: "/icons/engineering.svg" },
    { id: 7, name: "Economics", icon: "/icons/economics.svg" },
  ]

  return (
    <section className="subjects-section">
      <div className="container">
        <h2 className="section-title">Grade All Subjects</h2>
        <p className="section-subtitle">
          Gradescope works for any subject, from STEM to humanities. Save time grading and get a clear picture of how
          your students are doing.
        </p>

        <div className="subjects-grid">
          {subjects.map((subject) => (
            <div key={subject.id} className="subject-item">
              <div className="subject-icon">
                <img src={subject.icon || "/placeholder.svg"} alt={subject.name} />
              </div>
              <h3>{subject.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SubjectsSection

