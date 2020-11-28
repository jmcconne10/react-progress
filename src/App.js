import React from "react";
import "./App.css";
import Staticprogress from "./Staticprogress";
import Animatedprogress from "./Animatedprogress";
import StepProgressBar from "./Stepprogress";

function App() {
  return (
    <div className="App">

        <Staticprogress />
        <Animatedprogress />
        <p />
        <StepProgressBar />
    </div>

  );
}

export default App;
