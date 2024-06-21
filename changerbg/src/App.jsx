import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [color,setColor]=useState('sky')
  function changeColor(color){
    setColor(color)
  }
  return (
    <div className="w-full h-screen duration-500 bg-sky-400" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3  px-3 py-2 rounded-3xl">
          <button onClick={()=>changeColor('red')} className='px-6 py-2 border-2 bg-red-400 border-black text-black font-semibold rounded-lg hover:bg-red-500 hover:text-white'>red</button>
          <button onClick={()=>changeColor('green')} className='px-6 py-2 border-2 bg-green-400 border-black text-black font-semibold rounded-lg hover:bg-green-500 hover:text-white'>green</button>
          <button onClick={()=>changeColor('blue')} className='px-6 py-2 border-2 bg-blue-400 border-black text-black font-semibold rounded-lg hover:bg-blue-500 hover:text-white'>blue</button>
          <button onClick={()=>changeColor('orange')} className='px-6 py-2 border-2 bg-orange-400 border-black text-black font-semibold rounded-lg hover:bg-orange-500 hover:text-white'>orange</button>
          <button onClick={()=>changeColor('purple')} className='px-6 py-2 border-2 bg-purple-400 border-black text-black font-semibold rounded-lg hover:bg-purple-500 hover:text-white'>purple</button>
        </div>
      </div>
    </div>
  );
}

export default App;
