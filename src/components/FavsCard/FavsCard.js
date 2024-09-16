import React, {Component} from "react";
import { Link } from "react-router-dom";

import './FavsCard.css'

class FavsCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            pelicula: props.infoPeli        
        }
    }

    sacarFav(pelicula){
        let storage = localStorage.getItem('Favoritos');
        let favParseados = JSON.parse(storage)
        let nuevoArrayFav = favParseados.filter((peli) => peli.id !== pelicula.id)
        let nuevoArrayString = JSON.stringify(nuevoArrayFav)
        localStorage.setItem('Favoritos', nuevoArrayString)
    }

    render(){
        return(
            <article className="infoPeli">
                <Link to={`/peliculas/detalle/${this.state.pelicula.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500${this.state.pelicula.poster_path}`} alt={`Poster de ${this.state.pelicula.title}`} className="imgPeliFav"/>
                    <h2 className="tituloPeli">{this.state.pelicula.title}</h2>
                </Link>
                <button onClick={this.sacarFav(this.state.pelicula)} className="botonFavoritos">Eliminar de favoritos</button>
            </article>
        )
    }
}

export default FavsCard;