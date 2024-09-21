import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PeliculasPopulares from "../../components/PeliculasPopulares/PeliculasPopulares";


function VerPopulares() {
    return(
        <React.Fragment>
            <Header/>
            <PeliculasPopulares/>
            <Footer/>
        </React.Fragment>
    )
}
export default VerPopulares;