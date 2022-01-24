import React, { Component } from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component {
    render(){
        const { name, type, image, averageWeight: { value, measurementUnit}} = this.props.pokemon;
        return(
            <div>
                <h4>{name}</h4>
                <p>{type}</p>
                <p>Average weight: {`${value} ${measurementUnit}`}</p>
                <img src={image} alt={`Pokemon ${name}`} />
            </div>
        )
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        image: PropTypes.string,
        value: PropTypes.number,
        measurementUnit: PropTypes.string
    }).isRequired
}

export default Pokemon;