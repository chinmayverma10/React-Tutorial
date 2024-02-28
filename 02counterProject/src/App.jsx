import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  function increase () {
    if(counter < 20){
      setCounter(++counter)
    }
  }
  function decrease () {
    if(counter != 0){
      setCounter(--counter)
    }
  }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={increase}>Increase Value</button>
    <br />
    <button onClick={decrease}>Decrease Value</button>
    </>
  )
}

export default App