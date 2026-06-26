import "./index.css";

function App() {
  return (
    <div className="container">
      <h1>📝 To-Do App</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter your task..."
        />

        <button>Add Task</button>
      </div>

      <div className="todo-list">
        <p>No tasks yet.</p>
      </div>
    </div>
  );
}

export default App;