const Subjects = () => {
  const subjects = [
    { name: "Computer Science", icon: "💻" },
    { name: "Mathematics", icon: "📊" },
    { name: "Physics", icon: "⚛️" },
    { name: "Chemistry", icon: "🧪" },
    { name: "Biology", icon: "🧬" },
    { name: "Engineering", icon: "🔧" },
    { name: "Humanities", icon: "📚" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Grade All Subjects</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Our platform is designed to work across all disciplines, from STEM to humanities.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {subjects.map((subject, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center bg-teal-100 rounded-full mb-3 text-2xl">
                {subject.icon}
              </div>
              <span className="text-sm text-center">{subject.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-100 rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Streamline Your Grading Process</h3>
            <p className="text-gray-600 mb-4">
              Our platform helps you grade assignments faster and more consistently, while providing detailed feedback
              to your students.
            </p>
            <p className="text-gray-600">
              Whether you're teaching programming, mathematics, or literature, Gradescope adapts to your needs.
            </p>
            <div className="mt-6">
              <a href="#" className="text-teal-500 font-medium hover:underline">
                Learn more about our features →
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="Gradescope Interface"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subjects

