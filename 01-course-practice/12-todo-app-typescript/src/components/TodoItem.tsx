import React, { useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import "../css/TodoItem.css";
import type { Todo } from "../types/types";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../redux/todoSlice";
import { FaSave } from "react-icons/fa";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(todo.text);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleSave = () => {
    if (editText.trim() === "") return;

    dispatch(editTodo({ id: todo.id, newText: editText }));

    setIsEditing(false);
  };
  return (
    <div className="todo-item-box">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          autoFocus
          style={{
            flex: 1,
            padding: "6px 12px",
            marginRight: "12px",
            borderRadius: "6px",
            border: "1px solid #3b82f6",
            outline: "none",
            fontSize: "16px",
          }}
        />
      ) : (
        <div
          className="todo-text"
          style={{ textDecoration: todo.isComplated ? `line-through` : `none` }}
        >
          {todo.text}
        </div>
      )}

      {isEditing ? (
        <FaSave className="icon edit-icon" onClick={handleSave} />
      ) : (
        <div className="todo-icons">
          <FaCheck
            className="icon check-icon"
            onClick={handleToggle}
            style={{ color: todo.isComplated ? `#10b981` : undefined }}
          />
          <FaEdit
            className="icon edit-icon"
            onClick={() => setIsEditing(true)}
          />
          <IoIosRemoveCircle
            onClick={handleDelete}
            className="icon delete-icon"
          />
        </div>
      )}
    </div>
  );
}

export default TodoItem;
