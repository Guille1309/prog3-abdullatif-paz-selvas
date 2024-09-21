import React, { Component } from "react";
import Pelicula from "../Pelicula/Pelicula";

import "./PeliculasPopulares.css"
import Filtro from "../Filtro/Filtro";

let APIkey = "b704c3c0bb664614cb7d33ce45f904f3";

class PeliculasPopulares extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isHome: props.isHome,
            peliculas: [],
            cargando: true,
            pagina:1
        }
    }

    componentDidMount() {
        if (!localStorage.getItem("Favoritos")) {
            localStorage.setItem("Favoritos", JSON.stringify([]))
        };

        fetch(` https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    peliculas: data.results,
                    cargando: false,
                    backup:[]
                })
            })
            .catch(error => console.log('El error fue: ' + error))
    }
    verMasPeliculas(){
        let nuevaPagina= this.state.pagina + 1
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&page=${nuevaPagina}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    peliculas: this.state.peliculas.concat(data.results),
                    cargando: false,
                    pagina: nuevaPagina,
                    backup: data.results
                })
            })
            .catch(error => console.log('El error fue: ' + error))
    }
    filtrarPeliculas(name){
        let peliculasFiltradas = this.state.backup.filter((peli)=>peli.title.toLowerCase().includes(name.toLowerCase))
        this.setState({
            peliculas: peliculasFiltradas
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="titulo">Películas populares</h1>
                <Filtro filtrarPeliculas={(name)=>this.filtrarPeliculas(name)}/>
    
                <section className="mostrarPeliculas">
                    {this.state.cargando ?
                        <img src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif" alt="Cargando..." className="gifCargando" />
                        : (
                            this.state.isHome ? this.state.peliculas.slice(0, 5).map((pelicula) => <Pelicula key={pelicula.id} data={pelicula} />)
                                : this.state.peliculas.map((pelicula) => <Pelicula key={pelicula.id} data={pelicula} />)
                        )
                    }
                </section>
                {!this.state.isHome?<button onClick={() => this.verMasPeliculas()}>Ver más</button>: null }
            </React.Fragment>
        );
    }
}

export default PeliculasPopulares;