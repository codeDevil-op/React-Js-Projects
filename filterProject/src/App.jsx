import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { citiesOfCountry } from './components/countryData'
function App() {
  
  
  const [country,setCountry] = useState(citiesOfCountry)
  const [selectAcountry,setSelectACountry] = useState(0)
  const [city,setCity] = useState('')
  return (
    <>
      <select value={selectAcountry} onChange={(e)=>setSelectACountry(e.target.value)
      }>
        {country.map((scountry,index)=>{
          return(
            <option value={index} key={index}>{scountry.name}</option>
          )
        })}
        
      </select>


      {/* 2nd dropdown 
       */}
       <select value={city} onChange={(e)=>setCity(e.target.value)}>
       {
        country[selectAcountry].citiesAre.map((item,index)=>{
         return(
          <option key={index} value={index}>{item}</option>
         ) 
        })
       }
       </select>
    </>
  )
}

export default App
