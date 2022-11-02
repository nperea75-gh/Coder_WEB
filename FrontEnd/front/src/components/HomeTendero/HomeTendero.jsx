import React from 'react';
import { Link } from 'react-router-dom';
import Canasta from '../Image/Canasta.png';
import Stonks from '../Image/Stonks.png';
import '../HomeTendero/HomeTendero.css'

export const HomeTendero = () => {
    return (
        <div className='containerht'>
            <div className='container_productsht'>
                <img className='image_productoht' src={Canasta}></img>
                <Link to='/inventario'><button className='button_productsht'>Productos</button></Link>
            </div>
            <div className='container_sellht'>
                <img className='image_ventasht' src={Stonks}></img>
                <Link to='/listaventas'><button className='button_ventasht'>Ventas</button></Link>
            </div>
        </div>
    )
}
