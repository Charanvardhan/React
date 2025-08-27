import { useState } from "react";

const Goals = [
  {
    id: "g1",
    text: "Finish the React course",
  },
  {
    id: "g2",
    text: "Practice the React",
  },
  {
    id: "g3",
    text: "complete interview",
  },
];

export default function App() {
  return (
    <div className="main">
      <GoalTracker />
    </div>
  );
}

function GoalTracker() {
  const [goals, setGoals] = useState([...Goals]);
  // const [filter, setFilter] = useState("");

  function handleFilter(id) {
    alert(`deleted GOal ${id.text}`);
    setGoals((goals) => goals.filter((goal) => goal.id !== id.id));
  }

  function handleAddGoal(e) {
    setGoals((goals) => [...goals, { id: `g${e.length}`, text: e }]);
  }

  return (
    <div>
      <h1> Goal tracker</h1>
      <AddGoal addGoal={handleAddGoal} />
      {goals.map((goal) => (
        <GoalList goal={goal} key={goal.id} deleteGoal={handleFilter} />
      ))}
    </div>
  );
}

function AddGoal({ addGoal }) {
  const [input, setInput] = useState("");
  function handleChange(e) {
    e.preventDefault();
    addGoal(input);
    setInput("");
  }

  return (
    <form onSubmit={handleChange}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>AddGoal</button>
    </form>
  );
}

function GoalList({ goal, deleteGoal }) {
  return (
    <div>
      <input type="checkbox" onClick={() => deleteGoal(goal)} />
      <label> {goal.text}</label>
    </div>
  );
}
