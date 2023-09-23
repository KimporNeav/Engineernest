import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Navbar from "./Navbar";

import Footer from "./Footer";
import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

 
  return (
    <div className="app-container">
      <>
        <div
          className={`${
            scrolled
              ? "bg-white sticky top-0 z-10 px-12 shadow-sm shadow-gray-200"
              : ""
          } sticky top-0 z-10 px-12 `}
        >
          <Navbar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />

          </Routes>
        </div>
      </>
      <Footer />
    </div>
  );
}

export default App;
