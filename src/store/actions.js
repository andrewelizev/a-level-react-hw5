import { BASE_URL } from '../constants';

const actions = Object.freeze({
   SET_LIST: 'todo/setList',
   SET_LISTS: 'todo/setLists',
});

const setList = (payload) => ({ type: actions.SET_LIST, payload });

const setLists = (payload) => ({ type: actions.SET_LISTS, payload })

const loadLists = () => (dispatch) => {
   fetch(`${BASE_URL}/category.json`)
      .then(res => res.json())
      .then(data => {
         dispatch(setLists(data));
      })
}

export { actions, setList, loadLists };