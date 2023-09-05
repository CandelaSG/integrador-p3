import React from 'react';
import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar(){

    return (
        <header className="containerHeader">
            {/* LOGO */}
            <article>
                <Link to="/"><img className="logo" src="./img/logo.png" alt="Logo Infinity"/></Link>
            </article>
            {/* MENU NAVEGACIÓN */}
            <article className="containerMenu">
                <nav>
                    <ul>
                        <li className="menu"> <a href="/">HOME</a></li> |
                        <li className="menu"> <a href="/">FAVORITES</a></li> |
                        <li className="menu"> <a href="/">GENRES</a></li>
                    </ul>
                </nav>
            </article>

            {/* BUSCADOR */} 
            <article>
                <form action="./search-results.html" method="GET" className="buscadorContainer">
                    <input className="buscador" type="text" name="busqueda" value="" placeholder="  Search movies, series..." />
                    <button type="submit" value="enviar" className="lupa" href="search-results.html"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </article>
        </header>
    )
}

export default Navbar