import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passref = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%&*_"

    for (let index = 1; index <= length; index++) {
      const passIndex = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(passIndex)
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = () => {
    passref.current?.select()
    window.navigator.clipboard.writeText(password);
  }

  useEffect(()=>{
    passwordGenerator()
  },[length,charAllowed,numAllowed,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-lg text-center mx-auto shadow-md rounded-lg px-4 my-8 py-2 text-orange-500 bg-gray-700'>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passref}/>
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white w-16 px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 '>
          <div className="flex items-center gap-x-1">
            <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e)=> {setlength(e.target.value)}}/>

            <label >Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numAllowed} id='numberInput' onChange={() => {setNumAllowed((prev)=>!prev)}} />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charAllowed} id='characterInput' onChange={() => {setCharAllowed((prev)=>!prev)}} />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
