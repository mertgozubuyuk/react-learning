import React, { useState } from "react";
import "../css/TodoForm.css";
function TodoForm({ onAddTodo }) {
  const [todoText, setTodoText] = useState("");
  function clearInput() {
    setTodoText("");
  }
  return (
    <div className="todo-form">
      <div>
        <h1>Todo App</h1>
      </div>

      <div className="todo-add-container">
        <input
          type="text"
          placeholder="Write a todo..."
          onChange={(e) => {
            setTodoText(e.target.value);
          }}
          value={todoText}
          className="todo-input"
        />
        <button
          className="add-button"
          onClick={() => {
            if (!todoText) return;

            const request = {
              id: Math.floor(Math.random() * 999999999999),
              content: todoText,
            };
            onAddTodo(request);
            clearInput();
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoForm;
