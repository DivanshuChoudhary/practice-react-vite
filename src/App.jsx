import { useState } from "react";
import "./index.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
  if (task.trim() === "") return;

  setTasks([...tasks, task]);

  setTask("");

  const deleteTask = (indexToDelete) => {
  const updatedTasks = tasks.filter(
    (_, index) => index !== indexToDelete
  );

  setTasks(updatedTasks);
};

};
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

        <button onClick={addTask}>
  Add Task
</button>
      </div>


      <div className="todo-list">

  {tasks.length === 0 ? (
    <p>No tasks yet.</p>
  ) : (

    tasks.map((item, index) => (
<div className="task" key={index}>

  <span>{item}</span>

  <button
    className="delete-btn"
    onClick={() => deleteTask(index)}
  >
    Delete
  </button>

</div>

    ))

  )}

</div>
    </div>
  );
}

export default App;