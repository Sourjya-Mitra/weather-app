import InfoBox from './InfoBox';
import SearchBox from './SearchBox';
import { useState } from 'react';
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Mbeya",
        feelslike: 20.41,
        humidity: 83,
        temp: 20.17,
        tempMax: 20.17,
        tempMin: 20.17,
        weather: "light rain"
    });
    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }
    return(
        <div style={{textAlign:"center"}}>
        <h2>Weather app by Sourjya</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
        )
}