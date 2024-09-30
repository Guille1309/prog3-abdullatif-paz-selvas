import React from "react";
import Header from "../../components/Header/Header";
import ResultadosBusqueda from "../../components/ResultadosBusqueda/ResultadosBusqueda";
import Footer from "../../components/Footer/Footer";
import './Resultados.css'

function Resultados(props){
    return(
        <React.Fragment>
            <Header/>
            <h1 className="tituloResultados">Resultados de búsqueda de {props.match.params.busqueda}...</h1>
            <ResultadosBusqueda busqueda={props.match.params.busqueda}/>
            <Footer/>
        </React.Fragment>
    )
};

export default Resultados;
