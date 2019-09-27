import React from "react";
import "./App.css";
import APODData from "./APODData.js";

function App() {
  return (
    <div className="App">
      <h1>
        Nasa's Photo of the Day 
        <span role="img" aria-label="rocket emjio">
          🚀!
        </span>
        
      </h1>
      <APODData />
    </div>
  );
}

export default App;
