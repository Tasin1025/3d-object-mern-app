import { useState } from 'react'

import './App.css'
import "./registration"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav >
        <ul className=' bg-red-600 flex justify-center gap-5'>
          <li className='px-5 py-3 m-5 text-2xl font-bold font-mono border-solid border-stone-900 border-4 '> Home </li>
          <li className='px-5 py-3 m-5 text-2xl font-bold font-mono border-solid border-stone-900 border-4 '> registration </li>
        </ul>
      </nav>
      {/* form */}
      <div className="flex gap-5 justify-center p-5">
        <input placeholder='Email' type="text" className='border border-4 border-solid border-stone-900' />
        <input placeholder='password' type="text" className='border border-4 border-solid border-stone-900' />
        <input type="button" value="Login" className='px-5 border border-solid border-stone-900 border-4'  />
      </div>
      <registration>
      </registration>

    </>
  )
}

export default App
