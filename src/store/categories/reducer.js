import { actions } from './actions'
import clone from 'ramda/src/clone';

const initState = { categories: {} };

const setNewCategory = () => (state, payload) => {
    const newState = clone(state);
    newState.categories[payload.id] = payload;
    return newState;
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actions.SET_NEW_CATEGORY: return setNewCategory(state, action.payload);
        case actions.SET_CATEGORIES: return { ...state, categories: action.payload };
        default: return state;
    }
}

export { reducer };