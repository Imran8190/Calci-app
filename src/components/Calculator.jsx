import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [value, setValue] = useState("");

  // eslint-disable-next-line no-eval
  const calculate = (expression) => eval(expression);

  const handleClick = (val) => {
    setValue(value + val);
  };

  const handleClear = () => {
    setValue("");
  };

  const handleBackspace = () => {
    setValue(value.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      setValue(String(calculate(value)));
    } catch {
      setValue("Error");
    }
  };

  const handleSqrt = () => {
    try {
      setValue(String(Math.sqrt(calculate(value))));
    } catch {
      setValue("Error");
    }
  };

  const handleSquare = () => {
    try {
      const num = calculate(value);
      setValue(String(num * num));
    } catch {
      setValue("Error");
    }
  };

  const handleCube = () => {
    try {
      const num = calculate(value);
      setValue(String(num * num * num));
    } catch {
      setValue("Error");
    }
  };

  const handlePercentage = () => {
    try {
      setValue(String(calculate(value) / 100));
    } catch {
      setValue("Error");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={value} readOnly />

      <div className="buttons">
        <button className="danger" onClick={handleClear}>C</button>
        <button className="warning" onClick={handleBackspace}>⌫</button>
        <button onClick={handlePercentage}>%</button>
        <button onClick={() => handleClick("/")}>/</button>

        <button onClick={handleSqrt}>√</button>
        <button onClick={handleSquare}>x²</button>
        <button onClick={handleCube}>x³</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button className="equal" onClick={handleEqual}>=</button>

        <button className="zero" onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
      </div>
    </div>
  );
}

export default Calculator;
