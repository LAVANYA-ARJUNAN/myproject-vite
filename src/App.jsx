import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more.
      </p>
      <h1 className='italic  bg-red-100'>Welcome</h1>
      <p className='italic bg-black text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eum consequuntur? Amet ex vero suscipit atque cupiditate repellat, magnam quis reprehenderit voluptates molestias dolore ea perferendis ipsum, saepe placeat. Harum!</p>
      <h2 className='font-extrabold origin-center'>React</h2>
      <p className='text-shadow-2xs italic text-red-300'>Hi Welcome</p>
      <p className='italic bg-black text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias voluptas quod eligendi saepe quasi corporis commodi dicta facere vel sint.</p>
      <p className='italic bg-black text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, reiciendis.</p>
    </>
  )
}

export default App