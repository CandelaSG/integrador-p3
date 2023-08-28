import React from 'react';

function Navbar(){

    return (
        <nav>
            <ul className="main-nav">
                <li>Home</li>
                <li>Menú 1</li>
                <li>Menú 2</li>
                <li>Menú 3</li>
            </ul>
            <ul className="user">
                <li>Nombre usuario <img src="/img/user.jpg" alt=""/></li>
            </ul>
        </nav>
    )
}

export default Navbar