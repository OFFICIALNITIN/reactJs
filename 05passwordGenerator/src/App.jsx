
import { useEffect, useState, useRef } from 'react'
import { useCallback } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");


  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';

    if (number) str += '1234567890';
    if (characters) str += "!@#$%^&*()_+~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setPassword(pass)

  }, [length, number, characters, setPassword])

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, number, characters, setPassword])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-600'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text'
          value={password}
          className="outline-none w-full py-1 px-3 cursor-pointer"
          placeholder='password'
          readOnly
          ref={passwordRef}
        />
        <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyToClipBoard}>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            name=''
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={number}
            id='numberInput'
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={characters}
            id='charactersInput'
            onChange={() => {
              setCharacters((prev) => !prev);
            }}
          />
          <label htmlFor='charactersInput'>Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
