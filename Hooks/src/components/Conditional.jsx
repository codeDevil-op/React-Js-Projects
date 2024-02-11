import React, { useState } from 'react';
import './conditional.css'

export const Conditional = () => {
    const [loggedin,setIsLoggedIn] = useState(false);    
  return (
    <div>
    <span style={{fontSize:'30px'}} className={loggedin?'user':'guest'}>{loggedin?'Welcome, Roman':'Welcome, Guest '}</span>
    
    </div>
  )
}
