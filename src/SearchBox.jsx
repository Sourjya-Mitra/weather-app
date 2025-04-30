import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css" 
import { useState } from 'react';
import { red } from '@mui/material/colors';
export default function SearchBox ({updateInfo}){
    const API_URL="https://api.openweathermap.org/data/2.5/weather?";
    const API_KEY="**";
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    let getWeatherInfo = async ()=>{
        try{
        let response= await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        let result={
           city:city,
           temp:jsonResponse.main.temp,
           tempMin:jsonResponse.main.temp_min,
           tempMax:jsonResponse.main.temp_max,
           humidity:jsonResponse.main.humidity,
           feelslike:jsonResponse.main.feels_like,
           weather:jsonResponse.weather[0].description
        };
        console.log(result);
        return result;
       }
     catch(err){
       throw err;
    }}
     
    let handleChange=(evt)=>{
     setCity(evt.target.value);
    }
    let handleSubmit=async(evt)=>{
        try{
            evt.preventDefault();
            console.log(city);
          let newInfo= await getWeatherInfo();
            setCity("");
            updateInfo(newInfo);
        } catch(err){
           setError(true);
        }
        
       }
    return (
        <div className='SearchBox'>
        <form onSubmit={handleSubmit}><TextField id="city" label="City" variant="outlined" value={city} onChange={handleChange} required/>
        <br></br><br></br><br></br><br></br>
        <Button variant="contained" type ="submit">Search</Button>
        </form>
        {error && <p style ={{color:"red"}}>No such place exist in our API</p>}
        </div>
    )
}
