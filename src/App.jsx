import { useState } from "react";
import "./index.css";

function App() {
  const [task, setTask] = useState("");
  return (
    <div className="container">
      <h1>📝 To-Do App</h1>

      <div className="input-box">
        <input
  type="text"
  placeholder="Enter your task..."
  value={task}
  onChange={(e) => setTask(e.target.value)}
/>

        <button>Add Task</button>
      </div>

      <p className="preview">Typing: {task}</p>

      <div className="todo-list">
        <p>No tasks yet.</p>
      </div>
    </div>
  );
}

export default App;