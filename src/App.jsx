import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Avatar from './Components/Avatar.jsx'
import Hello from './Components/Hello.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Hello/>
        <Avatar/>
      </div>
    </>
  )
}

export default App
