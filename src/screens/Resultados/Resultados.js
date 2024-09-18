import React from "react";
import Header from "../../components/Header/Header";
import ResultadosBusqueda from "../../components/ResultadosBusqueda/ResultadosBusqueda";
import Footer from "../../components/Footer/Footer";

function Resultados(props){
    return(
        <React.Fragment>
            <Header/>
            <ResultadosBusqueda/>
            <Footer/>
        </React.Fragment>
    )
};

export default Resultados;
