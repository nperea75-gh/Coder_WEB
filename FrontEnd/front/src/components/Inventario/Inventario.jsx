import React from 'react'
import { Link } from 'react-router-dom'
import '../Inventario/Inventario.css'
import 'boxicons';

export const Inventario = () => {
  return (
    <div className='container_in'>

        <div className='container-nav'>
            

            <div className='container_barra'>
                <div className='nombrecliente-in'>
                    <text className='nombre'>CLIENTE: Juliana Caicedo</text>
                </div>
                <div className='container_button-in'>
                    <Link to={'/hometendero'}><box-icon name='arrow-back' size="lg" ></box-icon></Link>
                
                    <Link to={'/'}><box-icon name='exit' size="lg"></box-icon></Link></div>
                
                
                
            </div>

            </div>
            <div className='container_list'>
                <table id='customers'>
                    <tr>
                        <th><strong>Producto</strong></th>
                        <th><strong>Precio</strong></th>
                        <th><strong>Cantidad Vendida</strong></th>
                        <th><strong>Total Vendido</strong></th>
                        <th><strong>Stock</strong></th>
                    </tr>
                    <tr>
                        <td>Tomate</td>
                        <td>5.330</td>
                        <td>7</td>
                        <td>10.000</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Cebolla</td>
                        <td>1.000</td>
                        <td>3</td>
                        <td>13.000</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Arroz</td>
                        <td>3.500</td>
                        <td>8</td>
                        <td>33.000</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Pepino</td>
                        <td>2.000</td>
                        <td>16</td>
                        <td>10.000</td>
                        <td>200</td>
                    </tr>
                    <tr>
                        <td>Zahanoria</td>
                        <td>2.000</td>
                        <td>33</td>
                        <td>3.215</td>
                        <td>356</td>
                    </tr>





                </table>
            </div>
           
        </div>
  )
}
