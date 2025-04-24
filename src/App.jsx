import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Page } from "./components/pages/Page";
import "./index.css";
import { Home } from "./components/pages/Home";
import { NotFound } from "./components/pages/NotFound";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (!savedDarkMode) {
      setDarkMode(false);
      localStorage.setItem("darkMode", "false");
    }
    setDarkMode(savedDarkMode === "true");
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", (!darkMode).toString());
  };

  return (
    <Router>
      {/* {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} */}
      <div
        className={``}
      >
        <Navbar 
          menuOpen={menuOpen} 
          setMenuOpen={setMenuOpen} 
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Page />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
