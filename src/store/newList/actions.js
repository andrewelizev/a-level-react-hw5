import { BASE_URL } from '../../constants';
import { titleToUrl } from './utils';
import { setList } from '../actions';

const actions = Object.freeze({
    SET_NEW_LIST: 'newList/set',
    VISIBLE: 'newList/visible',
    HIDDEN: 'newList/hidden',
    TOGGLE: 'newList/toggle',
});

const setNewList = (payload) => ({ type: actions.SET_NEW_LIST, payload });

const visible = () => ({ type: actions.VISIBLE });

const hidden = () => ({ type: actions.HIDDEN });

const toggle = () => ({ type: actions.TOGGLE });

const saveNewCategory = () => (dispatch, getState) => {
    const clearValue = getState().newList.value.trim();
    const newCategory = {
        children: clearValue,
        to: titleToUrl(clearValue),
    }

    fetch(`${BASE_URL}/category.json`, {
        method: 'POST',
        body: JSON.stringify(newCategory),
    })
    .then(res => res.json())
    .then((data) => {
        newCategory.id = data.name;
        dispatch(setList(newCategory));
    });
}


export { actions, setNewList, visible, hidden, toggle, saveNewCategory }