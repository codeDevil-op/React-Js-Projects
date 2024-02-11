import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import Reset from './Reset'
import './auth.css'
const AuthContainer = () => {
  const [auth,setAuth] = useState({
    login:true,
    register:false,
    reset:false
  })
  const [eyevisibility, setEyeVisibility] = useState(false);
  const handleVisible = () => {
    setEyeVisibility((prev)=>!prev);
  };
  const {login,register,reset} = auth
  // const [login, setLogin] = useState(true)
  // const [register, setRegister] = useState(false)
  // const [reset, setReset] = useState(false)
  const handleRegister = ()=>{
    setAuth({
      login:false,
      register:true,
    })
    setEyeVisibility(false)
  }
  const handleReset =()=>{
    setAuth({
      reset:true,
      login:false
    })
  }
  const handlLogin = () =>{
    setAuth({
      register:false,
      reset:false,
      login:true
    })
    setEyeVisibility(false)
  }
  return (
    <section className='--flex-center --100vh --bg-white'>
    <div className='container box'>
    {login&&<Login 
    onRegister={handleRegister} 
    onReset={handleReset}
      onEyeVisibility={eyevisibility}
      onHandleVisible={handleVisible}
    />}
    {register&&<Register onLogin={handlLogin}
      onEyeVisibility={eyevisibility}
      onHandleVisible={handleVisible}
    />}
    {reset&&<Reset onLogin={handlLogin}/>}
      
    </div>
    </section>

  )
}

export default AuthContainer