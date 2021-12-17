import React from "react";

function Button(props) {
    return (
        <button className="btn btn-light">{props.children}</button>
    )
}

export default Button;