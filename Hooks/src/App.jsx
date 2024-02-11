import React from 'react'
import { useState } from 'react'
import { peopleBioData } from './components/useStateArray'
import './App.css'
import { UseStateObjects } from './components/UseStateObjects'
import { Conditional } from './components/Conditional'
import { Task } from './components/Task'


function App() {
  
  // const [people, setPeople] = useState(peopleBioData)

  // const handleDelete = (id)=>{
  //   const newArr = people.filter((singalPerson) => singalPerson.id !==id)
  //   setPeople(newArr)
  // }

    return (
    <>
    <section className='full-container'>
      <div className='main-content'>
      {/* <h2>People Bio Data</h2>
      {people.map((person)=>{
        const {id,name} = person
        return (
          <div key={id} className='card'>
          <h2>{name}</h2>
          <button onClick={()=>handleDelete(id)}>Delete Me</button>
        </div>
        )  
      })}
      {
        people.length > 1 &&(<button className='btn' onClick={()=>setPeople([])}>Clear All</button>)
      } */}
      {/* <h2>useState Objects</h2>
        <UseStateObjects /> */}
        {/* <Conditional /> */}
        <Task/>
      </div>
    </section>
    </>
  )
}
export default App
