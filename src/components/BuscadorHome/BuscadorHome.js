import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BuscadorHome.css";



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
                <input type="text" placeholder="Buscar película" onInput={(event) => this.controlarCambios(event)} value={this.state.valor} />
                <Link className= "buscar" to={`/resultadosbusqueda/${this.state.valor}`}> <i className="fas fa-search"></i> </Link>

            </form >
        )
    }
}


export default BuscadorHome