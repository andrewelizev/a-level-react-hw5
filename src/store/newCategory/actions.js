import { BASE_URL } from '../../constants';
import { titleToUrl } from './utils';
// import { setNewCategory } from '../Categories/actions';

const actions = Object.freeze({
    SET_NEW_CATEGORY: 'newCategory/setNewCategory',
    VISIBLE: 'newCategory/visible',
    HIDDEN: 'newCategory/hidden',
    TOGGLE: 'newCategory/toggle',
});

const setNewCategory = (payload) => ({ type: actions.SET_NEW_CATEGORY, payload });

const visible = () => ({ type: actions.VISIBLE });

const hidden = () => ({ type: actions.HIDDEN });

const toggle = () => ({ type: actions.TOGGLE });

const saveNewCategory = () => (dispatch, getState) => {
    const clearValue = getState().newCategory.value.trim();
    const newCategory = {
        title: clearValue, // children
        path: titleToUrl(clearValue), // to
    }

    fetch(`${BASE_URL}categories.json`, {
        method: 'POST',
        body: JSON.stringify(newCategory),
    })
    .then(res => res.json())
    .then((data) => {
        newCategory.id = data.name;
        dispatch(setNewCategory(newCategory));
    });
}


export { actions, setNewCategory, visible, hidden, toggle, saveNewCategory }