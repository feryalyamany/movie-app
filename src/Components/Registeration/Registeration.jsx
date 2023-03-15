import React from "react";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'


export default function Registeration() {
  let navigate=useNavigate();
  const [isLoading, setIsLoading]= useState(false);
  const[err, setErr]= useState('')
  const [user, setUser]= useState({
    
    "first_name":"",
    "last_name":"",
    "email":"",
    "password":""
  
    
})

function userdata({target}){
  setUser({...user, [target.name]:target.value})
  console.log(user)
}

async function signup(e){
  e.preventDefault();
  setIsLoading(true);
  let {data} =await axios.post("https://sticky-note-fe.vercel.app/signup",user)
  setIsLoading(false);
  // console.log(data.message);
  if(data.message==="success"){
      navigate("/login")
  }
  else{
    setErr(data.message);
  }
}

  return (
    <>
      <div className="container my-5 ">
        <div className=" w-50 mx-auto pt-5">
          <form onSubmit={signup}>
            <input
              onChange={userdata}
              type="text"
              name="first_name"
              placeholder="First Name"
              className="form-control my-2"
            />
            <input
              onChange={userdata}
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="form-control my-2"
            />
            <input
              onChange={userdata}
              type="email"
              name="email"
              placeholder="Email"
              className="form-control my-2"
            />
            {err?<div className=" alert alert-danger my-2 p-2 rounded-2 text-center">Enter Valid Email</div>:''}
            <input
              onChange={userdata}
              type="password"
              name="password"
              placeholder="Password"
              className="form-control my-2"
            />
      
             <button type="submit" className={'btn btn-primary w-100 ' + (isLoading ? "disabled" : "")}>{isLoading ? <i className="fa fa-spinner fa-spin" aria-hidden="true"></i> : "Sign-up"}</button>
          </form>
        </div>
      </div>
    </>
  );
}