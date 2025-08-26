import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [ftip, setFtip] = useState(0);

  function reset() {
    setBill((bill) => "");
    setTip((tip) => 0);
    setFtip((ftip) => 0);
  }

  function claculateTip() {
    console.log(bill, tip, ftip);
    let avgtip = Math.round((bill * ((tip + ftip) / 2)) / 100);
    // let avgtip = 2;
    console.log(avgtip);
    return bill + avgtip;
  }

  const total = claculateTip();
  return (
    <div>
      <h1>Tip Calculatoor</h1>
      <div>
        <Bill bill={bill} setBill={setBill} />
        <Service tip={tip} setTip={setTip}>
          {" "}
          How did you like the service?{" "}
        </Service>
        <Service tip={ftip} setTip={setFtip}>
          {" "}
          How did your friend like the service?{" "}
        </Service>

        {bill > 0 && <TotalBill bill={bill} total={total} tip={total - bill} />}
        {bill > 0 && <Reset reset={reset} />}
      </div>
    </div>
  );
}

function Bill({ setBill, bill }) {
  function handleSubmit(e) {
    setBill(Number(e.target.value));
  }
  return (
    <div>
      How much was the Bill?{" "}
      <input
        type="number"
        placeholder="amount"
        value={bill}
        onChange={(e) => handleSubmit(e)}
      />
    </div>
  );
}

function Service({ children, tip, setTip }) {
  // function handleTip(e) {
  //   const value = e.target.value;
  //   const percent = value.slice(value.indexOf("(") + 1, value.indexOf("%"));
  //   setTip(Number(percent));
  // }

  return (
    <div>
      {children}{" "}
      <select value={tip} onChange={(e) => setTip(Number(e.target.value))}>
        <option value="0">disatisfied(0%)</option>
        <option value="5">satisfied(5%)</option>
        <option value="10">good(10%)</option>
        <option value="20">amazing(20%)</option>
      </select>
    </div>
  );
}

function TotalBill({ total, bill, tip }) {
  return (
    <div>
      <h1>
        You Pay {total} ({bill} + {tip})
      </h1>
    </div>
  );
}

function Reset({ reset }) {
  return <button onClick={reset}>Reset</button>;
}
