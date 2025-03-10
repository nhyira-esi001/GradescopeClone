import "./AIGradingSection.css"

const AIGradingSection = () => {
  return (
    <section className="ai-grading-section bg-light">
      <div className="container">
        <h2 className="section-title">Smarter, Quicker, AI-assisted Grading</h2>
        <p className="section-subtitle">
          Let our AI help you grade faster and more consistently, while you maintain full control over the process.
        </p>

        <div className="ai-features">
          <div className="ai-feature">
            <div className="ai-feature-icon">
              <img src="/icons/ai-recognition.svg" alt="AI Recognition" />
            </div>
            <h3>Handwriting Recognition</h3>
            <p>Our AI can recognize and digitize handwritten answers, making them searchable and easier to grade.</p>
          </div>

          <div className="ai-feature">
            <div className="ai-feature-icon">
              <img src="/icons/ai-similarity.svg" alt="AI Similarity" />
            </div>
            <h3>Answer Similarity</h3>
            <p>Group similar answers together to grade them consistently and efficiently.</p>
          </div>

          <div className="ai-feature">
            <div className="ai-feature-icon">
              <img src="/icons/ai-feedback.svg" alt="AI Feedback" />
            </div>
            <h3>Automated Feedback</h3>
            <p>Generate detailed feedback suggestions that you can customize before sharing with students.</p>
          </div>
        </div>

        <div className="ai-code-example">
          <div className="code-header">
            <span className="code-dot"></span>
            <span className="code-dot"></span>
            <span className="code-dot"></span>
            <span className="code-title">Example: AI-assisted grading</span>
          </div>
          <div className="code-content">
            <pre>
              <code>
                {`function calculateGrade(submission) {
  // AI identifies key concepts in the answer
  const keyConceptsIdentified = ai.identifyConcepts(submission);
  
  // AI suggests a score based on rubric
  const suggestedScore = ai.scoreByRubric(keyConceptsIdentified);
  
  // Instructor reviews and finalizes
  return {
    suggestedScore,
    keyConceptsIdentified,
    // Instructor can modify before finalizing
    finalScore: null
  };
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIGradingSection

