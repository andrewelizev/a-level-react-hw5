import { BASE_URL } from '../../constants';

const actions = Object.freeze({
    SET_NEW_CATEGORY: 'categories/setNewCategory',
    SET_CATEGORIES: 'categories/setCategories',
    DEL_CATEGORY: 'categories/delCategory',
    SHOW_CATEGORIES: 'categories/showCategories',
    UPDATE_CATEGORY: 'categories/updateCategory',
});

const setNewCategory = (payload) => {
   // debugger;
   return ({ type: actions.SET_NEW_CATEGORY, payload })
};

const updateCategory = (payload) => ({ type: actions.UPDATE_CATEGORY, payload });

const setCategories = (payload) => ({ type: actions.SET_CATEGORIES, payload })

const loadCategories = () => (dispatch) => {
   fetch(`${BASE_URL}categories.json`)
      .then(res => res.json())
      .then(data => {
         // console.log('>>> action:', data);
         dispatch(setCategories(data || {}));
      })
}

const onDelCategory = (payload) => (dispatch) => {
   fetch(`${BASE_URL}categories/${payload}.json`, {
      method: 'DELETE',
      body: '',
   })
       .then(res => res.json())
       .then((data) => {
          dispatch({ type: actions.DEL_CATEGORY, payload });
       });
}



export { actions, setNewCategory, loadCategories, onDelCategory, updateCategory };