import React, {Component} from "react";
import InfoPeli from '../InfoPeli/InfoPeli';

import './DetallePelicula.css'

let APIkey = "b704c3c0bb664614cb7d33ce45f904f3";

class DetallePelicula extends Component{
    constructor(props){
        super(props);
        this.state = {
            pelicula: [],
            id: this.props.id,
            cargando: true
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=${APIkey}&language=es-MX`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            this.setState({
                pelicula: data,
                cargando: false
            })
        })
        .catch((e) => console.log(e))
    }

    render(){
        return(
                <section className="sectionDetalle">
                    {this.state.cargando ? 
                    <img src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif" alt="Cargando..." className="gifCargando"/>
                     :
                     <InfoPeli pelicula={this.state.pelicula}/>
                    }
                </section>
        )
    }

}

export default DetallePelicula;