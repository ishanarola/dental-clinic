import React from 'react'

const Button = (props) => {
    return (
        <button
            type={props.type ? props.type : "button"}
            className={props.className}
            disabled={props.disabled}
            onClick={props.onClick}
            >
            {props.text}
        </button >
    )
}
export default Button;
