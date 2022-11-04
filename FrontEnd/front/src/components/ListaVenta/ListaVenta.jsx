import React from 'react'
import { Link } from 'react-router-dom';
import '../ListaVenta/ListaVenta.css';
import 'boxicons';



export const ListaVenta = () => {
    return (  
      <div className='container-lv'>
          <div className='barra_cliente'>
              <div>
                <text className='nombre_cliente'>lista de venta --- nombre del cliente</text>
              </div>     
              <div className='botones-lv'>
                <Link to={'/pagar'}><box-icon name='credit-card'></box-icon></Link>
                <Link to={'/homecliente'}><box-icon name='arrow-back' ></box-icon></Link>
                <Link to={'/'}><box-icon name='exit'></box-icon></Link>
              </div> 
          </div>  
          <div className='lista-lv'>              
          <table>
     <thead>
                    <tr>
                        <td><strong>Producto</strong></td>
                        <td><strong>Precio</strong></td>
                        <td><strong>Cantidad Vendida</strong></td>
                        <td><strong>Total Vendido</strong></td>
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
                                      
    </div>
    )
  }
  
    
/*

    return (
        <div className='container'>
            <div className='container_list'>
                <table>
                    
                    <tr>
                        <td>Tomate</td>
                        <td>2.000</td>
                        <td>16</td>
                        <td>10.000</td>
                    </tr>

                    <tr>
                        <td>Tomate</td>
                        <td>2.000</td>
                        <td>16</td>
                        <td>10.000</td>
                    </tr>

                    <tr>
                        <td>Tomate</td>
                        <td>2.000</td>
                        <td>16</td>
                        <td>10.000</td>
                    </tr>

                    <tr>
                        <td>Tomate</td>
                        <td>2.000</td>
                        <td>16</td>
                        <td>10.000</td>
                    </tr>





                </table>

                

            </div>
            <div className='container_button'>
                <Link to={'/hometendero'}><box-icon name='arrow-back' ></box-icon></Link>
                <Link to={'/'}><box-icon name='exit'></box-icon></Link>

            </div>
        </div>
    )
}
*/