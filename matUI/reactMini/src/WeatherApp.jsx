import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        name:"New Delhi",
        feelslike:26.6,
        humidity:83,
        temp:25.8,
        tempMax:25.8,
        tempMin:23.9,
        weather:"Scattered clouds",
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    };
    return(
        <div style={{textAlign:"center"}}>
            <h1>Today's Weather</h1>
            <SearchBox updateInfo={updateInfo} />
            <br />
            <br />
            <InfoBox info={weatherInfo}/>
        </div>
    )
};