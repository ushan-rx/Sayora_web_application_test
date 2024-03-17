import { useState } from 'react'
import './App.css'
import Dashboard from './component/Dashboard'
import Sidebar from './component/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex'>
        <Sidebar/>
        <Dashboard/>
      </div>
      
    </>
  )
}

export default App
