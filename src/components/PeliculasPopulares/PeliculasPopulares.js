import React, { Component } from "react";
import Pelicula from "../Pelicula/Pelicula";
import "./PeliculasPopulares.css"
let APIkey = "b704c3c0bb664614cb7d33ce45f904f3";

class PeliculasPopulares extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculas: []
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
                    peliculas: data.results
                })
            })
            .catch(error => console.log('El error fue: ' + error))
    }

    render() {
        return (
            
            <React.Fragment>
                <section className="mostrarFavs">
                    {this.state.peliculas.length === 0 ?
                        <h3>Cargando...</h3> :
                        this.state.peliculas.slice(0, 5).map((pelicula) => <Pelicula key={pelicula.id} data={pelicula} />)
                        
                    }
                </section>
            
            </React.Fragment>
        );

    }
}

export default PeliculasPopulares;