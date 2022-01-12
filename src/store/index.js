import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducer as categoryReducer } from './categories/reducer';
import { reducer as newCategoryReducer } from './newCategory/index';
import { reducer as editCategoryReducer } from './editCategory/reducer';
import { reducer as authReducer } from './auth/reducer';

const rootReducer = combineReducers({
    categories: categoryReducer,
    newCategory: newCategoryReducer,
    editCategory: editCategoryReducer,
    auth: authReducer,
});

const enhancers = composeWithDevTools(
    applyMiddleware(thunk),
);

const store = createStore(rootReducer, enhancers);

export { store };