import React from "react";
import FavsCard from '../FavsCard/FavsCard';

import './MostrarFavoritos.css'

function MostrarFavoritos(props) {
    let pelisFav = props.pelisFav;
    console.log(pelisFav);

    return(
        <React.Fragment>
            <section className="mostrarFavs">
                {pelisFav.length === 0 ? 
                <h1>Aún no tienes películas favoritas</h1> :
                <FavsCard pelis={pelisFav}/>}
            </section>
        </React.Fragment>
        
    )
}

export default MostrarFavoritos;