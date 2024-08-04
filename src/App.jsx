import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { sun, moon } from "@/components/icons/Icons";
import Nav from "@/components/navigation/Nav";
import Footer from "./components/Footer";
// Import pages
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import HomePage from "@/pages/home";
import ProjectsPage from "@/pages/projects";
import ResumePage from "@/pages/resume";
import SchedulePage from "@/pages/schedule";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function handleThemeSwitch() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <Router>
      <button
        className="fixed z-30 right-6 top-6 lg:right-8 lg:top-8
        bg-violet-300 dark:bg-orange-300 text-lg p-1 rounded-md"
        type="button"
        onClick={handleThemeSwitch}
      >
        {theme === "dark" ? sun : moon}
      </button>

      <main
        className="bg-color text-stone-900 dark:text-stone-300
        min-h-screen font-inter"
      >
        <Nav />
        <div className="max-w-5xl w-10/12 mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </main>
    </Router>
  );
}

export default App;
