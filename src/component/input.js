import React from 'react';
import '../App.css'

const Input = ({title,name,value,inputType,placeholder,onChange}) => {
    return(
        <div className="form-group">
            <label for={name} className="form-label">{title}</label>       
            <input
                className="textboxs"
                id={name}
                name={name}
                type={inputType}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            ></input>
        </div>
    )
}
Input.defaultProps={
    inputType:'text'
}
export default Input;