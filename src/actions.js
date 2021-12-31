import { 
    CHANGE_SEARCH_FIELD,
    GET_CATS_PENDING,
    GET_CATS_SUCCESS,
    GET_CATS_FAILED
} from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

export const getCats = () => (dispatch) => {
    dispatch({ type: GET_CATS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => dispatch({ type: GET_CATS_SUCCESS, payload: users }))
    .catch(error => dispatch({ type: GET_CATS_FAILED, payload: error }));
};