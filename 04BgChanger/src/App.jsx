
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive');

  return (
    <div className='w-full h-screen duration-200'
      style={{ background: color }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setColor("red")}
            style={{ background: "red" }}>red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setColor("green")}
            style={{ background: "green" }}>green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setColor("pink")}
            style={{ background: "pink" }}>pink</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setColor("orange")}
            style={{ background: "orange" }}>orange</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setColor("yellow")}
            style={{ background: "yellow" }}>yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setColor("blue")}
            style={{ background: "blue" }}>blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setColor("cyan")}
            style={{ background: "cyan" }}>cyan</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setColor("purple")}
            style={{ background: "purple" }}>purple</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setColor("brown")}
            style={{ background: "brown" }}>brown</button>
        </div>
      </div>
    </div>
  )
}

export default App
