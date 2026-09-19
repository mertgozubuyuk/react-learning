import { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import "../css/TodoList.css";

function TodoList({ todos, deleteTodoItem, editTodoItem }) {
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedContent, setEditedContent] = useState("");

  function saveTodo() {
    const content = editedContent.trim();
    if (!content) return;
    editTodoItem(editingTodoId, content);
    setEditingTodoId(null);
    setEditedContent("");
  }
  return (
    <div className="todo-list-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            <div className="todo-content">
              {editingTodoId === todo.id ? (
                <input
                  className="edit-input"
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                />
              ) : (
                <span className="todo-text">{todo.content}</span>
              )}
            </div>
            <div className="todo-actions">
              {editingTodoId === todo.id ? (
                <FaCheck
                  className="icon check-icon"
                  onClick={() => saveTodo()}
                />
              ) : (
                <FaEdit
                  className="icon edit-icon"
                  onClick={() => {
                    setEditingTodoId(todo.id);
                    setEditedContent(todo.content);
                  }}
                />
              )}
              <CiCircleRemove
                className="icon delete-icon"
                onClick={() => deleteTodoItem(todo)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
