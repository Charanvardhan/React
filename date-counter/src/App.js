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
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const today = new Date();

  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + count);

  return (
    <>
      <h1>Date Counter</h1>
      <div>
        {/* <button className="sub" onClick={() => setStep((s) => s - 1)}>
          {" "}
          -{" "}
        </button> */}
        {/* <span> Step: {step} </span> */}
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span> Step: {step} </span>
        {/* <button className="add" onClick={() => setStep((s) => s + 1)}>
          {" "}
          +{" "}
        </button> */}
      </div>
      <div>
        <button className="subCount" onClick={() => setCount((c) => c - step)}>
          {" "}
          -{" "}
        </button>
        <input
          tyype="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button className="addCount" onClick={() => setCount((c) => c + step)}>
          {" "}
          +{" "}
        </button>
      </div>
      <div>
        {" "}
        {count} days from today is {targetDate.toDateString()}{" "}
      </div>
      {step !== 1 || count !== 0 ? (
        <button
          className="reset"
          onClick={() => {
            setCount(0);
            setStep(1);
          }}
        >
          {" "}
          Reset{" "}
        </button>
      ) : null}
    </>
  );
}
