import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [count,setCount] = useState(15)

  // let count = 15

  const addValue = ()=>{
    count = count+1
    setCount(count)
    console.log("clicked",count)
  };

  const removeValue = ()=>{
    setCount(count-1)
  }

  return (
    <>
     <h1>Chai Aur React</h1>
     <h2>Counter value {count}</h2>

     <button onClick={addValue}
     >add value{count}</button>
      <br />

     <button onClick={removeValue}
     >remove value {count}</button>
    </>
  )
}

export default App
