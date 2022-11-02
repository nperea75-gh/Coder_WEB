import React from 'react';
import { Link } from "react-router-dom"



import '../Inicio/Inicio.css'
import Tendero from '../Image/Tendero.png'
import Clientes from "../Image/Clientes.png"



export const Inicio = () => {
    return (
        
        <div className="container">
            
            <div className='container_products'>
            <div><img className='image_producto' src={Tendero} alt="tendero" ></img></div>
                            
                <div><Link to ='/hometendero'> <button className='button_products' > Tendero</button>{' '}</Link></div>
                        
            </div>
                       
            <div className='container_sell'>
            <div> <img className='image_ventas' src={Clientes} alt="clientes"></img></div>
                
            <div><button className='button_ventas'>Clientes</button></div> 
            </div>            


        </div>
        
    )
}