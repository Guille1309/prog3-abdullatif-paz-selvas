import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DetallePelicula from "../../components/DetallePelicula/DetallePelicula";

function Detalle(props){
    return(
        <React.Fragment>
            <Header/>
            <DetallePelicula id={props.match.params.id}/>
            <Footer/>
        </React.Fragment>
    )
}

export default Detalle;