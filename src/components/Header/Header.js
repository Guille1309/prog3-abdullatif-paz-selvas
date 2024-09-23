import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
    return (
        <header>
            <div className="logo">
                <img className="imgHeader" src="https://i.pinimg.com/474x/d4/3a/81/d43a8185b856f9dd0deaa4569472eb48.jpg" alt="Logo"></img>
            </div>
            <div>
                <nav className="navListHeader">
                    <ul className="ulNav">
                        <li className="liNav"><Link to="/">Home</Link></li>
                        <li className="liNav"><Link to="/favoritos">Favoritos</Link> </li>
                        <li className="liVerTodas">Ver todas<ul>
                            <li ><Link to="/peliculas/verTodas/populares"> Películas populares</Link></li>
                            <li><Link to="/peliculas/verTodas/proximas"> Películas próximas</Link></li>
                        </ul></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;