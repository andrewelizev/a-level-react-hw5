import {actions} from "../auth/actions";

const initState = {
    token: null,
    accessToken: null,
}

const setToken = (state, {token = null, accessToken = null} = {}) => ({
    ...state, token, accessToken,
})

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actions.SET_TOKEN: return setToken(state, action.payload);
        default: return state;
    }
}

export { reducer }