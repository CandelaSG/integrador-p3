import React from 'react';
import './Navbar.css'

function Navbar(){

    return (
        <header className="containerHeader">
            {/* LOGO */}
            <article>
                <a href="./home.html"><img className="logo" src="./img/logo.png" alt="Logo Infinity"/></a>
            </article>
            {/* MENU NAVEGACIÓN */}
            <article className="containerMenu">
                <nav>
                    <ul>
                        <li className="menu"> <a href="./home.html">HOME</a></li> |
                        <li className="menu"> <a href="./favourite.html">FAVORITES</a></li> |
                        <li className="menu"> <a href="./genres.html">GENRES</a></li>
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