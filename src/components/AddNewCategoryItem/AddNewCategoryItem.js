import React from "react";
import Button from "../Button/Button";
import { useDispatch, useSelector } from 'react-redux';
import { setNewCategory, hidden, saveNewCategory } from '../../store/newCategory';


function AddNewCategoryItem() {
    const dispatch = useDispatch();

    const onChangeNewCategory = (event) => dispatch(setNewCategory(event.target.value));
    const newCategory = useSelector(state => state.newCategory.value);

    const onDoneNewCategory = (event) => {
        event.preventDefault();
        dispatch(saveNewCategory());
    }

    const onCancelNewCategory = () => {
        dispatch(setNewCategory(''));
        dispatch(hidden());
    }

    return (
        <form>
            <input onChange={onChangeNewCategory} onCancel={onCancelNewCategory} type="text" value={newCategory} />
            <Button type='submit' onClick={onDoneNewCategory} children='Сохранить' />
            <Button type='reset' onClick={onCancelNewCategory} children='Отмена' />
        </form>
    )
}

export default AddNewCategoryItem;

