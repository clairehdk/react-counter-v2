import "./App.css";
import Counter from "./components/Counter";

import { useState } from "react";

function App() {
  const [tabCounters, setCounters] = useState([]);
  return (
    <div>
      <header>
        <i className="fas fa-stopwatch-20 fa-3x"></i>
        <h1>React Counter v2</h1>
      </header>
      <div className="line"></div>
      <button
        onClick={() => {
          const newTab = [...tabCounters];
          // Modifie la copie
          newTab.push(<Counter />);
          setCounters(newTab);
        }}
      >
        Add counter
      </button>
      <div className="container">
        <Counter />
      </div>
    </div>
  );
}

export default App;
