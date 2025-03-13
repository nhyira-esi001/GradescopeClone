const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-teal-50 to-teal-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Deliver and Grade Your Assignments Anywhere
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Save time grading and provide better feedback to your students with our powerful assessment platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="bg-teal-500 text-white px-6 py-3 rounded-md text-center font-medium hover:bg-teal-600 transition-colors"
              >
                Get Started
              </a>
              <a
                href="#"
                className="border border-teal-500 text-teal-500 px-6 py-3 rounded-md text-center font-medium hover:bg-teal-50 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -z-10 w-72 h-72 bg-teal-200 rounded-full opacity-50 -top-10 -left-10"></div>
              <img
                src="/placeholder.svg?height=500&width=400"
                alt="Gradescope Platform"
                className="relative z-10 max-w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

