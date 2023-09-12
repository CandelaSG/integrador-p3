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
            <article >
                <nav >
                    <ul className=""> {/* containerMenu containerCategorias */}
                        <li className="menu"> <Link to={`/upcoming`}>UPCOMING  </Link></li>   |
                        <li className="menu"> <Link to={`/now_playing`}>  NOW PLAYING  </Link></li>     |
                        <li className="menu"> <Link to={`/popular`}>  POPULAR  </Link></li>     |
                        <li className="menu"> <Link to={`/top_rated`}>  TOP RATED  </Link></li> 
                        
                    </ul>
                </nav>
            </article>
            <article>
                    <ul className=" "> {/* containerMenu */}
                        <li className="menu iconoMenu"> <Link to={`/`}><i className="fa-solid fa-house" />        </Link></li>
                        <li className="menu">  <Link to={`/favorites`}><i className="fa-solid fa-heart"/> </Link></li> 
                        
                    </ul>
            </article>

           {/*  <article>
            <form action="/search-results" method="GET" className="buscadorContainer">
                <input className="buscador" type="text" name="busqueda" placeholder="  Search movies, series..." />
                <button type="submit" className="lupa">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
            </article> */}
        </header>
    )
}

export default Navbar