
import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  // let Counter = 5;

  const addValue = () => {
    if (counter !== 20) {
      setCounter(counter += 1)
    }
    setCounter(counter)
  }

  const removeValue = () => {
    if (counter != 0) {

      setCounter(counter -= 1)
    }
    setCounter(counter)
  }
  return (
    <>
      <h1>Helo</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue} >Remove value</button>
    </>
  )
}

export default App
