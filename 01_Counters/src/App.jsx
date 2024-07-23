//  React Basically focuses on the ui updation part

import { useState } from 'react';
import './App.css'

function App() {

  let [count, setCount] = useState(0)
  
  // let count = 0;
  const addValue = () => {
    console.log("Clicked", count);
    // count = count + 1
    setCount(count + 1)
  }
  
  

  const removeValue = () => {
    console.log("Clicked", count);
    // count = count + 1
    setCount(count - 1)
  }





  return (
    <>

      <h1>Basic Counter With React</h1>
      <h2>Counter Value: {count}</h2>

      <button 
      onClick={addValue}
      >Add Value: {count} </button>
      <br />
      <button onClick={removeValue}>Remove Value: {count} </button>
      <p>Footer: {count}</p>

    </>
  )
}

export default App
