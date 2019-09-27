import React from "react";
import "./App.css";
import APODData from "./data.js";

function App() {
  return (
    <div className="App">
      <p>
        Nasa's Photo of the Day 
        <span role="img" aria-label="rocket emjio">
          🚀!
        </span>
        <APODData />
      </p>
    </div>
  );
}

export default App;
