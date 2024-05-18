import {useState} from 'react';
export default function Form(){
    let  [formData,setFormData]=useState({
        fullName:"",
        username:"",
        password:"",
        
    });

    let handleInputChange=(event) => {
        setFormData((currData)=>{
            return { ...currData,
                [event.target.name]:event.target.value};
        });
    };
    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log("Form data = ",formData);
        setFormData({
            fullName:"",
            username:"",
            password:"",
        });
    };
    
    return(
        <form>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" placeholder="Enter full Name"
             value={formData.fullName} onChange={handleInputChange} 
             id="fullName" name="fullName" 
            />
            <br />
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Enter your username" 
            value={formData.username} onChange={handleInputChange} 
            id="username" name="username"/>
            <br />
            <label htmlFor="password">Password</label>
            <input type="text" placeholder="Enter password" 
            value={formData.password} onChange={handleInputChange} 
            id="password" name="password"/>
            <br/><br/>

            <button onSubmit={handleSubmit}>Submit</button>
        </form>
    )
}