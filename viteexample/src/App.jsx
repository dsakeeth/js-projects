import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  //let counter=15;
  const addValue=() => {
    setCounter(counter+1)
    console.log(counter)
  }

  const removeValue=() => {
    setCounter(counter-1)
    console.log(counter)
  }

  const reset=() => {
    setCounter(0)
    console.log(0)
  }

  return (
    <>
      <h1>React App {counter }</h1>
      <h2>counter value</h2>
      <button onClick={addValue}>add value</button>
      <button onClick={removeValue}>remove value</button>
      <button onClick={reset}>reset</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
