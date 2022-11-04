import React from 'react'
import Daviplata from '../Image/Daviplata.png'
import '../Pagar/Pagar.css'
import Nequi from '../Image/Nequi.png'
import { Link } from 'react-router-dom'


export const Pagar = () => {
  return (
    <div className='container-p'>
      <div className="container_pagos">
        <div className='container_pagoDaviplata'>
          <img className='pago_daviplata' class='center' src={Daviplata}></img>
          <text className='numero_daviplata'>3124567890</text>
        </div>
        <div className='container_pagoNequi'>
          <img className='pago_nequi' src={Nequi}></img>
          <text className='numero_Nequi'>3124567890</text>
        </div>
      </div>
      <div className='container_expliacion'>
        <text className='explicacionPago'>Puedes hacer tu pago con cualquiera de los canales indicados
          y enviar el comprobante de pago</text>
      </div>
      <div className='container_botones'>
        <div className='container_Subircomprobante'>
          <Link to={'/'}><box-icon type='solid' name='file-jpg'></box-icon></Link>
          <text className='subirComprobante'>Favor Subir el comprobante</text>
        </div>
      </div>
    </div>
  )
}
