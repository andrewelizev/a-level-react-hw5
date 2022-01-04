import React from "react";

function Button(props) {
    return (
        <button type={props.type} onClick={props.onClick} className="btn btn-light">{props.children}</button>
    )
}

export default Button;