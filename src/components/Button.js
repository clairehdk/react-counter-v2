import React from "react";

const Button = ({ value, counter, setCounter, className }) => {
  const handleCounter = () => {
    if (value === "-") {
      setCounter(counter - 1);
    } else if (value === "+") {
      setCounter(counter + 1);
    } else if (value === "Reset") {
      setCounter(0);
    }
  };
  return (
    <button className={className} onClick={handleCounter}>
      {value}
    </button>
  );
};

export default Button;
