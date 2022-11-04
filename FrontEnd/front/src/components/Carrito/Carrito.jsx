import React from 'react'
import { Link } from 'react-router-dom'
import '../Carrito/Carrito.css'
import 'boxicons';
import Table from 'react-bootstrap/Table';
import { BoxIconElement } from 'boxicons';

export const Carrito = () => {
  return (  
    <div className='container_carrito'>
        <div className='barra_cliente'>
            <div>
              <text className='nombre_cliente'>Acá se mostrará el nombre del cliente</text>
            </div>     
            <div className='botones'>
              <Link to={'/pagar'}><box-icon name='credit-card'></box-icon></Link>
              <Link to={'/homecliente'}><box-icon name='arrow-back' ></box-icon></Link>
              <Link to={'/'}><box-icon name='exit'></box-icon></Link>
            </div> 
        </div>  
        <div className='lista_carrito'>              
        <table>
   <thead>
     <tr>
       <th scope="col">#</th>
       <th scope="col">Producto</th>
       <th scope="col">Cantidad</th>
       <th scope="col">Valor</th>
     </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Zanahoria x 1 libra</td>
      <td>2</td>
      <td>3000</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Detergente 500 gr</td>
      <td>1</td>
      <td>3500</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Limon x 1 libra</td>
      <td>3</td>
      <td>6000</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Aceite 1 lt</td>
      <td>1</td>
      <td>5500</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Zanahoria x 1 libra</td>
      <td>2</td>
      <td>3000</td>
    </tr>
  </tbody>
</table>          

        </div>
          <div className='container_total'>
            <text className='totalPago'>Total a pagar: $$$$$$</text>
          </div>                                    
  </div>
  )
}

  