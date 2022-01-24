import React, { Component } from "react";

class Pokemon extends Component {
    render(){
        const {id, name, type, image, averageWeight: { value, measurementUnit}} = this.props.pokemon;
        return(
            <div className={id}>
                <h4>{name}</h4>
                <p>{type}</p>
                <p>Average weight: {`${value} ${measurementUnit}`}</p>
                <img src={image} alt={`Pokemon ${name}`} />
            </div>
        )
    }
}

export default Pokemon;