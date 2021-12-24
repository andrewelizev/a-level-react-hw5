import React from "react";
import { NavLink } from "react-router-dom";


function ToDoCategory(props) {
    const listStyles = 'list-group-item list-group-item-action';

    return (
        console.log('props ToDoCategory', props),
        <NavLink className={listStyles} to={props.path}>{props.children}</NavLink>
    )
}

export default ToDoCategory;
// {/* <NavLink to={props.path} className={listStyles}>{props.title}</NavLink> */}