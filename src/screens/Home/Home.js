import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PeliculasPopulares from "../../components/PeliculasPopulares/PeliculasPopulares";
import PeliculasProximas from "../../components/PeliculasProximas/PeliculaProximas";
import BuscadorHome from "../../components/BuscadorHome/BuscadorHome";

function Home() {
    return(
        <React.Fragment>
            <Header/>
            <BuscadorHome/>
            <PeliculasPopulares isHome={true}/>
            <PeliculasProximas isHome={true}/>
            <Footer/>
        </React.Fragment>
    )
}
export default Home;