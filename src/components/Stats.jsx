import "./Stats.css"

const Stats = () => {
  const stats = [
    { id: 1, value: "700k+", label: "Students" },
    { id: 2, value: "2,600+", label: "Institutions" },
    { id: 3, value: "140k+", label: "Instructors" },
    { id: 4, value: "3.2M+", label: "Assignments" },
  ]

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-item">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

