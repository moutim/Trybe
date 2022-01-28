import React, { Component } from "react";

class Input extends Component {
    render(){
        const { type, handleChange, name, value} = this.props;
        return(
            <input value={value} type={type} onChange={handleChange} name={name}></input>
        )
    }
}

export default Input;