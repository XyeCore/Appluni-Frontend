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
import { AuthPage } from "./components/pages/AuthPage";
import { Universities } from "./components/pages/Universities";
import { isTokenExpired } from "./utils/jwtUtils" // Import the token expiration utility
import Footer from "./components/Footer";
import NewApplication from "./components/pages/NewApplication";
import AdminPanel from "./components/pages/AdminPanel";

// Boolean to check if the user is logged in localstorage

export const isLoggedIn = localStorage.getItem("isLoggedIn") === "true" ? true : false;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);


  // useEffect(() => {
  //   const token = localStorage.getItem('access_token');
  // if (!token || isTokenExpired(token)) {
  //   localStorage.removeItem('access_token');
    
  //   window.location.href = '/auth';
  //   alert('Сессия истекла. Пожалуйста, войдите снова.');
  // }
  // }, []);

  return (
    <Router>
      {/* {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} */}
      <div
        className={``}
      >
        <Navbar 
          menuOpen={menuOpen} 
          setMenuOpen={setMenuOpen} 

        />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Page />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/new-application" element={<NewApplication />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
        </Routes>

        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
