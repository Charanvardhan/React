import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const agentSkills = [
  {
    skill: "python",
    level: "beginner",
    color: "#4CAF50",
  },
  {
    skill: "pytorch",
    level: "intermediate",
    color: "#FF9800",
  },

  {
    skill: "llmops",
    level: "advanced",
    color: "#F44336",
  },
  {
    skill: "vllm",
    level: "advanced",
    color: "#F44336",
  },
  {
    skill: "rag",
    level: "intermediate",
    color: "#FF9800",
  },
];

export default agentSkills;

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
      {agentSkills.map((item) => (
        <Skill skillObj={item} key={item.skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  // if (skillObj.level === "beginner") var emoji = "👶";
  // else if (skillObj.level === "intermediate") var emoji = "👍";
  // else if (skillObj.level === "advanced") var emoji = "💪";
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "begineer" && "👶"}
        {skillObj.level === "intermediate" && "👍"}
        {skillObj.level === "advanced" && "💪"}
      </span>
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
