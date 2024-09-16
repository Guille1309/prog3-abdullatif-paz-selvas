import React, {Component} from "react";
import './InfoPeli.css';

class InfoPeli extends Component{
    constructor(props){
        super(props);
        this.state = {
            pelicula: props.pelicula,
            textoFav: 'Agregar a Favoritos',
            esFav: false
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem('Favoritos')
        if(storage !== null){
            let storageParseado = JSON.parse(storage)
            let idsStorage = storageParseado.map((peli) => peli.id)
            let esFav = idsStorage.includes(this.state.pelicula.id)
            if(esFav){
                this.setState({
                    textoFav: 'Eliminar de favoritos',
                    esFav: true
                })
            }
        }
    }

    agregarFav(pelicula){
        let storage = localStorage.getItem('Favoritos');
        if (storage !== null){
            let favParseados = JSON.parse(storage);
            favParseados.push(pelicula)
            let favStringificado = JSON.stringify(favParseados)
            localStorage.setItem('Favoritos', favStringificado)
        } else{
            let arrayPeli = [pelicula];
            let arrayPeliStringificado = JSON.stringify(arrayPeli);
            localStorage.setItem('Favoritos', arrayPeliStringificado)
        }
        this.setState({
            textoFav: 'Eliminar de Favoritos',
            esFav: true
        })
    }

    sacarFav(pelicula){
        let storage = localStorage.getItem('Favoritos');
        let favParseados = JSON.parse(storage)
        let nuevoArrayFav = favParseados.filter((peli) => peli.id !== pelicula.id)
        let nuevoArrayString = JSON.stringify(nuevoArrayFav)
        localStorage.setItem('Favoritos', nuevoArrayString)
        this.setState({
            textoFav: 'Agregar a favoritos',
            esFav: false
        })
    }

    render(){
        return(
            <section className="infoDetalle">
                <img className='imgDetalle' src={`https://image.tmdb.org/t/p/w500${this.state.pelicula.poster_path}`} alt={`Poster de ${this.state.pelicula.original_title}`}/>
                <h1 className="tituloDetalle">{this.state.pelicula.title}</h1>
                <article className="contenedorDatosDetalle">
                    <ul className="listaDetalle">
                        <li className="liDetalle">Rating: {this.state.pelicula.vote_average}</li>
                        <li className="liDetalle">Fecha de estreno: {this.state.pelicula.release_date}</li>
                        <li className="liDetalle">Duración: {this.state.pelicula.runtime} min.</li>
                        <li className="liDetalle">Géneros: 
                            <ul className="generosDetalle">
                                {this.state.pelicula.genres.map((genre) => <li>{genre.name}</li>)}
                            </ul>
                        </li>
                    </ul>
                </article>
                <h2 className="subtituloDetalle">Sinopsis</h2>
                <p className="sinopsisDetalle">{this.state.pelicula.overview}</p>
                <button className="favoritos" onClick={this.state.esFav ? () => this.sacarFav(this.state.pelicula) : () => this.agregarFav(this.state.pelicula)}>{this.state.textoFav}</button>
            </section>
        )
    }
}

export default InfoPeli;