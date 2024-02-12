import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import useLocalStorage from 'use-local-storage'
import { useEffect, useState } from 'react'
function App() {

  const [theme,setTheme] = useLocalStorage('theme','light')
  const [onswitch,setOnSwitch] = useState(false)

  const toggleTheme = ()=>{
    const newTheme = theme==='light'? 'dark':'light';
    setTheme(newTheme)
    setOnSwitch(!onswitch)
  }
  useEffect (()=>{
    if(theme==='dark'){
      setOnSwitch(true)
    }
  },[theme])
  return (
    <>
    <div className='main'>
      <Header myTheme={theme} toggleTheme= {toggleTheme} onSwitch={onswitch}/>
      <Hero myTheme={theme}/>
      <Footer myTheme={theme}/>
      </div>
    </>
  )
}

export default App
