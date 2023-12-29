import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Signup = () => {
let[username,setusername]=useState("")
let[email,setemail]=useState("")
let[password,setpassword]=useState("")
let dispatch=useDispatch();

const handleSignup=(userdata)=>{
  // let user=await axios.post("  http://localhost:8090/user",userdata);
  // dispatch({name:"user"})
   console.log(userdata);
  
}

const handlesumit =(e)=>{
  e.preventDefault();
 
  let user={
    username:username,
    email:email,
    password:password

  }
  console.log(user);
  // handleSignup(user)
  dispatch(user)
}
  return (
    <div>
    <form onSubmit={handlesumit}>
    <input type="text" placeholder='username' value={username} onChange={(e)=>setusername(e.target.value)}/>
     <input type="email" placeholder='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
     <input type="text" placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
    
    <input type='submit'/>
        </form>
    </div>
  )
}

export default Signup
