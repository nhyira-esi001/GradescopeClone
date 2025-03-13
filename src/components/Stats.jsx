const Stats = () => {
  const stats = [
    { value: "700k+", label: "Students" },
    { value: "2,600+", label: "Institutions" },
    { value: "140k+", label: "Instructors" },
    { value: "3.2M+", label: "Assignments" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-2xl md:text-3xl font-bold text-teal-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

