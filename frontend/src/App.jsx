import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Start'
import UserLogin from './pages/UserLogin'
import Captainsignup from './pages/Captainsignup'
import Captainlogin from './pages/Captainlogin'
// import { UserDataContext } from './Context/userContext'
import Start from './pages/Start'
import UserSignup from './pages/UserSignup'


const App = () => {
//  const ans = useContext(UserDataContext)
//  console.log(ans);
 
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>}></Route>
        <Route path='/login' element={<UserLogin/>}></Route>
        <Route path='/signup' element={<UserSignup/>}></Route>
        <Route path='/captain-sign' element={<Captainsignup/>}></Route>
        <Route path='/captain-login' element={<Captainlogin/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        </Routes>
    </div>
  )
}

export default App