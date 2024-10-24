// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import LoginPage from "./Files/Login";
import Navbar from "./Components/Navbar";
import Register from "./Files/Registration";
import ShopNow from "./Components/Shop_now";
import Blog from "./Files/Blog";
import Contact_us from "./Files/Contact_us";
import Footer from "./Components/Footer";
import AboutSection from "./Files/About";
import Exp from "./Files/Exp";
import Testamonial from "./Components/Testamonial";

function App() {
  return (
    <div className="bg-gray-800">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/shopnow" element={<ShopNow />} />

          <Route
            path="/Blog section"
            element={
              <>
                <Blog />
                <Testamonial />
              </>
            }
          />

          <Route
            path="/Contact_us"
            element={
              <>
                <Contact_us /> <Footer />
              </>
            }
          />
          <Route
            path="/AboutSection"
            element={
              <>
                <AboutSection />
                <Exp />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
