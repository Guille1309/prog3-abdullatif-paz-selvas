import React from "react";
import Header from "../../components/Header/Header";
import PeliculasProximas from "../../components/PeliculasProximas/PeliculaProximas";
import Footer from "../../components/Footer/Footer";
import Filtro from "../../components/Filtro/Filtro";

function VerProximas() {
    return(
        <React.Fragment>
            <Header/>
            <PeliculasProximas isHome={false}/>
            <Footer/>
        </React.Fragment>
    )
};

export default VerProximas;