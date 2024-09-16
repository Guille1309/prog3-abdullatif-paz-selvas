import React from "react";
import FavsCard from '../FavsCard/FavsCard';

import './MostrarFavoritos.css'

function MostrarFavoritos(props) {
    let pelisFav = props.pelisFav
    console.log(pelisFav)

    return(
        <React.Fragment>
            {pelisFav.length === 0 ? 
            <h1>Aún no tienes películas favoritas</h1> :
            <h1>Películas favoritas</h1>}
            <ul className="mostrarFavs">
                {pelisFav.map((peli) => <li className="listaMostrarFavs"><FavsCard infoPeli={peli}/></li>)}
            </ul>
        </React.Fragment>

    )
}

export default MostrarFavoritos;