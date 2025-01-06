import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Avatar from './Components/ExSimpson/Avatar.jsx'
import Homer from './assets/img/ExSimpson/Homer.png'
import Bart from './assets/img/ExSimpson/Bart.png'
import { useEffect } from 'react'
import axios from 'axios'
function App() {
  const [data, setData] = useState([])


  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <div>
        {data.map((el,i) => <h2 key={i}>Hello my name is {el.name} Aka {el.username} </h2>)}
      </div>
    </>
  )
}

export default App
