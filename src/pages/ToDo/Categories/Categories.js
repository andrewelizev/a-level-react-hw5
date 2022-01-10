import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../../store/newCategory';
import AddNewCategoryItem from "../../../components/AddNewCategoryItem/AddNewCategoryItem";
import Button from "../../../components/Button/Button";
import Input from '../../../components/Input/Input';
import ToDoCategory from "../ToDoCategory/ToDoCategory";
import EditToDoCategory from "../ToDoCategory/EditToDoCategory";

function filterCategories(searchStr, categories) {
    // console.log('categories source >>>', categories)
    const newCategories = Object.entries(categories).reduce((result, elem) => {
        let newElem = elem[1].title.includes(searchStr) ? result.push(elem) : null // !!!!!!!!!!!!!!!!!!!!!!!!!
        // console.log('result >>>', result);
        return result
        }, []);

    const filteredCategories = newCategories.reduce((result, elem) => {
        result[elem[0]] = elem[1];
        return result;
    }, {});

    // const newCats = Object.keys(categories).reduce((result, catId) => {
    //     if(categories[catId].title.includes(searchStr)){
    //         result[catId] = categories[catId];
    //     }
    //
    //     return result;
    // }, {})

    // console.log('PRE FILTERED: ', newCategories);
    // console.log('FILTERED: ', filteredCategories);
    return filteredCategories;
}

function Categories() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    const categories =  useSelector(state => state.categories.categories);
    const isEdit = useSelector(state => state.editCategory)

    const isVisibleNewList = useSelector(state => state.newCategory.visible);
    const onShowNewCategoryForm = () => dispatch(toggle());


    function onSearchCategory(event) {
        setSearch(event.target.value);
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
                                // console.log('from render >>>', listId.path),
                                (isEdit.visible && listId === isEdit.id)
                                    ? <EditToDoCategory key={listId} children={filteredCategories[listId].title} id={listId} />
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