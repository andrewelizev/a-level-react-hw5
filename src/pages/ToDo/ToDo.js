import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Categories from './Categories/Categories'
import ListContent from './ListContent/ListContent'
import { loadCategories } from '../../store/categories/actions'

function ToDo() {
    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(loadCategories());
	}, [dispatch]);

    return (
        <div className="card-group">
            <Categories />
            <ListContent />
        </div>
    )
}

export default ToDo