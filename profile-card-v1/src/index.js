import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="profile/avatar.jpeg" alt="Charanvardhan" />
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="Python" emoji="🐍" color="#E34F26" />
      <Skill name="PyTorch" emoji="🔥" color="#1572B6" />
      <Skill name="JAX" emoji="⚡" color="pink" />
      <Skill name="Hugging Face" emoji="🤗" color="#FF6F00" />
      <Skill name="FastAPI" emoji="⚡" color="#009688" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Charanvardhan Mannuru</h1>

      <h3>
        AI/ML Engineer and Data Scientist with 2+ years of experience in NLP,
        deep learning optimization, and RAG pipelines. Proficient in building
        scalable AI and data science tools, optimizing LLM performance, and
        reducing latency/cost across production-grade systems using PyTorch,
        JAX, Redis, and FastAPI.
      </h3>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
