import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('black')

  const colors = ['black', 'red', 'blue', 'green', 'yellow', 'purple', 'pink']

  const handleButtonClick = () => {
    setBgColor(colors[(count + 1) % colors.length])
  }

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: bgColor }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={handleButtonClick}>Change Background</button>
          <span>{count}</span>
        </div>
      </div>
    </div>
  )
}

export default App
