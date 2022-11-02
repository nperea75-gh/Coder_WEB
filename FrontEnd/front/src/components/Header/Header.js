import React from 'react'
import '../Header/Header.css'
import Tender from '../Image/Tender.png'


export const Header = ({titulo}) => {
  return (
    <div className='header_container'>
      
      <div className='header'>  
      <img className='image_tender' src={Tender}></img>
        {titulo}
      </div>
    </div>
  )
}
