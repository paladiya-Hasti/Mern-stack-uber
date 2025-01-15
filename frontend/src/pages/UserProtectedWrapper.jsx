import React, {  useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const UserprotectedWrapper = ({children}) => {
  console.log(children);
  
  const token=localStorage.getItem('token')
  const navigate=useNavigate()

  console.log(token);

  useEffect(()=>{
    if(!token){
      navigate('/login')
    }
  },[token])
  
  
  return (
   <>{children}
   </>
  )
}

export default UserprotectedWrapper