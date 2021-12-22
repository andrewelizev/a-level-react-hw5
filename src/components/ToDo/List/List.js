import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../../store/newList';
import AddNewListItem from "../../AddNewListItem/AddNewListItem";
import Button from "../../Button/Button";
import Input from '../../Input/Input';
import ToDoCategory from "../ToDoCategory/ToDoCategory";

function List() {
    const lists = useSelector(state => state.todo.lists);
    const isVisibleNewList = useSelector(state => state.newList.visible);
    const dispatch = useDispatch();

    const onShowNewListForm = () => dispatch(toggle());

    return (
        <>
            <div className="card">
                <Input />
                <div className="list-group">
                    {
                        Object.keys(lists).map((listId) => (
                            <ToDoCategory key={listId} {...lists[listId]} />
                        ))
                    }
                    {isVisibleNewList && <AddNewListItem /> }
                </div>
                <Button onClick={onShowNewListForm} children='Новый список' />
            </div>

        </>
    )
}

export default List;