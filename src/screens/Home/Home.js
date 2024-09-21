import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PeliculasPopulares from "../../components/PeliculasPopulares/PeliculasPopulares";
import PeliculasProximas from "../../components/PeliculasProximas/PeliculaProximas";

function Home() {
    return(
        <React.Fragment>
            <Header/>
            <PeliculasPopulares/>
            <PeliculasProximas/>
            <Footer/>
        </React.Fragment>
    )
}
export default Home;