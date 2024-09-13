import React from "react";
import './InfoPeli.css';

function InfoPeli(props){
    console.log(props);
    let pelicula = props.pelicula;
    return(
        <section className="infoDetalle">
            <img className='imgDetalle' src={pelicula.backdrop_path} alt={`Poster de ${pelicula.original_title}`}/>
            <h1 className="tituloDetalle">{pelicula.title}</h1>
            <article className="contenedorDatosDetalle">
                <ul className="listaDetalle">
                    <li className="liDetalle">Rating: {pelicula.vote_average}</li>
                    <li className="liDetalle">Fecha de estreno: {pelicula.release_date}</li>
                    <li className="liDetalle">Duración: {pelicula.runtime} min.</li>
                    <li className="liDetalle">Géneros: 
                        <ul className="generosDetalle">
                            {pelicula.genres.map((genre) => <li>{genre.name}</li>)}
                        </ul>
                    </li>
                </ul>
            </article>
            <h2 className="subtituloDetalle">Sinopsis</h2>
            <p className="sinopsisDetalle">{pelicula.overview}</p>
            <p className="favoritos">Agregar a Favoritos</p>
        </section>
    )
}

export default InfoPeli;