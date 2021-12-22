import React from "react";
import Button from "../Button/Button";
import { useDispatch, useSelector } from 'react-redux';
import { setNewList, hidden, saveNewCategory } from '../../store/newList';


function AddNewListItem() {
    const dispatch = useDispatch();

    const onChangeNewList = (event) => dispatch(setNewList(event.target.value));
    const newList = useSelector(state => state.newList.value);

    const onDoneNewList = (event) => {
        event.preventDefault();
        dispatch(saveNewCategory());
    }

    const onCancelNewList = () => {
        dispatch(setNewList(''));
        dispatch(hidden());
    }

    return (
        <form>
            <input onChange={onChangeNewList} onCancel={onCancelNewList} type="text" value={newList} />
            <Button type='submit' onClick={onDoneNewList} children='Сохранить' />
            <Button type='reset' onClick={onCancelNewList} children='Отмена' />
        </form>
    )
}

export default AddNewListItem;

