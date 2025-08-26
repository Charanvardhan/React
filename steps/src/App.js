import { useState } from "react";

const message = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setOpen] = useState(true);

  function handlePrev() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
    // if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{message[step - 1]}</StepMessage>

          <div className="buttons">
            {/* <button
              style={{ backgroundColor: "#7050f2", color: "#fff" }}
              onClick={handlePrev}
            >
              Previous
            </button> */}
            <Button
              BgColor="#7050f2"
              textColor="#fff"
              handler={handlePrev}
              // text="Previous"
              // emoji="👈"
            >
              <span>👈</span> Previous
            </Button>
            <Button
              BgColor={"#7050f2"}
              textColor="#fff"
              handler={handleNext}
              // text="next"
              // emoji="👉"
            >
              Next <span>👉</span>
            </Button>
            {/* <button
              style={{ backgroundColor: "#7050f2", color: "#fff" }}
              onClick={handleNext}
            > 
             Next
            </button> */}
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      Step {step} : {children}
    </div>
  );
}

function Button({ BgColor, textColor, handler, children }) {
  return (
    <button
      style={{ backgroundColor: BgColor, color: textColor }}
      onClick={handler}
    >
      {children}
      {/* <span>{emoji}</span>
      {text} */}
    </button>
  );
}
