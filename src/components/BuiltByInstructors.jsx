const BuiltByInstructors = () => {
  const testimonials = [
    {
      quote:
        "Gradescope was built by instructors who understand the challenges of grading. It shows in every feature of the platform.",
      author: "Dr. Lisa Wang",
      role: "Associate Professor",
      institution: "Princeton University",
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      quote:
        "I appreciate that the team behind Gradescope continues to listen to educators and improve the platform based on our feedback.",
      author: "Prof. David Miller",
      role: "Engineering Department",
      institution: "Georgia Tech",
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      quote:
        "The transition to Gradescope was seamless. The platform is intuitive because it was designed by people who have been in our shoes.",
      author: "Dr. Rachel Adams",
      role: "Biology Department",
      institution: "UCLA",
      avatar: "/placeholder.svg?height=64&width=64",
    },
  ]

  return (
    <section className="py-16 bg-teal-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Built by Instructors</h2>
        <p className="text-teal-100 text-center max-w-2xl mx-auto mb-12">
          Created by educators who understand the challenges of teaching and grading
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-teal-700 p-6 rounded-lg">
              <p className="text-teal-100 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-medium text-white">{testimonial.author}</h4>
                  <p className="text-teal-200 text-sm">{testimonial.role}</p>
                  <p className="text-teal-300 text-sm">{testimonial.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BuiltByInstructors

