
import React, {useState} from 'react'

const MultiControlledInputs = () => {


    const [person, setPerson] = useState({fname:'',job:'',cmony:''})

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setPerson({...person,[name]:value})
    }
        const handleSubmit =(e)=>{
        e.preventDefault()
        console.log('submitted')
        if(person.fname==='')return
        console.log(person)
        setPerson({fname:'',job:'',cmony:''})
        
    }

  return (
    <div className='--bg-primary --mh-100vh'>
        <h1 className='--text-light --text-center'>Controlled Inputs</h1>
        <div className="--flex-center">
            <div className="--card --bg-light --width-500px --flex-center">
            <form onSubmit={handleSubmit} className='--form-control'>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text"  name='fname' value={person.fname} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="job">Job:</label>
                    <input type="text" name='job' value={person.job} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="cmony">Company:</label>
                    <input type="text" name='cmony' value={person.cmony} onChange={handleChange}/>
                </div>
                <button type='submit' className='--btn --btn-block'>Submit Form</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default MultiControlledInputs