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
                <Link to="/"> <img src="./src/img/dk-bn.png" alt="" /></Link>
            </div>
            <nav className={isOpen ? "open" : ""}>
            <p><Link to="/">Home</Link></p>
                <p><Link to="/sobremi">Sobre mi</Link></p>
                <a href="https://www.instagram.com/kevindk.98/"   target="_blank" rel="noopener noreferrer"> <img className="icon-insta" src="./src/img/brand-instagram.svg" alt=""/></a>
               
            </nav>
            <button className="menu-toggle" onClick={toggleMenu}>
                &#9776;
            </button>
        </header>
    );
}

export {Header}