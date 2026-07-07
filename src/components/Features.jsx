import "../styles/Features.css";
function Features() {
  return (
    <section className="features">
      <h2>Why Choose InterviewAce AI?</h2>

      <div className="feature-cards">

        <div className="card">
          <h3>🧠 Coding Practice</h3>
          <p>Practice company-wise DSA questions.</p>
        </div>

        <div className="card">
          <h3>📄 Resume Review</h3>
          <p>Get AI-powered resume suggestions.</p>
        </div>

        <div className="card">
          <h3>🎤 Mock Interviews</h3>
          <p>Practice HR and technical interviews.</p>
        </div>

        <div className="card">
          <h3>🏢 Company Prep</h3>
          <p>Prepare for Google, Amazon, Microsoft and more.</p>
        </div>

      </div>
    </section>
  );
}

export default Features;