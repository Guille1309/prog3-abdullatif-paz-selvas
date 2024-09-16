import React, {Component} from "react";
import InfoPeli from '../InfoPeli/InfoPeli';

import './DetallePelicula.css'

let APIkey = "b704c3c0bb664614cb7d33ce45f904f3";

class DetallePelicula extends Component{
    constructor(props){
        super(props);
        this.state = {
            pelicula: [],
            id: this.props.id
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=${APIkey}&language=es-MX`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            this.setState({
                pelicula: data
            })
        })
        .catch((e) => console.log(e))
    }

    render(){
        return(
                <section className="sectionDetalle">
                    {this.state.pelicula.length === 0 ? 
                    <h3>Cargando...</h3> :
                    <InfoPeli pelicula={this.state.pelicula}/>}
                </section>
        )
    }

}

export default DetallePelicula;