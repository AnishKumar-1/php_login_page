import React, { useState } from 'react'
import axios from 'axios';

function Registration() {
   const[username,setusername]=useState('');
   const[email,setemail]=useState('');
   const[password,setpassword]=useState('');
   const [condition,setcondition]=useState(false);
   const [message,setmessage]=useState('');  
   const handlechange=(e)=>{
    e.preventDefault();
    if(username && email && password)
    {
        setusername('');
        setemail('');
        setpassword('');
        let formdata=new FormData();
        formdata.append('username',username);
        formdata.append('email',email);
        formdata.append('password',password);
        axios.post('http://localhost/myproject/registration.php',formdata).then((res)=>{
            setmessage(res.data);
            setcondition(true);
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
                <h1>Registration Page..</h1>
               {condition?<span>{message}</span>:""}
                    <form>
                        <label htmlFor='username'>username</label>
                        <input type="text" name='username' value={username} onChange={(event)=>{setusername(event.target.value)}}/>
                        <label htmlFor='email'>email</label>
                        <input type="email" name='email' value={email} onChange={(event)=>{setemail(event.target.value)}}/>
                        <label htmlFor='password'>password</label>
                        <input type="password" name='password' value={password} onChange={(event)=>{setpassword(event.target.value)}}/>
                        <button type='submit' onClick={handlechange}>Sign up</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Registration
