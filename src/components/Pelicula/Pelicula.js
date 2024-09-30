import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Pelicula.css";

class Pelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelicula: props.data,
            boton: "Ver descripción",
            estado: "hide",
            botonFavorito: "Agregar a favoritos"
        }

    }

    verDescripcion() {
        if (this.state.boton === "Ver descripción") {
            this.setState({
                boton: "Ocultar descripción",
                estado: "show"
            })
        } else {
            this.setState({
                boton: "Ver descripción",
                estado: "hide"
            })
        }
    }

    agregarFavorito() {
        let pelisFavoritas = localStorage.getItem('Favoritos');
        let arrayPelisFavoritas = JSON.parse(pelisFavoritas) || []; 

        if (arrayPelisFavoritas.filter((peli) => peli.id === this.state.pelicula.id).length === 0) {
            arrayPelisFavoritas.push(this.state.pelicula);
            let arrayStringificado = JSON.stringify(arrayPelisFavoritas);
            localStorage.setItem('Favoritos', JSON.stringify(arrayStringificado));

            this.setState({
                botonFavorito: "Eliminar de favoritos"
            });
        } else {
            let nuevoArrayFav = arrayPelisFavoritas.filter((peli) => peli.id !== this.state.pelicula.id);
            let nuevoArrayString = JSON.stringify(nuevoArrayFav);
            localStorage.setItem('Favoritos', nuevoArrayString);

            this.setState({
                botonFavorito: "Agregar a favoritos"
            });
        }
    }

    render() {
        let pelisFavoritas = localStorage.getItem('Favoritos');
        let arrayPelisFavoritas = JSON.parse(pelisFavoritas) 
        return (
            <article className="peli">
                <img src={`https://image.tmdb.org/t/p/w500${this.state.pelicula.poster_path}`} alt={`Poster de ${this.state.pelicula.title}`} className="imgPeliFav" />
                <h2 className="tituloPeli">{this.state.pelicula.title}</h2>

                <section className={this.state.estado}>
                    <p>{this.state.pelicula.overview} </p>
                </section>
                <Link to={`/peliculas/detalle/${this.state.pelicula.id}`}> <p className="irDetalle">Ir a detalle</p></Link>

                <button onClick={() => this.verDescripcion()} className="botonFavoritos">{this.state.boton}</button>
                <button onClick={() => this.agregarFavorito(this.state.pelicula)} className="botonFavoritos">{arrayPelisFavoritas.filter((peli) => peli.id === this.state.pelicula.id).length === 0 ? "Agregar a favoritos" : "Eliminar de favoritos"}</button>
            </article>
        )
    }
};

export default Pelicula;