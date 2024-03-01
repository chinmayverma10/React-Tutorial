import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgColor,setBgColor] = useState("olive")


  return (
    <div className='w-full h-screen' style={{backgroundColor: bgColor}}>
     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl'>
        <button className='ouline-none px-4 py-1 rounded-full text-black shadow-lg '
        style={{backgroundColor: "white"}} onClick={() => setBgColor("white")}>
          White
        </button>
        <button className='ouline-none px-4 py-1 rounded-full text-white shadow-lg '
        style={{backgroundColor: "black"}} onClick={() => setBgColor("black")}>
          Black
        </button>
        <button className='ouline-none px-4 py-1 rounded-full text-white shadow-lg '
        style={{backgroundColor: "red"}} onClick={() => setBgColor("red")}>
          Red
        </button>
        <button className='ouline-none px-4 py-1 rounded-full text-white shadow-lg '
        style={{backgroundColor: "yellow"}} onClick={() => setBgColor("yellow")}>
          Yellow
        </button>
        <button className='ouline-none px-4 py-1 rounded-full text-white shadow-lg '
        style={{backgroundColor: "green"}} onClick={() => setBgColor("green")}>
          Green
        </button>
        <button className='ouline-none px-4 py-1 rounded-full text-white shadow-lg '
        style={{backgroundColor: "grey"}} onClick={() => setBgColor("grey")}>
          Grey
        </button>
        <button className='ouline-none px-4 py-1 rounded-full text-white shadow-lg '
        style={{backgroundColor: "blue"}} onClick={() => setBgColor("blue")}>
          Blue
        </button>
        <button className='ouline-none px-4 py-1 rounded-full text-white shadow-lg '
        style={{backgroundColor: "orange"}} onClick={() => setBgColor("orange")}>
          Orange
        </button>
      </div>
     </div>
    </div>
  )
}

export default App