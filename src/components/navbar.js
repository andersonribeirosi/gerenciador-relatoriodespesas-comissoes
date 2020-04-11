import React from 'react'

function NavBar(){
    return(
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="container">
        <a href="#" className="navbar-brand title">
          <strong className="titlemenu">Gerenciamento Elfra Representações</strong>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button></a>
        
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link" href="home.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="usuarios.html">Usuários</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="lancamentos.html">Lançamentos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login">Login</a>
          </li>
        </ul>

        </div>
      </div>
    </div>
    );
}

export default NavBar 