import { useState } from 'react'

import './App.css'
import Todo from './Components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-900 grid py-4 min-h-screen'>
    <Todo/>
    </div>
  )
}

export default App
