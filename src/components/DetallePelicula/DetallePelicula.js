import React, {Component} from "react";
let APIkey = "b704c3c0bb664614cb7d33ce45f904f3";


class DetallePelicula extends Component{
    constructor(props){
        super(props);
        this.state = {
            pelicula: [],
            id: this.props.id

        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=${APIkey}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((e) => console.log(e))
    }

    render(){
        return(
            <h1>hola</h1>
        )
    }

}

export default DetallePelicula;