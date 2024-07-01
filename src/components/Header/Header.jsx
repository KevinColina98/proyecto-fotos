import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className="dk-logo">
                <Link to="/"> <img src="https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fdk-bn.png?alt=media&token=5825938f-b06b-432b-bd50-642c86679b41" alt="" /></Link>
            </div>
            <nav className={isOpen ? "open" : ""}>
            <p><Link to="/">Home</Link></p>
                <p><Link to="/fotos">Fotos</Link> </p>
                <p><Link to="/sobremi">Sobre mi</Link></p>
                <a href="https://www.instagram.com/kev.dc98/"   target="_blank" rel="noopener noreferrer"> <img className="icon-insta" src="https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fbrand-instagram.png?alt=media&token=b698452b-eab0-4157-991c-bb65efaa61ab" alt=""/></a>
               
            </nav>
            <button className="menu-toggle" onClick={toggleMenu}>
                &#9776;
            </button>
        </header>
    );
}

export {Header}