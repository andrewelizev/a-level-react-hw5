import { actions } from './actions'
import clone from 'ramda/src/clone';
import {BASE_URL} from "../../constants";

const initState = { categories: {} };

const setNewCategory = (state, payload) => {
    // debugger
    const newState = clone(state);
    newState.categories[payload.id] = payload;
    return newState;
}

const showCategories = (state, payload) => {
    const newState = clone(state);
    console.log('state', state);
    // debugger;
    newState.map((elem) => {
        console.log('elem from map', elem);
        // return elem;
        return (elem.key !== payload) ? elem : null;
        // newState.categories[payload.id] = payload;
    });
    console.log('newState', newState);

    // console.log(temp);
    return newState;
}

const delCategory = (payload) => (dispatch) => {
    fetch(`${BASE_URL}categories/${payload}.json`, {
        method: 'DELETE',
        body: '',
    })
        .then(res => res.json())
        .then((data) => {
            console.log('payload', payload);
        });
}

const reducer = (state = initState, action) => {
    // debugger;
    switch (action.type) {
        case actions.SET_NEW_CATEGORY: return setNewCategory(state, action.payload);
        case actions.SET_CATEGORIES: return { ...state, categories: action.payload };
        case actions.DEL_CATEGORY: return delCategory(action.payload);
        case actions.SHOW_CATEGORIES: return showCategories(state, action.payload)
        default: return state;
    }
}

export { reducer };