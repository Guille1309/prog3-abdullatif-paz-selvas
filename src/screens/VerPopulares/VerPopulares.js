import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PeliculasPopulares from "../../components/PeliculasPopulares/PeliculasPopulares";
import Filtro from "../../components/Filtro/Filtro";


function VerPopulares() {
    return(
        <React.Fragment>
            <Header />
            <PeliculasPopulares isHome={false}/>

            <Footer/>
        </React.Fragment>
    )
}
export default VerPopulares;