import React, { Component } from "react";
import "../ResultadosBusqueda/ResultadosBusqueda.css";
import Pelicula from "../Pelicula/Pelicula";

let APIkey = "b704c3c0bb664614cb7d33ce45f904f3";

class ResultadosBusqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: [],
      cargando: true
    }
  }
<<<<<<< HEAD
=======

>>>>>>> 0aa5f8ca49cb582ba776863aa4ec795d3be21399
  componentDidMount() {
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
<<<<<<< HEAD
=======
  
>>>>>>> 0aa5f8ca49cb582ba776863aa4ec795d3be21399
  render() {
    return (
      <div className="container">
        {this.state.cargando ? (
          <img
            src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif"
            alt="Cargando..."
            className="gifCargando"
          />
        ) : (
          <section className="mostrarFavs">
            {this.state.resultados.length > 0 ? (
              this.state.resultados.map((resultado) => (
                <Pelicula key={resultado.id} data={resultado} />
              ))
            ) : (
              <p>No se encontraron resultados.</p>
            )}
          </section>
        )}
      </div>
    )
  }
};

export default ResultadosBusqueda;