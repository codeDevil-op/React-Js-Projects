import React, { useState, useEffect } from "react";
import regImg from "../../assets/register.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {FaCheck} from 'react-icons/fa'

function Register({ onLogin, onEyeVisibility, onHandleVisible}) {
  
  const [showindicator, setShowIndicator] = useState(false);
  const [pass,setPass] = useState('')


  const [passletter,setPassLetter] = useState(false)
  const [passnumber,setPassNumber] = useState(false)
  const [passchar,setPassChar] = useState(false)
  const [passlength,setPassLength] = useState(false)

 const [passcomplete,setPassComplete] = useState(false)


  
  
  const handleShowIndicator = ()=>{
    setShowIndicator(true)  
  }

  const handleInputChange = (e)=>{
    setPass(e.target.value)
  }
  useEffect(() => {
    //check Lower and Uppercase 
    if(pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
      setPassLetter(true)
    }else{
      setPassLetter(false)
    }

    // check For Numbers
if(pass.match (/([0-9])/)){
  setPassNumber(true)
}else{
  setPassNumber(false)
}
// check For Special char 

if(pass.match(/([!,@,#,$,%,^,&,*,?,_,~])/)){
  setPassChar(true)
}else{
  setPassChar(false)
}

// for length 
if(pass.length > 7){
  setPassLength(true)
}else{
  setPassLength(false)
}
if(passletter && passnumber && passchar && passlength){
  setPassComplete(true)
}else{
  setPassComplete(false)
}

  }, [pass,passletter,passlength,passchar,passnumber])
  
  return (
    <>
      <div className="main-container --flex-center">
        <div className="form-container">
          <form className="--form-control">
            <h2 className="--color-danger --text-center">Register</h2>
            <input type="text" placeholder="Username" className="--width-100" />
            <input type="email" placeholder="Email" className="--width-100" />
            {/* Password Field  */}
            <div className="password">
              <input
              onFocus={handleShowIndicator}
                type={onEyeVisibility ? "text" : "password"}
                placeholder="Password"
                className="--width-100"
                value={pass}
                onChange={handleInputChange}
              />
              <span className="icon" onClick={onHandleVisible}>
                {onEyeVisibility ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>
            {/* Password Field  */}
            <button onClick={onLogin} disabled={!passcomplete} className={passcomplete? '--btn --btn-primary --btn-block':'--btn --btn-primary --btn-block btn-disabled'}>
              Register
            </button>
            <span className="--text-sm --block">
              Have an acount ?{" "}
              <a href="#" onClick={onLogin}>
                Login
              </a>
            </span>
            {/* password strength indicator start here  */}
            <div className={showindicator? 'show-indicator': 'hide-indicator'}>
              <ul className="--list-style-none --card --bg-grey --text-sm --p">
                <p className="--text-sm">Password Strength Indicator</p>
                <li className={passletter? 'pass-strength':'pass-weak'}>
                  <span className = '--align-center'>
                  {passletter?<FaCheck/>: '*' }
                    &nbsp; Lowercase & Uppercase
                  </span>
                </li>
                <li className={passnumber? 'pass-strength':'pass-weak'}>
                  <span className = '--align-center'> {passnumber?<FaCheck/>: '*'} &nbsp; Numbers (0-9)</span>
                </li>
                <li className={passchar? 'pass-strength':'pass-weak'}>
                  {" "} 
                  <span className = '--align-center'> {passchar?<FaCheck/>: '*'} &nbsp; Special Character (!@#$%^&*)</span>
                </li>
                <li className={passlength? 'pass-strength':'pass-weak'}>
                  {" "}
                  <span className = '--align-center'> {passlength?<FaCheck/>: '*'} &nbsp; At least 8 Character</span>
                </li>
              </ul>
            </div>
            {/* password strength indicator ends here  */}
          </form>
        </div>
        <div className="img-container">
          <img src={regImg} alt="Login" />
        </div>
      </div>
    </>
  );
}

export default Register;
