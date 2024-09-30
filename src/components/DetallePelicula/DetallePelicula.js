import React, { Component } from "react";
import InfoPeli from '../InfoPeli/InfoPeli';

import './DetallePelicula.css'

let APIkey = "b704c3c0bb664614cb7d33ce45f904f3";

class DetallePelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelicula: [],
            id: this.props.id,
            cargando: true
        }
    }

<<<<<<< HEAD
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=${APIkey}&language=es-MX`)
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                pelicula: data,
                cargando: false
=======
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=${APIkey}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    pelicula: data,
                    cargando: false
                })
>>>>>>> 0aa5f8ca49cb582ba776863aa4ec795d3be21399
            })
            .catch((e) => console.log(e))
    }

    render() {
        return (
            <section className="sectionDetalle">
                {this.state.cargando ?
                    <img src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif" alt="Cargando..." className="gifCargando" />
                    :
                    <InfoPeli pelicula={this.state.pelicula} />
                }
            </section>
        )
    }

}

export default DetallePelicula;