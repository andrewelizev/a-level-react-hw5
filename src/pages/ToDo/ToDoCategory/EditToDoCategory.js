import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {editToggle, editSaveNewCategory} from "../../../store/editCategory/actions";

function EditToDoCategory(props) {
    const dispatch = useDispatch();
    const [saveCategory, setSaveCategory] = useState('');

    function onChange(event) {
        setSaveCategory(event.target.value);
    }

    function onCancel() {
        dispatch(editToggle(props.id));
    }

    function onSave() {
        dispatch(editSaveNewCategory(props.id, saveCategory))
    }

    return (
        <div className="input-group">
            <input onChange={onChange} type="text" className="form-control" placeholder={props.children} id={props.id} />
            <button onClick={onSave} className="btn btn-outline-secondary" type="button">Save</button>
            <button onClick={onCancel} className="btn btn-outline-secondary" type="button">Cancel</button>
        </div>
    )
}

export default EditToDoCategory;