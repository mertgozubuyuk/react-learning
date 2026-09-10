import React from "react";

export const users = [
  {
    userName: "Mert",
    password: "1",
  },
  {
    userName: "Ayşe",
    password: "2",
  },
];

function Login() {
  return (
    <div>
      <div>
        <p>Enter your name</p>
        <input type="text" />
      </div>

      <div>
        <p>Enter your password</p>
        <input type="text" />
      </div>

      <div>
        <button>Sign in</button>
      </div>
    </div>
  );
}

export default Login;
