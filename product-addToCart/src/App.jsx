
import './App.css'
import Header from './components/Header/Header'
import ProductList from './components/products/ProductList'
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom' 
import TodoList from './components/todoList/TodoList'
import Cart from './components/Cart/Cart'
import { CartContextProvider } from './context/countContext'

function App() {
  
 
  return (
    <>
   <CartContextProvider>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element = {<ProductList/>}/>
      <Route path='/todoList' element = {<TodoList/>}/>
      <Route path='/cart' element = {<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </>
  )
}

export default App
