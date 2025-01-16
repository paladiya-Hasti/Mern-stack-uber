import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import Captainlogin from './pages/Captainlogin'
import Start from './pages/Start'
import UserSignup from './pages/UserSignup'
import { UserDataContext } from './context/UserContext'
import UserprotectedWrapper from './pages/UserprotectedWrapper'
import Userlogout from './pages/Userlogout'
import CaptainSignup from './pages/Captainsignup'
import CaptainHome from './pages/CaptainHome'
import Home from './pages/Home'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'
import 'remixicon/fonts/remixicon.css'
const App = () => {

 const ans=useContext(UserDataContext)
 console.log(ans);
 
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>}></Route>
        <Route path='/login' element={<UserLogin/>}></Route>
        <Route path='/riding' element={<Riding/>}></Route>
        <Route path='/signup' element={<UserSignup/>}></Route>
        <Route path='/captain-signup' element={<CaptainSignup/>}></Route>
        <Route path='/captain-login' element={<Captainlogin/>}></Route>
        <Route path='/home' element={<UserprotectedWrapper><Home/></UserprotectedWrapper>}></Route>
        <Route path='/user/logout' element={<UserprotectedWrapper><Userlogout></Userlogout></UserprotectedWrapper>}></Route>
        <Route path='captain-home' element={<CaptainHome/>}></Route>\
        <Route path='/captain-riding' element={<CaptainRiding></CaptainRiding>}></Route>
        </Routes>
    </div>
  )
}

export default App