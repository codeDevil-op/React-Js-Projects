import React from 'react'
import './hero.css'
import heroImg from '../../assets/phone.svg'
const Hero = ({myTheme}) => {
  return (
    <>
      <section className='hero' data-theme={myTheme}>
      <div className="container --grid-15">
        <div className="hero-text">
          <h1>Visit Vila Shop Landing Page.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum porro earum, alias accusamus aperiam tempora delectus saepe molestiae ullam ut.</p>
          <div className='--flex-start'>
            <button className='--btn btn-p'>Learn More</button>
            <button className='--btn --btn-danger'>Sign Up</button>
          </div>
        </div>
        <div className="hero-img --text-center">
          <img src={heroImg} alt="" width={200}/>
        </div>
      </div>

      </section>
    </>
  )
}

export default Hero