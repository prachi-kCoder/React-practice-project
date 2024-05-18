import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lottery from './Lottery'
import Ticket from './Ticket'
import {sum} from './helper'
import Form from './Form'
import CommentForm from './CommentForm'
import Counter from './Counter'
import Joker from './Joker'
function App() {
  let winCondition = (ticket)=>{
    // return sum(ticket)===15;// digit sum ==15 wale winner
    // return ticket.every((num) => num == ticket[0]); // all digits same wale winner
    return ticket[0]===0; // first digit zero

  }
  return (
    <>

      {/* <Lottery n={3} winCondition={winCondition}/>   */}
      {/* <Form/> */}
      {/* <CommentForm/> */}
      {/* <Counter /> */}
      <Joker/>  

      
     
    </>
  )
}

export default App
