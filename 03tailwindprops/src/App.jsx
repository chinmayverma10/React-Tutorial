import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  let detail = {
    name: "Chinmay",
    age: 20
  }
  let detail2 = {
    name: "Verma",
    age: 20
  }
  return (
    <>
    <Navbar channel="something" Details = {detail}/>
    <Navbar channel="something" Details = {detail2}/>
   
    <h1 className='mt-4 bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>

    </>
  )
}

export default App
