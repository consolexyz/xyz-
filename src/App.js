import React from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homepage/HomePage";
import "./App.scss"

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
