import { 
    CHANGE_SEARCH_FIELD,
    GET_CATS_PENDING,
    GET_CATS_SUCCESS,
    GET_CATS_FAILED
} from './constants';

const initialSearchState = {
    searchFieldText: ''
}

const initialCatsState = {
    loading: false,
    cats: [],
    error: ''
}

export const searchCats = (state = initialSearchState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, searchFieldText: action.payload };
        default:
            return state;
    }
};

export const getCats = (state = initialCatsState, action = {}) => {
    switch (action.type) {
        case GET_CATS_PENDING:
            return { ...state, loading: true };
        case GET_CATS_SUCCESS:
            return { ...state, loading: false, cats: action.payload };
        case GET_CATS_FAILED:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
