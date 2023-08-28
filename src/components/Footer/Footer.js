import React from "react";
import './Footer.css'

function Footer(){
    return(
        <footer className="containerFooter">
        <div>
            <p className="nombresFooter">GUADALUPE - CANDELA - BAUTISTA </p>
        </div>
        <div>
            <a className="fraseFooter" href="./home.html">
                <img className="imgFooter" src="./img/footer.png" alt="To infinity and beyond"/>
            </a>
        </div>
        
        <div>
            <img className = "imgApi" src="./img/TMBD-removebg-preview.png" alt="TMDB"/>
        </div>
            
        </footer>
    )
}

export default Footer;