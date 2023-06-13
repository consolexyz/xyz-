import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homepage/HomePage";
import About from "./pages/Aboutpage/About";
import Works from "./pages/workspage/Works";
import Contact from "./pages/contactpage/Contact";


import "./App.scss"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes >
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path= "/works" element={<Works />} />
      <Route path= "/contact" element={<Contact/>} />
      </ Routes>
    </div>
  );
}

export default App;
