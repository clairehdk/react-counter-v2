import Button from "./Button";

import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="buttons">
      <div className="counter">
        <Button
          className={counter <= 0 && "hidden"}
          value="-"
          counter={counter}
          setCounter={setCounter}
        />
        <span>{counter}</span>
        <Button
          className={counter >= 10 && "hidden"}
          value="+"
          counter={counter}
          setCounter={setCounter}
        />
      </div>
      <Button
        className="reset"
        value="Reset"
        counter={counter}
        setCounter={setCounter}
      />
    </div>
  );
};

export default Counter;
