import React from 'react';
import '../assets/css/cabecalho.css'

function Header(){
    return (
        <header className="cabecalhoPrincipal">
        <div className="container">
          <img src={require("../assets/img/icon-login.png")} />

          <nav className="cabecalhoPrincipal-nav">
            <a>Home</a>
            <a>Eventos</a>
            <a>Contato</a>
            <a className="cabecalhoPrincipal-nav-login" href="login.html">Login</a>
          </nav>
        </div>
      </header>
    );
}

export default Header;