import React from "react";
import Header from "../../components/Header/Header";
import ResultadosBusqueda from "../../components/ResultadosBusqueda/ResultadosBusqueda";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Resultados(props){
    return(
        <React.Fragment>
            <Header/>
            <ResultadosBusqueda busqueda={props.match.params.busqueda}/>
            <Footer/>
        </React.Fragment>
    )
};

export default Resultados;
