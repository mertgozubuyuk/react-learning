import { useState } from "react";
import "./App.css";
import useCounter from "./hooks/useCounter";
import useToggle from "./hooks/useToggle";

function App() {
  const { count, increment, decrement } = useCounter();

  const { value, toggle } = useToggle();
  return (
    <div>
      <div>
        <div>{count}</div>
        <div>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>

        <div>
          {value ? (
            <button onClick={toggle}>Gizle</button>
          ) : (
            <button onClick={toggle}>Göster</button>
          )}

          {value && "Tebrikler gizli mesaja ulaştınız"}
        </div>
      </div>
    </div>
  );
}

export default App;
