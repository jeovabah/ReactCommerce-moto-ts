import React from 'react'
import { LoginItem } from '../../components/LoginItem'
import { Container } from './style'



export const Login = () => {
  return (
    <Container>
      <div className="content">
      <LoginItem />
        <img src="https://me2.com.br/wp-content/uploads/2022/04/cropped-logo-branca-1024x292.png" alt="img" />
      </div>
    </Container>
  )
}
