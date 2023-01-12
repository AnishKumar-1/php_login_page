import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login() {
   const[email,setemail]=useState('');
   const[password,setpassword]=useState('');
   const [message,setmessage]=useState(false);
   const [receivemessage,setreceive]=useState('');
   const nav=useNavigate();
   const handlechange=(e)=>{
    e.preventDefault();
    if(email && password)
    {
        setmessage(true);
        setemail('');
        setpassword('');
        
        let formdata=new FormData();
        formdata.append('email',email);
        formdata.append('password',password);
        axios.post('http://localhost/myproject/login.php',formdata).then((res)=>{
           setreceive(res.data.message);
          
        }).catch(err=>{
            console.log(err);
        })
    }
    else{
        alert("enter data..");
    }
   }
    return (
        <div>
            <div className='registration-top-container'>
                <div className='registration-container'>
                <h1>Login Page..</h1>
               {message? <span>{receivemessage}</span>:""}
                    <form>
                        <label htmlFor='email'>email</label>
                        <input type="email" name="email" value={email} onChange={(event)=>{setemail(event.target.value)}}/>
                        <label htmlFor='password'>password</label>
                        <input type="password" name="password"  value={password} onChange={(event)=>{setpassword(event.target.value)}}/>
                        <button onClick={handlechange}>Login</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login
