import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PeliculasPopulares from "../../components/PeliculasPopulares/PeliculasPopulares";
import PeliculasCartelera from "../../components/PeliculasCartelera/PeliculasCartelera";

function Home() {
    return(
        <React.Fragment>
            <Header/>
            <PeliculasPopulares/>
            <PeliculasCartelera/>
            <Footer/>
        </React.Fragment>
    )
}
export default Home;