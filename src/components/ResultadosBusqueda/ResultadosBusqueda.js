import React, { Component } from "react";
import "../ResultadosBusqueda/ResultadosBusqueda.css";

let APIkey = "b704c3c0bb664614cb7d33ce45f904f3";

class ResultadosBusqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: [],
      cargando: true
    }}
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&query=${this.props.busqueda}`)
          .then((res) => res.json())
          .then((data) => {
            this.setState({
              resultados: data.results,
              cargando: false
            })
          })
          .catch((errors) => {
            console.log(errors);
            this.setState({ cargando: false })
          })
      }
    render(){
      return (
        <div className="container">
          {this.state.cargando ? (
            <img
              src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif"
              alt="Cargando..."
              className="gifCargando"
            />
          ) : (
            <div className="mostrarFavs">
              {this.state.resultados.length > 0 ? (
                this.state.resultados.map((resultado) => (
                  <div key={resultado.id} className="listaMostrarFavs">
                    <h3>{resultado.title}</h3>
                    <p>{resultado.overview}</p>
                    <img
                      src={`https://image.tmdb.org/t/p/w200${resultado.poster_path}`}
                      alt={resultado.title}
                    />
                  </div>
                ))
              ) : (
                <p>No se encontraron resultados.</p>
              )}
            </div>
          )}
        </div>
      )
    }};

export default ResultadosBusqueda;