import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PeliculasPopulares from "../../components/PeliculasPopulares/PeliculasPopulares";
import PeliculasProximas from "../../components/PeliculasProximas/PeliculaProximas";
import BuscadorHome from "../../components/BuscadorHome/BuscadorHome";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Home.css"

function Home() {
    return(
        <React.Fragment>
            <Header/>
            <BuscadorHome/>
            <PeliculasPopulares isHome={true}/>
            <Link to= "/peliculas/verTodas/populares" className= "verTodas">Ver todas </Link>
            <PeliculasProximas isHome={true}/>
            <Link to= "/peliculas/verTodas/proximas" className= "verTodas">Ver todas </Link>
            <Footer/>
        </React.Fragment>
    )
}

export default Home;