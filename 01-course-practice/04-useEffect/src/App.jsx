import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log("It runs after every render.")
  })

  useEffect(() => {
    console.log("It runs after the first render.")
  }, [])

  useEffect(() => {
    console.log("First render and firstName changes.")
  },[firstName])

  useEffect(() => {
    console.log("First render and lastName changes.")
  },[lastName])

  return (
    <div>
      <button onClick={() => setFirstName("Mert")}>Name Change</button>
      <button onClick={() => setLastName("Gozubuyuk")}>Last Name Change</button>
    </div>
  )
}

export default App
