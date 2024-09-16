import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../../screens/Home/Home";

let APIkey = "b704c3c0bb664614cb7d33ce45f904f3";

class ResultadosBusqueda extends Component{
    constructor(props){
        super(props);
        this.state = {
            busqueda: "",
            resultados: [],
            cargando: true
        }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&query=${this.state.busqueda}`)
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data);
            this.setState({
                resultados: data.content,
                cargando: false
            })
        })
        .catch((errors) => console.log(errors))
    }
    render(){
        return(
           <><Header/>
            <div>
            {this.state.cargando ?
            <img src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif" alt="Cargando..." className="gifCargando"/>
            :
            <div></div>
            }
            </div>
            <Footer/></>
        )
    }
};

export default ResultadosBusqueda;