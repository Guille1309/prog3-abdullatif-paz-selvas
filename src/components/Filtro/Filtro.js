import React, { Component } from "react";
import "./Filtro.css";

class Filtro extends Component{
    constructor(){
        super();
        this.state={
        }
    }
    evitarSubmit(event){
        event.preventDefault()
    }
    controladorCambios(event){
        this.setState({
            valorInput: event.target.value
        },
        () => console.log(this.state.valorInput))
        
    }
    
    render(){
        return(
            <form className="filtro" onSubmit={(event)=>this.evitarSubmit(event)}>
                <input type="text" placeholder="Buscar película" onChange={(event)=>this.controladorCambios(event)} value={this.state.valorInput}/>
            </form>
        )
    }
};

export default Filtro;