// src/components/Header.js
import React from 'react';
import './Header.css';
import logo from '"C:\Users\natyh\Documents\Cursos\ONE\Challenges\challenge-React\Componentes\Logo.jpg"';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Aluraflix Logo" className="logo" />
            <nav>
                <button className="nav-button">HOME</button>
                <button className="nav-button">NUEVO VIDEO</button>
            </nav>
        </header>
    );
};

export default Header;
