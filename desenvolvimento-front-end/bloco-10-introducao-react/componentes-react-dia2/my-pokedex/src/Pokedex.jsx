import React, { Component } from "react";
import Pokemon from "./Pokemon";
import PropTypes from 'prop-types';

class Pokedex extends Component {
    render(){
        const data = this.props.listPokemon;
        return(
            data.map((item) => {
                return (
                    <Pokemon pokemon={item} key={item.id}/>
                )
            })
        )
    }
}

Pokedex.propTypes = {
    listPokemon: PropTypes.array.isRequired
}

export default Pokedex;