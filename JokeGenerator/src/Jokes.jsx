import React, { useEffect, useState } from 'react'
import spinner from '../src/assets/spinner1.jpg'

function Jokes() {
  const [joke,setJoke] = useState({})
  const [isloading,setIsLoading] = useState(true)
  const url = 'https://api.quotable.io/random'
  const getJoke = ()=>{
    setIsLoading(true)
    fetch(url)
    .then((response)=>{
      return response.json()
    }).then((data)=>{
      setJoke(data)
      setIsLoading(false)
      // console.log(data)
    })
  }
  useEffect(() => {
    getJoke()
  }, [])
  
  
  return (
    <section className='--flex-center --100vh --bg-primary'>
        <div className=' --card --bg-light --p'>
        <h2>Random Jokes</h2>
        <div className='--line'>
        </div>
        {isloading?
        (
          <div className="--center-all">
          <img src={spinner} alt="loading" width={100}/>
          </div>
          ):(
          <>
          <h4>Joke id:{joke._id}</h4>
          <p className='--text-center'>{joke.content}</p>
          </>
        )}
        <br />
        <button className="--btn --btn-primary" onClick={getJoke}>Generate Joke</button>
        </div>
    </section>
  )
}

export default Jokes