import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15)

  const addValue = () => {
    // Only increment if count is less than 20
    if (count < 20) {
      setCount(count + 1)
    }
    console.log("clicked", count)
  }

  const removeValue = () => {
    // Only decrement if count is greater than 0
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value {count}</h2>

      <button onClick={addValue}>
        add value {count}
      </button>
      <br />

      <button onClick={removeValue}>
        remove value {count}
      </button>

      {/* Optional: Display message when limits are reached */}
      <p>
        {count >= 20 && "Maximum value reached!"}
        {count <= 0 && "Minimum value reached!"}
      </p>
    </>
  )
}

export default App