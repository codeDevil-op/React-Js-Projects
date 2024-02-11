import React from 'react'

const ControlledInputs = () => {


    const [first, setfirst] = useState(second)

        const handleSubmit =(e)=>{
        e.preventDefault()
        console.log('submitted')
    }

  return (
    <div className='--bg-primary --mh-100vh'>
        <h1 className='--text-light --text-center'>Controlled Inputs</h1>
        <div className="--flex-center">
            <div className="--card --bg-light --width-500px --flex-center">
            <form onSubmit={handleSubmit} className='--form-control'>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text"  name='name'/>
                </div>
                <div>
                    <label htmlFor="job">Job:</label>
                    <input type="text" name='job' />
                </div>
                <button type='submit' className='--btn --btn-block'>Submit Form</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ControlledInputs