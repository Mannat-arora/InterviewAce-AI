import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">

            <h2 className="logo">
                InterviewAce AI
            </h2>

            <ul className="nav-links">

               <li>
  <Link to="/">Home</Link>
</li>

               <li>
  <Link to="/">Features</Link>
</li>
                <li>
  <Link to="/companies">Companies</Link>
</li>

               <li>
  <Link to="/roadmap">Roadmap</Link>
</li>

                <li>
  <Link to="/about">About</Link>
</li>

                <li>
  <Link to="/login">Login</Link>
</li>

            </ul>

        </nav>
    );
}

export default Navbar;