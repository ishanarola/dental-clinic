import React, { useState } from 'react';

const TextInput = (props) => {
    let [state, setState] = useState({
        error: ""
    })
    const validateInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        switch (name) {
            case "email":
                let validEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? "" : "Email format should be example@exam.com";
                setState({ ...state, error: validEmail })
                props.onChange(value, name, validEmail);
                break;

            case "password":
                let validPassword = value.match(/\s/g) ? "Password should not contain white space." : "";
                setState({ ...state, error: validPassword })
                props.onChange(value, name,validPassword);
                break;

            default:
                break;
        }
    }
    let { wrapperClass, type, children, placeholder, className, validate, name, value, onChange } = props;
    return (
        <div className={`input-group mb-3 " ${wrapperClass ? wrapperClass : ""}`}>
            <input
                className={`form-control ${className ? className : ""} ${state.error ? " is-invalid" : ""}`}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={validate ? (e) => validateInput(e) : (e) => onChange(e)}
            />
            {state.error && <span class="error invalid-feedback">{state.error}</span>}
            {
                !state.error &&
                children
            }
        </div>
    )
}
export default TextInput;
