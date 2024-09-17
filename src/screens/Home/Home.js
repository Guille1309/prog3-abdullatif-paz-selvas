import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PeliculasPopulares from "../../components/PeliculasPopulares/PeliculasPopulares";
import PeliculasCartelera from "../../components/PeliculasCartelera/PeliculasCartelera";

function Home() {
    return(
        <React.Fragment>
            <Header/>
            <h1>Películas populares</h1>
            <PeliculasPopulares/>
            <h1>Películas en carteleria</h1>
            <PeliculasCartelera/>
            <Footer/>
        </React.Fragment>
    )
}
export default Home;