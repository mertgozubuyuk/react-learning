import React, { useState } from "react";
import "../css/TodoCreate.css";
import { useDispatch } from "react-redux";
import type { Todo } from "../types/types";
import { addTodo } from "../redux/todoSlice";

function TodoCreate() {
  const [inputText, setInputText] = useState<string>("");

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputText.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now().toString(),
      text: inputText,
      isComplated: false,
    };

    dispatch(addTodo(newTodo));

    setInputText("");
  };

  return (
    <div>
      <div className="todo-create-container">
        <input
          type="text"
          className="todo-input"
          placeholder="Yeni bir görev yazın..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="button" className="todo-button" onClick={handleAddTodo}>
          Ekle
        </button>
      </div>
    </div>
  );
}

export default TodoCreate;
