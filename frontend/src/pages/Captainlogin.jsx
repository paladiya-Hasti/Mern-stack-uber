import React, { useState } from "react";
import { Link } from "react-router-dom";

const Captainlogin = () => {
  const [email,setEmail]=useState('')
    const [Password,setPassword]=useState('')
    const [captainData,setCaptainData]=useState({})
  
    const handleSubmit=(e)=>{
  e.preventDefault()
  // console.log(Email,Password);
  setCaptainData({
    email:email,
    Password:Password
  })
  console.log(captainData);
  
  setEmail('')
  setPassword('')
  
    }
  return (
    <div>
   
      <div className="p-7 flex flex-col justify-between">
        <div>
          <img
            className="w-16 mb-10"
            src="https://www.svgrepo.com/show/505031/uber-driver.svg"
            alt=""
          />

          <form onSubmit={(e) => handleSubmit(e)}>
            <h3 className="text-lg font-medium mb-2 ">What's your email</h3>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#eeeeee] mb-7 rounded px-4 w-full text-lg placeholder:text:base py-4"
              placeholder="email@gmail.com"
            />
            <h3>Enter Password</h3>
            <input
              type="password"
              required
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#eeeeee] mb-7 rounded px-4 w-full text-lg placeholder:text:base py-4"
              placeholder="password"
            />
            <button className="bg-[#111] text-white mb-7 font-semibold rounded px-4 w-full text-lg placeholder:text:base py-4">
              login
            </button>
            <p>
              Join a fleet?{" "}
              <Link to="/captain-sign" className="text-blue-600">
                Register as a Captain
              </Link>
            </p>
          </form>
        </div>

        <div>
          <Link
            to="/login"
            className="bg-[#d5622d] flex items-center justify-center  text-white mb-7 font-semibold rounded px-4 w-full text-lg placeholder:text:base py-4"
          >
            Sign in as user
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Captainlogin;
