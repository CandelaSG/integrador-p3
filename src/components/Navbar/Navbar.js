import React from 'react';
import './Navbar.css'
import { Link } from "react-router-dom";
import Buscador from '../Buscador/Buscador';

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
                        <li className="menu"> <Link to={`/verTodos/category/upcoming`}>UPCOMING</Link></li> |
                        <li className="menu"> <Link to={`/verTodos/category/now_playing`}>NOW PLAYING</Link></li> |
                        <li className="menu"> <Link to={`/verTodos/category/popular`}>POPULAR</Link></li> |
                        <li className="menu"> <Link to={`/verTodos/category/top_rated`}>TOP RATED</Link></li> 
                        
                    </ul>
                </nav>
            </article>

            <article>
               <Buscador/>
            </article>
        </header>
    )
}

export default Navbar