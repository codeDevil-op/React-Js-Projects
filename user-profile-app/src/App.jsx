import { useState } from 'react'
import { bioData } from './components/peopleData'
import './App.css'

function App() {
  
  const [people,setPeople] = useState(bioData)
  const [hideshow,setHideShow] = useState(false)
  const [type,setType] = useState('password')

  const handleDelete = (id)=>{
    let filteredArr = people.filter((item)=>item.id!==id)
    return setPeople(filteredArr)
  }
  const hideAndSeek = (id)=>{
   
  }

  return (
    <>
    <section className='full-container'>
      <div className='main-content'>
      <h2>People Bio Data</h2>
      {people.map((person)=>{
        const {id,name,job,image} = person
        return (
          <div key={id} className='card'>
          <img src={image}/>
          <h2>{name}</h2>
          <p>{job}</p>
          <button onClick={()=>handleDelete(id)}>Delete Me</button>
          <input type={type}/>
          <button onClick={()=>hideAndSeek(id)}>{!hideshow?'see':'hide'}</button>
        </div>
        )  
      })}
      {
        people.length > 1 &&(<button className='btn' onClick={()=>setPeople([])}>Clear All</button>)
      }
      </div>
      </section>
    </>
  )
}

export default App
