import React, { Component } from "react";
import Pelicula from "../Pelicula/Pelicula";

import "./PeliculasPopulares.css"

let APIkey = "b704c3c0bb664614cb7d33ce45f904f3";

class PeliculasPopulares extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculas: [],
            cargando: true
        }
    }

    componentDidMount() {
        if (!localStorage.getItem("Favoritos")){
            localStorage.setItem("Favoritos", JSON.stringify([]))
        };

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    peliculas: data.results,
                    cargando: false
                })
            })
            .catch(error => console.log('El error fue: ' + error))
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="titulo">Películas populares</h1>
                <section className="mostrarFavs">
                {this.state.cargando ? 
                <img src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif" alt="Cargando..." className="gifCargando"/>
                :
                this.state.peliculas.slice(0, 5).map((pelicula) => <Pelicula key={pelicula.id} data={pelicula} />)
                } 
                </section>
            </React.Fragment>
        );
    }
}

export default PeliculasPopulares;