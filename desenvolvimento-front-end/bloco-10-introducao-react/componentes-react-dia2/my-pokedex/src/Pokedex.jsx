import React, { Component } from "react";
import Pokemon from "./Pokemon";

class Pokedex extends Component {
    render(){
        const data = this.props.listPokemon;
        return(
            data.map((item) => {
                return (
                    <Pokemon pokemon={item}/>
                )
            })
        )
    }
}

export default Pokedex;