import React from 'react'
import { Link } from 'react-router-dom'
import '../HomeCliente/HomeCliente.css'

export const HomeCliente = () => {
  return (
    <div className='container'>
        <div className='container_homecliente'>
        <Link to={'/carrito'}><box-icon name='store'></box-icon></Link>
        <box-icon name='user' animation='tada' rotate='90' ></box-icon>
        <box-icon name='exit' animation='fade-right' rotate='90' ></box-icon>
        </div>
    </div>
  )
}
