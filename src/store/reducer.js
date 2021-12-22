import { actions } from './actions'
import clone from 'ramda/src/clone';

const initState = { lists: {} };

const setList = () => (state, payload) => {
    const newState = clone(state);
    newState.lists[payload.id] = payload;
    return newState;
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actions.SET_LIST: return setList(state, action.payload);
        case actions.SET_LISTS: return { ...state, lists: action.payload };
        default: return state;
    }
}

export { reducer };



// home: { children: 'Home', to: 'home' },
// work: { children: 'Work', to: 'work' },
// need: { children: 'Need', to: 'need' },