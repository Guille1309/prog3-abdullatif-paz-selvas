import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

let APIkey = "b704c3c0bb664614cb7d33ce45f904f3";

class ResultadosBusqueda extends Component{
    constructor(props){
        super(props);
        this.state = {
            busqueda: "",
            resultados: []
        }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&query=${this.state.busqueda}`)
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data);
            this.setState({
                resultados: data.content
            })
        })
        .catch((errors) => console.log(errors))
    }
    render(){
        return(
           <><Header/>
            <div>

            </div>
            <Footer/></>
        )
    }
}