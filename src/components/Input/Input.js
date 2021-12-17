import React from "react";

function Input() {
    return (
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Фильтровать"/>
            <button className="btn btn-outline-secondary" type="reset"><i className="bi bi-x-circle-fill"></i></button>
        </div>
    )
}

export default Input;