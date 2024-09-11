import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
    return (
        <header > 
            <div className="logo">
                <img className="imgHeader" src="./imgs/logo.png" alt="Logo JCG"></img>
            </div>
            <div>
                <nav className="navListHeader">
                    <ul className="ulNav">
                        <li className="liNav"><Link to="/">Home</Link></li>
                        <li className="liNav"><Link to="/favoritos"> Favoritos</Link> </li>
                        <li className="liNav"><Link to="/verTodas">Ver todas</Link></li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default Header;