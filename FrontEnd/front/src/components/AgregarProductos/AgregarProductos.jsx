import React from 'react'
import { Link } from 'react-router-dom'
import '../Carrito/Carrito.css'
import 'boxicons';
import Table from 'react-bootstrap/Table';
import { BoxIconElement } from 'boxicons';

export const AgregarProductos = () => {
  return (  
    <div className='container_carrito'>
        <div className='barra_cliente'>
            <div>
              <text className='nombre_cliente'>AgregarProductos</text>
            </div>     
            <div className='botones'>
              
              <Link to={'/homecliente'}><box-icon name='arrow-back' ></box-icon></Link>
              <Link to={'/'}><box-icon name='exit'></box-icon></Link>
            </div> 
        </div>  
        <div className='lista_carrito'>              
        <table>
   <thead>
     <tr>
       <th scope="col">codigo</th>
       <th scope="col">Producto</th>
       <th scope="col">valor </th>
       <th scope="col">accion</th>
     </tr>
  </thead>
  <tbody>
    <tr>
      <td>12354545</td>
      <td>lavaropa</td>
      <td>3.000</td>
      <td>boton agregar</td>
    </tr>
    
  </tbody>
</table>          

        </div>
          
          </div>                                    
 

  )
}

  