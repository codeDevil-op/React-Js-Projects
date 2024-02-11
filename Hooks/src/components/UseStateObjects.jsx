import React from 'react'
import { useState } from 'react'

export const UseStateObjects = () => {
  const [profile,setProfile] = useState({
    name:'abdul Basit',
    job:'Not Working',
    company:'not mentioned'
  })
  return (
    <>
    <h2 style={{color:'white'}}>Name: {profile.name}</h2>
    <h4 style={{color:'black'}}>Job: {profile.job}</h4>
    <h4 style={{color:'red'}}>Company: {profile.company}</h4>
    <button onClick={()=>setProfile({...profile,company:'google',job:'IT Professional'})}>change company</button>
    </>
  )
}
