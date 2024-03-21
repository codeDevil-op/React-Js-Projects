import './App.css'
import Root from './components/Root'
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom' 
// pages 
import AddNew from './components/AddNew'
import Contact from './components/Contact'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Root/>
      {/* <Routes >
      </Routes> */}
    </BrowserRouter>
    </>
  )
}

export default App
