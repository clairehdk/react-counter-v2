import "./App.css";
import Counter from "./components/Counter";

import { useState } from "react";

function App() {
  const [counters, setCounters] = useState([0]);
  return (
    <div>
      <header>
        <i className="fas fa-stopwatch-20 fa-3x"></i>
        <h1>React Counter v2</h1>
      </header>
      <div className="line"></div>
      <button
        onClick={() => {
          const newTab = [...counters];
          if (newTab <= 3) {
            newTab.push(0);
            setCounters(newTab);
          }
        }}
      >
        Add counter
      </button>
      <div className="container">
        {counters.map((counter, index) => {
          return <Counter key={index} />;
        })}
      </div>
      <footer>
        <p>
          Made with <span>React</span> at <span>Le Réacteur </span>by{" "}
          <span>Claire Hart de Keating</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
