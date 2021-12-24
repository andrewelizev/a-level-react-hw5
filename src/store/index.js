import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducer as categoryReducer } from './categories/reducer';
import { reducer as newCategoryReducer } from './newCategory/index';

const rootReducer = combineReducers({
    categories: categoryReducer,
    newCategory: newCategoryReducer,
});

const enhancers = composeWithDevTools(
    applyMiddleware(thunk),
);

const store = createStore(rootReducer, enhancers);

export { store };