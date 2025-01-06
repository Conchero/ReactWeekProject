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
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const URL = import.meta.env.VITE_URL;

  const fetchData = async () => {
    try {
      const response = await axios.get(URL);
      setData(response.data);
    } catch (err) {
      setError(err.message);
    }
    finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (loading)
    return <p>loading..</p>

  if (error)
    return <p>{error}</p>


  return (
    <>
      <div>
        {data.map((el,i) => <h2 key={i}>Hello my name is {el.name} Aka {el.username} </h2>)}
      </div>
    </>
  )
}

export default App
