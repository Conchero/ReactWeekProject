import { useEffect, useState } from "react"
import axios from 'axios'



const Weather = (props) => {

    const [result, setResult] = useState(null)
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

    const fetchWeather = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${props.locInfo.geo.lat}&lon=${props.locInfo.geo.lat}&appid=${API_KEY}&units=metric`)
            setResult(response.data)
        }
        catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchWeather()
    }, [])

    console.log(result)

    return (
        <>


            <div className="flex flex-col justify-center items-center " >
                <h1>Weather in {props.locInfo.city} : {result && result.main.temp} degrees </h1>
            </div>
        </>
    )
}


export default Weather