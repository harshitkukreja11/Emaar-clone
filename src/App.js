import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmaarHome from "./components/emaar/EmaarHome";
import AboutUs from "./components/emaar/AboutUs";
import Contact from "./components/emaar/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmaarHome />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
