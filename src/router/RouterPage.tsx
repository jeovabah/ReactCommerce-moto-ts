import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart } from '../pages/Cart'
import { Produto } from '../pages/Produto'
import { RegisterProduct } from '../pages/RegisterProduct'



export const RouterPage = () => {
  return (
    <Routes> 
      <Route path="/cart" element={<Cart />}  />
      <Route path="/newproduct" element={<RegisterProduct />}  />
      <Route path="/" element={<Produto />}  />
    </Routes>
  )
}
