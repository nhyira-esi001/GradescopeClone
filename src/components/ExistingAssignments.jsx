const ExistingAssignments = () => {
  const steps = [
    {
      icon: "📄",
      title: "Upload Your Assignment",
      description: "Upload your existing PDF assignments or create new ones",
    },
    {
      icon: "✏️",
      title: "Define Rubric",
      description: "Create a detailed grading rubric with point values",
    },
    {
      icon: "📱",
      title: "Grade Anywhere",
      description: "Grade on any device, anytime, anywhere",
    },
    {
      icon: "📊",
      title: "Analyze Results",
      description: "Get insights into student performance and understanding",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Use Your Existing Assignments</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          No need to change your workflow - Gradescope works with your current materials
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-teal-100 rounded-full mb-4 text-2xl">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="bg-teal-500 text-white px-6 py-3 rounded-md font-medium hover:bg-teal-600 transition-colors"
          >
            Try It Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default ExistingAssignments

