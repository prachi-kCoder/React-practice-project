import { useState } from "react"
import { getTicket,sum } from './helper';
import Ticket from "./Ticket";

export default function Lottery({n=3 ,winCondition}){

    let [ticket,setTicket]=useState(getTicket(n));
    let isWinning = winCondition(ticket);
    let buyTicket= ()=>{
        setTicket(getTicket(n));
    };
    
    return (
        <div>
            <h1>Lottery Game</h1>
            <p>Try Your Luck</p>
            <Ticket ticket={ticket}/>
            <br />
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations You Won !!!"}</h3>
        </div>
    )
}