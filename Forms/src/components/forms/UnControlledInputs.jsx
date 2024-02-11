import React, {useRef,useEffect} from 'react'

const UnControlledInputs = () => {
    const nameInputRef = useRef(null)
    const jobInputRef = useRef(null)
    const handleSubmit = (e)=>{
        e.preventDefault()
        let enteredName = nameInputRef.current.value;
        let enteredJob = jobInputRef.current.value;
        console.log(enteredName,enteredJob)
        enteredName.current = null;
        enteredJob.current = null;
    }
    return (
        <div className='--bg-primary --mh-100vh'>
            <h1 className='--text-light --text-center'>UnControlled Inputs</h1>
            <div className="--flex-center">
                <div className="--card --bg-light --width-500px --flex-center">
                <form onSubmit={handleSubmit} className='--form-control'>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input ref={nameInputRef} type="text"  name='name'/>
                    </div>
                    <div>
                        <label htmlFor="job">Job:</label>
                        <input ref={jobInputRef} type="text" name='job' />
                    </div>
                    <button type='submit' className='--btn --btn-block'>Submit Form</button>
                    </form>
                </div>
            </div>
        </div>
      )
}

export default UnControlledInputs