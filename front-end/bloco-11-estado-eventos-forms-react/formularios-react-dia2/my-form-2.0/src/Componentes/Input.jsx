import React, { Component } from "react";

class Input extends Component {
    render(){
        const { type, handleChange, name, value, label, maxlength} = this.props;
        return(
            <label> {label}
                <input required maxLength={maxlength} value={value} type={type} onChange={handleChange} name={name}></input>
            </label>
        )
    }
}

export default Input;