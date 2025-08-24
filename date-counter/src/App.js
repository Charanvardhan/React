// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const today = new Date();

  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + count);

  return (
    <>
      <h1>Date Counter</h1>
      <div>
        <button className="sub" onClick={() => setStep((s) => s - 1)}>
          {" "}
          -{" "}
        </button>
        <span> Step: {step} </span>
        <button className="add" onClick={() => setStep((s) => s + 1)}>
          {" "}
          +{" "}
        </button>
      </div>
      <div>
        <button className="subCount" onClick={() => setCount((c) => c - step)}>
          {" "}
          -{" "}
        </button>
        <span> Count: {count} </span>
        <button className="addCount" onClick={() => setCount((c) => c + step)}>
          {" "}
          +{" "}
        </button>
      </div>
      <div>
        {" "}
        {count} days from today is {targetDate.toDateString()}{" "}
      </div>
    </>
  );
}
