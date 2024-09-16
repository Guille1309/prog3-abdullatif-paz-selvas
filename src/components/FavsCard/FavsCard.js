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
            <React.Fragment>
                <Link to={`/peliculas/detalle/${this.state.pelicula.id}`} className='linksFav'>
                    <img src={`https://image.tmdb.org/t/p/w500${this.state.pelicula.poster_path}`} alt={`Poster de ${this.state.pelicula.title}`} className="imgPeliFav"/>
                    <h2 className="tituloPeli">{this.state.pelicula.title}</h2>
                </Link>
                <button onClick={() => this.sacarFav(this.state.pelicula)} className="botonFavoritos">Eliminar de favoritos</button>
            </React.Fragment>

        )
    }
}

export default FavsCard;