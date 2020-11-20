import React from "react";
import "./App.css";
import ProgressBar from "./progress-bar.component";
import { progressData } from "./data";

function App() {
  return (
    <div className="App">
      {progressData.map((item, idx) => (

      <table>
        <tbody>
          <tr>
            <td>
              <h1> {item.name} </h1>
            </td>
            <td>
              <ProgressBar key={idx} bgcolor={"#58ff33"} completed={item.completed} />
            </td>
          </tr>
        </tbody>
      </table>
      ))}

    </div>

  );
}

export default App;
