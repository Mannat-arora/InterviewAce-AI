import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-section">

                    <h2>InterviewAce AI</h2>

                    <p>
                        Your AI-powered placement preparation companion.
                    </p>

                </div>

                <div className="footer-section">

                    <h3>Quick Links</h3>

                    <ul>
                        <li>Home</li>
                        <li>Features</li>
                        <li>Companies</li>
                        <li>Roadmap</li>
                    </ul>

                </div>

                <div className="footer-section">

                    <h3>Resources</h3>

                    <ul>
                        <li>DSA</li>
                        <li>Resume Review</li>
                        <li>HR Interview</li>
                        <li>Mock Tests</li>
                    </ul>

                </div>

                <div className="footer-section">

                    <h3>Contact</h3>

                    <p>Email</p>

                    <p>LinkedIn</p>

                    <p>GitHub</p>

                </div>

            </div>

            <hr />

            <p className="copyright">
                © 2026 InterviewAce AI | Built by Mannat
            </p>

        </footer>
    );
}

export default Footer;