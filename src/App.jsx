import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Companies from "./pages/Companies";
import Roadmap from "./pages/Roadmap";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CodingPractice from "./pages/CodingPractice";
import ResumeReview from "./pages/ResumeReview";
import MockInterview from "./pages/MockInterview";
import Analytics from "./pages/Analytics";
import Notes from "./pages/Notes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/companies" element={<Companies />} />

      <Route path="/roadmap" element={<Roadmap />} />

      <Route path="/login" element={<Login />} />
      
      <Route path="/signup" element={<Signup />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/coding-practice" element={<CodingPractice />} />

      <Route path="/resume-review" element={<ResumeReview />} />

      <Route path="/mock-interview" element={<MockInterview />} />

      <Route path="/analytics" element={<Analytics />} />

      <Route path="/notes" element={<Notes />} />

    </Routes>
  );
}

export default App;