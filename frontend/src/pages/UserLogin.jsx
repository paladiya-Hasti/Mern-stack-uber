import React, { useState } from "react";
import { Link } from "react-router-dom";
const UserLogin = () => {
  const [email,setEmail]=useState('')
  const [Password,setPassword]=useState('')
  const [userData,setUserData]=useState({})

  const handleSubmit=(e)=>{
e.preventDefault()
// console.log(Email,Password);
setUserData({
  email:email,
  Password:Password
})
console.log(userData);

setEmail('')
setPassword('')

  }
  return (
    <div className="p-7 flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />

        <form onSubmit={(e)=>handleSubmit(e)}>
          <h3 className="text-lg font-medium mb-2 ">What's your email</h3>
          <input
            type="email"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 w-full text-lg placeholder:text:base py-4"
            placeholder="email@gmail.com"
          />
          <h3>Enter Password</h3>
          <input
            type="password"
            required
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 w-full text-lg placeholder:text:base py-4"
            placeholder="password"
          />
          <button className="bg-[#111] text-white mb-7 font-semibold rounded px-4 w-full text-lg placeholder:text:base py-4">
            login
          </button>
          <p>New here? <Link  to='/signup' className='text-blue-600'>Create New account</Link></p>
        </form>
      </div>

      <div>
        <Link to='/captain-login' className="bg-[#10b461] flex items-center justify-center  text-white mb-7 font-semibold rounded px-4 w-full text-lg placeholder:text:base py-4">Sign in as captain</Link>
      </div>
    </div>
  );
};

export default UserLogin;
