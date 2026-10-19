import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/Firebase";

function Home() {
  const [user, setUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (userCredential) => {
      if (userCredential) {
        setUser(userCredential.email);
      }
    });
  }, []);
  return <div>Merhaba {user}</div>;
}

export default Home;
