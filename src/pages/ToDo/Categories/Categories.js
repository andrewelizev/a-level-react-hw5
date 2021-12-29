import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../../store/newCategory';
import AddNewCategoryItem from "../../../components/AddNewCategoryItem/AddNewCategoryItem";
import Button from "../../../components/Button/Button";
import Input from '../../../components/Input/Input';
import ToDoCategory from "../ToDoCategory/ToDoCategory";

function Categories() {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories);

    // console.log('categories', categories);

    const isVisibleNewList = useSelector(state => state.newCategory.visible);
    const onShowNewCategoryForm = () => dispatch(toggle());

    return (
        <>
            <div className="card">
                <Input />
                <div className="list-group">
                    {
                        Object.keys(categories).length > 0
                        ? Object.keys(categories).map((listId) => (
                              <ToDoCategory key={listId} path={categories[listId].path} children={categories[listId].title} id={listId} />
                        ))
                        : <ToDoCategory path={'todo'} children={'Nothing ToDo'} />
                    }
                    {isVisibleNewList && <AddNewCategoryItem /> }
                </div>
                <Button onClick={onShowNewCategoryForm} children='Новый список' />
            </div>

        </>
    )
}

export default Categories;


// {/* <ToDoCategory key={listId} {...categories[listId]} /> */}
// {/* <NavLink to={props.path} className={listStyles}>{props.title}</NavLink> */}