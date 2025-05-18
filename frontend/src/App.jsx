import React from 'react'
import Register from './components/register'
import { Routes, Route } from 'react-router-dom'
import Login from './components/login'
import Product from './components/product'
import Product_In from './components/Product_In'
import SelectProIn from './selectpro_in'
function App() {
  return (
    <div>
       
      <Routes>
        <Route path='/register' element={<Register />}/>
        <Route path='/' element={<Login />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/product_in' element={<Product_In />}/>
        <Route path='/selectpro_in' element={<SelectProIn />}/>
        <Route path='*' element={<h1>404 Not Found</h1>}/>

      </Routes>
 
    </div>
  )
}

export default App