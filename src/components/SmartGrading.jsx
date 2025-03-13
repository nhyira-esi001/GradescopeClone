const SmartGrading = () => {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Smarter & AI-assisted Grading</h2>
              <p className="text-gray-600 mb-6">
                Our AI technology helps identify similar answers, suggests appropriate feedback, and learns from your
                grading patterns.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Pattern Recognition</h3>
                    <p className="text-gray-600 text-sm">Group similar answers to grade them together</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Automated Suggestions</h3>
                    <p className="text-gray-600 text-sm">Get AI-powered grading recommendations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Continuous Learning</h3>
                    <p className="text-gray-600 text-sm">The system improves with each assignment you grade</p>
                  </div>
                </li>
              </ul>
              <div className="mt-6">
                <a href="#" className="text-teal-500 font-medium hover:underline">
                  Learn more about our AI capabilities →
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="flex justify-end mb-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded p-4 bg-gray-50">
                  <code className="text-xs text-gray-800 font-mono">
                    <pre>{`function calculateScore(answers) {
    let score = 0;
    // AI identifies correct patterns
    for (const answer of answers) {
      if (isCorrect(answer)) {
        score += 1;
      }
    }
    return score;
  }`}</pre>
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default SmartGrading
  
  