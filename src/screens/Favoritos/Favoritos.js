import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MostrarFavoritos from "../../components/MostrarFavoritos/MostrarFavoritos";

function Home() {
    let storage = localStorage.getItem('Favoritos');
    let storageParseado = JSON.parse(storage);

    return(
        <React.Fragment>
            <Header/>
            <MostrarFavoritos pelisFav={storageParseado}/>
            <Footer/>
        </React.Fragment>
    )
}
export default Home;