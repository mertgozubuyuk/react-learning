import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todo);
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}

      {todos.length === 0 && (
        <p style={{ textAlign: `center`, color: `#94a3b8` }}>
          Henüz bir görev eklenmedi
        </p>
      )}
    </div>
  );
}

export default TodoList;
