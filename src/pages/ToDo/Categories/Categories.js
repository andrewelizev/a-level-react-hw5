import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../../store/newCategory';
import AddNewCategoryItem from "../../../components/AddNewCategoryItem/AddNewCategoryItem";
import Button from "../../../components/Button/Button";
import Input from '../../../components/Input/Input';
import ToDoCategory from "../ToDoCategory/ToDoCategory";
import EditToDoCategory from "../ToDoCategory/EditToDoCategory";

function Categories() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    let categories =  useSelector(state => state.categories.categories);
    const isEdit = useSelector(state => state.editCategory)

    const isVisibleNewList = useSelector(state => state.newCategory.visible);
    const onShowNewCategoryForm = () => dispatch(toggle());

    // let categoriesFiltered;
    // const categoriesFiltered = categories.filter(elem => elem.title.includes(search))


    function onSearchCategory(event) {
        setSearch(event.target.value);
        categories = Object.keys(categories).filter(id => categories[id].title.includes(search))
        console.log('filtered: ', categories, 'search: ', search);
        // console.log(categories);


        // console.log('search categories: ', filterCategories);
        // categories.map((elem) => elem.title.includes(search));
    }

    function clearField(event) {
        setSearch('');
    }

    return (
        <>
            <div className="card">
                <Input onChange={onSearchCategory} onClick={clearField} value={search} />
                <div className="list-group">
                    {
                        Object.keys(categories).length > 0
                        ? Object.keys(categories).map((listId) => (
                                (isEdit.visible && listId === isEdit.id)
                                    ? <EditToDoCategory key={listId} children={categories[listId].title} id={listId}  />
                                    : <ToDoCategory key={listId} path={categories[listId].path} children={categories[listId].title} id={listId} />
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