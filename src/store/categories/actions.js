import { BASE_URL } from '../../constants';


const actions = Object.freeze({
   SET_NEW_CATEGORY: 'categories/setNewCategory',
   SET_CATEGORIES: 'categories/setCategories',
});

const setNewCategory = (payload) => ({ type: actions.SET_NEW_CATEGORY, payload });

const setCategories = (payload) => ({ type: actions.SET_CATEGORIES, payload })

const loadCategories = () => (dispatch) => {
   fetch(`${BASE_URL}categories.json`)
      .then(res => res.json())
      .then(data => {
         console.log('>>>', data);
         dispatch(setCategories(data));
      })
}

export { actions, setNewCategory, loadCategories };