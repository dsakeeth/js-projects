import { useState,useCallback,useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbers,setNumbers]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState('')
  const passwordref=useRef(null)

  const generatePassword=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbers) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_+-={}[]:;<>?,./'"

    for(let i=1;i<=length;i++){
      const char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,numbers,charAllowed])

  const copyPassword=() =>{
    window.navigator.clipboard.writeText(password)
    passwordref.current?.select()
  }

  useEffect(()=>{
    generatePassword()
  },[length,numbers,charAllowed])
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordref}
        />
        <button
        onClick={copyPassword}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '
        >
          copy</button>
      
      </div>
      <div className='flex  text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={8}
          max={20}
          name=''
          value={length} 
          className='cursor-pointer'
          onChange={e=>setLength(e.target.value)}/>
          <label htmlFor="length">length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numbers} 
          onChange={()=>{setNumbers((prev)=>!prev)}}/>
          <label htmlFor="nmbers">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed} 
          onChange={()=>{setCharAllowed((prev)=>!prev)}}/>
          <label htmlFor="charAllowed">Characters</label>
        </div>
      </div>
      
    </div>
  )
}

export default App
