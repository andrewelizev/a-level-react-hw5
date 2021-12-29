import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button/Button";
import {actions, delCategory, onDelCategory, showCategories} from '../../../store/categories/actions'

function ToDoCategory(props) {
    const listStyles = 'list-group-item list-group-item-action';
    const dispatch = useDispatch();

    function onClick() {
        dispatch(onDelCategory(props.id));
    }

    return (
        <div className='d-flex'>
            <NavLink className={listStyles} to={props.path} id={props.id}>{props.children}</NavLink>
            {/* <Button type='button' onClick={editCategory} children={<i className="bi bi-pencil"></i>} /> */}
            <Button type='button' onClick={onClick} children={<i className="bi bi-trash"></i>} />
        </div>
    )
}

export default ToDoCategory;