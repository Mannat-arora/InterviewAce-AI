import { useState } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";

function Login() {

   const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");

const [showPassword, setShowPassword] = useState(false);

function handleSubmit(e) {

    e.preventDefault();

    let valid = true;

    // Reset previous errors
    setEmailError("");
    setPasswordError("");

    // Email Validation
    if (email.trim() === "") {
        setEmailError("Email is required");
        valid = false;
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
        setEmailError("Enter a valid email address");
        valid = false;
    }

    // Password Validation
    if (password.trim() === "") {
        setPasswordError("Password is required");
        valid = false;
    }
    else if (password.length < 8) {
        setPasswordError("Password must be at least 8 characters");
        valid = false;
    }

    if (!valid) {
        return;
    }

    alert("Login Successful 🎉");

    console.log({
        email,
        password
    });

    // Clear fields after login
    setEmail("");
    setPassword("");
}

    return (

        <div className="login-page">

            <form className="login-card" onSubmit={handleSubmit}>

                <h1>Welcome Back 👋</h1>

                <p>Login to InterviewAce AI</p>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
     

{emailError && <p className="error">{emailError}</p>}

              <div className="password-container">

    <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />

    <button
        type="button"
        className="toggle-password"
        onClick={() => setShowPassword(!showPassword)}
    >
        {showPassword ? "Hide" : "Show"}
    </button>

</div>

{passwordError && <p className="error">{passwordError}</p>}

{passwordError && <p className="error">{passwordError}</p>}
                 <p className="forgot-password">

                    Forgot Password?

                </p>

                <button>

                    Login

                </button>
                <div className="signup-link">

                 <span>Dont have an account?</span>

                    <Link to="/signup">

    Create Account

</Link>

                 </div>

            </form>

        </div>

    );

}

export default Login;