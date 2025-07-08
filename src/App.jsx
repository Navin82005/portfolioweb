import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Landing from "./pages/landing/Landing";
import NavigationBar from "./components/Navigation/NavigationBar";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/contact/Contact";
import Project from "./pages/project/Project";
import SingleProject from "./pages/single-project/SingleProject";
import MeChatBot from "./pages/Navya/MeChatBot";
import Navya from "./pages/Navya/Navya";
import ScrollToTop from "./components/ScrollToTop";
import AboutMe from "./pages/aboutme/AboutMe";

function App() {
  const [dark, setDark] = useState(true);

  // In ThemeToggle.jsx, inside useEffect
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setDark(saved === "dark");
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutMe />} />

        <Route path="/project" element={<Project />} />
        <Route path="/project/:projectName" element={<SingleProject />} />
        
        <Route path="/chat" element={<Navya />} />
        <Route path="/me" element={<Navya />} />
        <Route path="/navya" element={<Navya />} />
      </Routes>
      {/* <Navya /> */}
      <Footer />
    </Router>
  );
}

export default App;
