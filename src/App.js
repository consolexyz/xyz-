import React from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homepage/HomePage";
import {Route , Routes} from "react-router-dom";
import "./App.scss"
import Contact from "./pages/contactpage/Contact";
import Works from "./pages/workspage/Works";
import About from "./pages/aboutpage/About";

function App() {
  return (
    <div className="App">
      <Navbar />
     <Routes>
     <Route path= "/" element= {<HomePage />} />
     <Route path = "/about" element ={<About />} />
     <Route path = "/works" element ={<Works />} />
     <Route path = "/contact" element ={<Contact />} />
     </Routes>
    </div>
  );
}

export default App;
