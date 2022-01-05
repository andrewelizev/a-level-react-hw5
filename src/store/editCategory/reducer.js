import { actions } from './actions'

const initState = {
    visible: false,
    id: '',
    name: '',
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actions.EDIT_CATEGORY_TOGGLE: return { ...state, visible: !state.visible, id: action.payload };
        case actions.SAVE_CATEGORY: return { ...state, visible: !state.visible, id: action.payload, name: action.payload.newCategory };
        default: return state;
    }
}

export { reducer };