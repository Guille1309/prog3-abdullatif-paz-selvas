import React from "react";

function InfoPeli(props){
    console.log(props);
    let pelicula = props.pelicula;
    return(
        <section>
            <img src={pelicula.backdrop_path} alt={`Poster de ${pelicula.original_title}`}/>
            <h1>{pelicula.title}</h1>
            <ul>
                <li>Rating: {pelicula.vote_average}</li>
                <li>Fecha de estreno: {pelicula.release_date}</li>
                <li>Duración: {pelicula.runtime} min.</li>
                <li>Géneros: 
                    <ul>
                        {pelicula.genres.map((genre) => <li>{genre.name}</li>)}
                    </ul>
                </li>
            </ul>
            <h2>Sinopsis</h2>
            <p>{pelicula.overview}</p>
            <p>Agregar a Favoritos</p>
        </section>
    )
}

export default InfoPeli;