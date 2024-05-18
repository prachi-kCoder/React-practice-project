import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import "./InfoBox.css";
//icons
import LightModeIcon from '@mui/icons-material/LightMode';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
// import { FaCloudRain } from "react-icons/fa";
// import { FaRegSnowflake } from "react-icons/fa";

export default function InfoBox({info}){
    const INIT_URL="https://media.istockphoto.com/id/1042364974/photo/scenic-view-of-mountain-horizon.webp?b=1&s=170667a&w=0&k=20&c=P9MVjn_cAclLIRffM7eoM2LZfhTtDCikJ5FurfaLNMA=";
    // let HOT_URL="https://unsplash.com/photos/scenery-of-a-grassfield-during-sunset-u7ldh_tgH3s";
    let HOT_URL="https://media.istockphoto.com/id/1042364974/photo/scenic-view-of-mountain-horizon.webp?b=1&s=170667a&w=0&k=20&c=P9MVjn_cAclLIRffM7eoM2LZfhTtDCikJ5FurfaLNMA=";
    let COLD_URL="https://images.unsplash.com/photo-1491831947735-7f519f52f6db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbGQlMjBjaXRyeSUyMHdpbnRlcnN8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL="https://images.unsplash.com/photo-1610901342861-e472a8c248b5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <div className='InfoBox'>
         <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity >80 
            ? RAIN_URL
            :info.temp>15
            ? HOT_URL
            : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.name}&nbsp;&nbsp;{info.humidity>80?<ThunderstormIcon/>:info.temp>17?<LightModeIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Max Temp : {info.tempMax}&deg;C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Humidity {info.humidity} <br/>
        Min Temp {info.tempMin}&deg;C<br/>
        Weather :{info.weather}<br/>
        FeelsLike:{info.feelslike}<br/>

        </Typography>
      </CardContent>
      
        </Card>
    </div>

        </div>
    );

}