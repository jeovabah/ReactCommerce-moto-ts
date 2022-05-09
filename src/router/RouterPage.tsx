import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Produto } from '../pages/Produto'
import { RegisterProduct } from '../pages/RegisterProduct'



export const RouterPage = () => {
  return (
    <Routes> 
      <Route path="/login" element={<Login />}  />
      <Route path="/newproduct" element={<RegisterProduct />}  />
      <Route path="/" element={<Produto />}  />
    </Routes>
  )
}
