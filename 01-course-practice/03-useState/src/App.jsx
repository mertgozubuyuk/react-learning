import { useState } from "react";

import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("Mert");

  const [lastName, setLastName] = useState("Gozubuyuk");

  const [names, setNames] = useState(["Ali", "Veli", "Bahar"]);

  const [userInfo, setUserInfo] = useState({ name: "Mert", password: "123" });

  const [show, setShow] = useState(true);

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  console.log("component render edildi");

  return (
    <div>
      <div>
        {firstName} {lastName}
      </div>
      <hr />

      <div>
        <div>{firstName}</div>
        <button
          onClick={() => {
            setFirstName("Berk");
          }}
        >
          Get the new name
        </button>
      </div>
      <hr />

      <div>
        {names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
      <hr />

      <div>
        <div>
          {show ? (
            <div>
              {userInfo.name} {userInfo.password}
            </div>
          ) : (
            <div> bilgi gelmedi </div>
          )}
        </div>
      </div>
      <hr />

      <div>
        <div>{count}</div>
        <button onClick={increase}>increase</button>
      </div>
    </div>
  );
}

export default App;
