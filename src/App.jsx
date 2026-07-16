import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Companies from "./pages/Companies";
import Roadmap from "./pages/Roadmap";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/companies" element={<Companies />} />

      <Route path="/roadmap" element={<Roadmap />} />

      <Route path="/login" element={<Login />} />
      
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;