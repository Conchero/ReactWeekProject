import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Avatar from './Components/Avatar.jsx'
import Homer from './assets/img/Homer.png'
import Bart from './assets/img/Bart.png'
function App() {
  const [count, setCount] = useState(0)

  const userInfoArray = [
                    {firstName:"Homer",
                      lastName:"Simpson",
                    passion:"Drinking Duff",
                    img:Homer},
                    {firstName:"Bart",
                      lastName:"Simpson",
                      passion:"Making pranks",
                      img:Bart}];

  


  return (
    <>
      <div>
        {userInfoArray.map((el,i) => <Avatar key={i} infoUser={{...el}}/>)}
      </div>
    </>
  )
}

export default App
