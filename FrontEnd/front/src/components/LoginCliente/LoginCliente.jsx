import React from 'react'
import { Link } from 'react-router-dom';
import logincliente from '../Image/logincliente.png';


export const LoginCliente = () => {
  return (
    <div className='container'>
        <div className='container_login'>
            <img className='loginCliente' src={logincliente}></img>
        </div>
        <div className='login'>
            <input type="text" placeholder='Correo Electronico' />
            <input type="text" placeholder='Ingresar Contraseña' />
            <Link to={'/homecliente'}><button type='submit'>
                Enviar
            </button></Link>    

        </div>
    </div>
  )
}
