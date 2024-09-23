import React, { Component } from "react";
import { Link } from "react-router-dom";


class BuscadorHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: '',
            peliculas: []
        };
    }

    evitarSubmit(event) {
        event.preventDefault();
    }

    controlarCambios(event) {
        this.setState({ valor: event.target.value });
    }

    render() {
        return (
            <form onSubmit={(event) => this.evitarSubmit()}>
                <label>Pelicula:</label>
                <input type="text" placeholder="Buscar película" onInput={(event) => this.controlarCambios(event)} value={this.state.valor} />
                <Link to={`/resultadosbusqueda/${this.state.valor}`}> Buscar </Link>

            </form >
        )
    }
}


export default BuscadorHome