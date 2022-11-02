import React from 'react'
import { Link } from 'react-router-dom'
import '../Carrito/Carrito.css'
import 'boxicons';
import { BoxIconElement } from 'boxicons';

export const Carrito = () => {
  return (
    <div className='container'>
        <div className='container_carrito'>
            <text className='nombre_cliente'>Acá se mostrará el nombre del cliente</text>
        </div>
        <div className='botones'>
            <Link to={'/pagar'}><box-icon name='credit-card'></box-icon></Link>
            <Link to={'/homecliente'}><box-icon name='arrow-back' ></box-icon></Link>
            <Link to={'/'}><box-icon name='exit'></box-icon></Link>
        </div>
    </div>
  )
}
  