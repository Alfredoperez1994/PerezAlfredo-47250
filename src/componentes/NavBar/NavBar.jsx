import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {

  return (
    <header>
      <h1>Aika Petshop</h1>


      <nav>

        <ul>

          <li>Alimentos para Perro</li>

          <li>Alimentos para Gato</li>

          <li>Accesorios</li>

        </ul>

      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar