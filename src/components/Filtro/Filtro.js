import React, { Component } from "react";

class Filtro extends Component{
    constructor(){
        super();
        this.state={
            valorInput: ""
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
            <form onSubmit={(event)=>this.evitarSubmit(event)}>
                <input type="text" placeholder="escribir busqueda" onChange={(event)=>this.controladosCambios} value={this.state.valorInput}/>
            </form>
        )
    }
};

export default Filtro;