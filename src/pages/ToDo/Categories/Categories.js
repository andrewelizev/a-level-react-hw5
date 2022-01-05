import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../../store/newCategory';
import AddNewCategoryItem from "../../../components/AddNewCategoryItem/AddNewCategoryItem";
import Button from "../../../components/Button/Button";
import Input from '../../../components/Input/Input';
import ToDoCategory from "../ToDoCategory/ToDoCategory";
import EditToDoCategory from "../ToDoCategory/EditToDoCategory";

function filterCategories(searchStr, categories) {
    // const filteredCategories = Object.key(categories).reduce(id => categories[id].title.includes(searchStr))
    const filteredCategories = categories.filter(elem => elem.title.includes(searchStr))

    // Аргументы функции callback(previousValue, currentItem, index, arr):
    //
    // previousValue – последний результат вызова функции, он же «промежуточный результат».
    // currentItem – текущий элемент массива, элементы перебираются по очереди слева-направо.
    //     index – номер текущего элемента.
    //     arr – обрабатываемый массив.




    console.log('filtered: ', filteredCategories);
    return filteredCategories;
}

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
        // categories = Object.keys(categories).filter(id => categories[id].title.includes(search))
        // console.log('filtered: ', categories, 'search: ', search);
        // // console.log(categories);
        //
        //
        // // console.log('search categories: ', filterCategories);
        // // categories.map((elem) => elem.title.includes(search));
    }

    function clearField(event) {
        setSearch('');
    }

    const filteredCategories = filterCategories(search, categories);

    return (
        <>
            <div className="card">
                <Input onChange={onSearchCategory} onClick={clearField} value={search} />
                <div className="list-group">
                    {
                        Object.keys(filteredCategories).length > 0
                        ? Object.keys(filteredCategories).map((listId) => (
                                (isEdit.visible && listId === isEdit.id)
                                    ? <EditToDoCategory key={listId} children={filteredCategories[listId].title} id={listId}  />
                                    : <ToDoCategory key={listId} path={filteredCategories[listId].path} children={filteredCategories[listId].title} id={listId} />
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