import { useState,useEffect } from "react"

export default function Counter(){
    let [countx,setCountx]=useState(0);
    let [county,setCounty]=useState(0);
    let increX=()=>{
        setCountx(currCount => currCount+1);
    }
    let increY=()=>{
        setCounty(currCount => currCount+2);
    }
    useEffect(function printSomething(){
        console.log("its useEffect ka sideEffect");
    },[countx]);//empty array shows that no-one can triggering it , only initial rendering , not on rerendering of it
    //countx is a dependency restring the trigger on state change only by countx
    

    return(
        <div>
            Counter has Started!!
            <h3>Countx = {countx}</h3>
            <button onClick={increX} >TapX</button>
            <br /><br />
            <h3>County = {county}</h3>
            <button onClick={increY} >TapY</button>
            <br /><br />
            
        </div>
    )
}