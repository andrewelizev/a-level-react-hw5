import React from "react";
import { NavLink } from "react-router-dom";


function ToDoCategory(props) {
    const listStyles = 'list-group-item list-group-item-action';

    return (
        <NavLink to={props.to} className={listStyles}>{props.children}</NavLink>
    )
}

export default ToDoCategory;