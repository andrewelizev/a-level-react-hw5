import { BASE_URL } from '../../constants/index';
import { titleToUrl } from '../../store/newCategory/utils';
import {updateCategory} from "../categories/actions";

const actions = Object.freeze({
    EDIT_CATEGORY_TOGGLE: 'editCategory/editCategoryToggle',
    SAVE_CATEGORY: 'editCategory/saveNewCategory',
});

const editToggle = (payload) => ({ type: actions.EDIT_CATEGORY_TOGGLE, payload });

const editSaveNewCategory = (id, name) => (dispatch) => {
    // console.log('payload: ', id, name);

    const clearValue = name.trim();
    const newSaveCategory = {
        title: clearValue,
        path: titleToUrl(clearValue),
    }

    fetch(`${BASE_URL}categories/${id}.json`, {
        method: 'PATCH',
        body: JSON.stringify(newSaveCategory),
        })
        .then(res => res.json())
        .then((data) => {
            // console.log('data: ', data);
            dispatch(editToggle(id));
            dispatch(updateCategory({newSaveCategory, id}));
        });
};


// PATCH - частично обновляет запись
// const onClickPatch = () => {
//     service({ url: '/users', method: 'PATCH', data: { surname: 'Tamzarian' } })
//         .then((res) => {
//             console.log('[PATCH]', res);
//         })
// }

export { actions, editToggle, editSaveNewCategory }