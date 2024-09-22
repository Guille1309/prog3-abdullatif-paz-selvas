import React, { Component } from "react";

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
        () => this.props.filtrarPeliculas(this.state.valorInput))
        
    }
    
    render(){
        return(
            <form onSubmit={(event)=>this.evitarSubmit()}>
                <input type="text" placeholder="escribir busqueda" onChange={(event)=>this.controladorCambios(event)} value={this.state.valorInput}/>
            </form>
        )
    }
};

export default Filtro;