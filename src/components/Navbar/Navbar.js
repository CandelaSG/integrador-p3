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
                        <li className="menu"> <Link to={`/`}>HOME</Link></li> |
                        <li className="menu">  <Link to={`/favorites`}>FAVORITES</Link></li> 
                        
                    </ul>
                    <ul>
                        <li className="menu"> <Link to={`/upcoming`}>UPCOMING</Link></li> |
                        <li className="menu"> <Link to={`/now_playing`}>NOW PLAYING</Link></li> |
                        <li className="menu"> <Link to={`/popular`}>POPULAR</Link></li> |
                        <li className="menu"> <Link to={`/top_rated`}>TOP RATED</Link></li> 
                        
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