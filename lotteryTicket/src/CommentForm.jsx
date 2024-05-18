import { useState } from "react";
export default function  CommentForm(){
    let [formData,setFormData]=useState({
        username:"",
        remarks:"",
        rating:5
    });
    let handleInputChange=(event)=>{
        setFormData((currData)=>{
            return {...currData , [event.target.name]:event.target.value};
        });
    };
    let handleSubmit=(event)=>{
        console.log(formData);
        event.preventDefault();
    }
    return (
        <div>
            <h4>Make Comments</h4>
            <form onSubmit={handleSubmit} >
                <label htmlFor="username">Username</label>&nbsp;&nbsp;
                <input type="text" placeholder="Your name" value={formData.username}
                onChange={handleInputChange}
                id="username" name="username"/>
                <br />
                <br />
                <label htmlFor="remarks">Remarks</label>&nbsp;&nbsp;
                <textarea placeholder="Give Remarks ..." value={formData.remarks}
                onChange={handleInputChange} id="remarks" name="remarks" >
                </textarea>
                <br />
                <br />
                <label htmlFor="rating">Rate Us :</label>&nbsp;&nbsp;
                <input type="number" placeholder="rating" min={1} max={5} 
                value={formData.rating} onChange={handleInputChange}
                id="rating" name="rating"/>
                <br />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )


}