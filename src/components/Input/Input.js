import React from "react";

function Input(props) {

    return (
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Фильтровать" onChange={props.onChange} value={props.value} />
            <button className="btn btn-outline-secondary" type="reset" onClick={props.onClick} ><i className="bi bi-x-circle-fill"></i></button>
        </div>
    )
}

export default Input;