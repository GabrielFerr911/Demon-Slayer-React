import React from 'react';
import "./Header.css"
import logo from "./logo.png"

// import { Container } from './styles';

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="" className="logo"/>
      <nav className="menu">
        <button>Home</button>
        <button>Characters</button>
        <button>Autor</button>
        <input type="text" name="" id="" className='search' placeholder='Buscar...'/>
      </nav>
    </div>
  );
}

export default Header;