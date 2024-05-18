import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import {useState} from 'react';

export default function SearchBox({updateInfo}){
    let [city,setcity]=useState("");
    let [error,setError]=useState(false);
    let API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY='5aa9b9255217eb2de0086b390ffa0559';

    let getWeatherInfo= async ( )=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        let result={
            name:jsonResponse.name,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,  
        };
        console.log("---HAVE A LOOK ON WEATHER---");
        console.log(result);
        return result;
    }catch(err){
        // setError("The Place you are looking for is not registered!!!");
        throw err;
    }
};
        

    
    let handleChange= (event)=>{
        setcity(event.target.value);
    };
    let handleSubmit=async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setcity("");
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo);
        }
        catch(err){
            setError(true);
        }
    };
    return(
        <div className='SearchBox'>
            
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" 
                variant='outlined' value={city} onChange={handleChange} required></TextField>
                <br/><br/>
                <Button variant='outlined' type='submit'> Search</Button>
                {error &&  <p style={{color:"Red"}}>No Such Registered place in API</p>}
                {!error && <p style={{color:"Green"}}>Place Found</p>}
            </form>

        </div>
    )
};