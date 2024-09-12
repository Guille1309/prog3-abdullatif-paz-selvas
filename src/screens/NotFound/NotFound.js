import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function NotFound() {
    return(
        <React.Fragment>
            <Header/>
            <h1>404 - Contenido inexistente</h1>
            <Footer/>
        </React.Fragment>
    )
};

export default NotFound;