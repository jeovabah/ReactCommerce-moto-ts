import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Produto } from '../pages/Produto'
import { RegisterProduct } from '../pages/RegisterProduct'



export const RouterPage = () => {
//Não consegui Essa page com typescript, acontece erro no logado, ele não aceita o 0. pois é boolean
  const Private= ({ Item }) => {
    const logado = true;
    return logado > 0 ? <Item /> : <Login />
  }

  return (
    <Routes> 
      <Route path="*" element={<Login />}  />
      <Route path="/newproduct" element={ <RegisterProduct /> } />
      <Route path="/" element={ <Private Item={ Produto } /> }  />
    </Routes>
  )
}
