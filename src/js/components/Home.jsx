import React, { useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Make the bed", done: false },
    { id: 2, title: "Wash my hands", done: false },
    { id: 3, title: "Eat", done: false },
    { id: 4, title: "Walk the dog", done: false },
  ]);

  const [taskInput, setTaskInput] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!taskInput.trim()) return;
    const newTask = {
      id: Date.now(),
      title: taskInput.trim(),
      done: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTask]);
    setTaskInput("");
  };

  const deleteTask = (taskId) => {
    setTodos((prevTodos) => prevTodos.filter((task) => task.id !== taskId));
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            autoFocus
            className="new-todo"
            placeholder="What needs to be done?"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
        </form>
      </header>

      <section className="main">
        <ul className="todo-list">
          {todos.length === 0 ? (
            <li>No tasks, add a task</li>
          ) : (
            todos.map((task) => (
              <li key={task.id}>
                <div className="view">
                  <label>{task.title}</label>
                  <button
                    className="destroy"
                    onClick={() => deleteTask(task.id)}
                  ></button>
                </div>
              </li>
            ))
          )}
        </ul>
      </section>

      <footer className="footer">
        <span className="todo-count">
          <strong>{todos.filter((task) => !task.done).length}</strong> item
          {todos.filter((task) => !task.done).length !== 1 ? "s" : ""} left
        </span>
      </footer>
    </section>
  );
};

export default Home;
