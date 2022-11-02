
import './App.css';
import { Header } from './components/Header/Header';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import{Inventario } from './components/Inventario/Inventario'
import { ListaVenta } from './components/ListaVenta/ListaVenta';
import { Pagar } from './components/Pagar/Pagar';
import {Carrito} from './components/Carrito/Carrito';
import {HomeCliente} from './components/HomeCliente/HomeCliente';
import {LoginCliente} from './components/LoginCliente/LoginCliente';
import { CrearUsuario } from './components/CrearUsuario/CrearUsuario';
import {Inicio} from './components/Inicio/Inicio';
import {HomeTendero} from './components/HomeTendero/HomeTendero';

function App() {
  return (
    <>
    <Router>
      <div className='header_container'>
        <Header titulo={'MI AMIGO DEL BARRIO'} />
      </div>
      <div className='Container_Body'>
        <Routes>
          <Route path='/hometendero' element={<HomeTendero/>}/>
          <Route path='/inventario' element={<Inventario/>}/>
          <Route path='/listaventas' element={<ListaVenta/>}/>
          <Route path='/pagar' element={<Pagar/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
          <Route path='/homecliente' element={<HomeCliente/>}/>
          <Route path='/logincliente' element={<LoginCliente/>}/>
          <Route path='/crearusuario' element={<CrearUsuario/>}/>
          <Route path='/' element={<Inicio/>}/>
        </Routes>
      </div>  
      </Router>
    </>
  );
}

export default App;
