import { ADD_ARTICLE, FOUND_BAD_WORD, DATA_LOADED } from "../constants/action-types";

const initialState = {
    articles: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ARTICLE:
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payload),
                message: null
            });
        case FOUND_BAD_WORD:
            return {
                ...state,
                message: 'There is a bad word: ' + action.payload
            };
        case DATA_LOADED:
            return {
                ...state,
                remoteArticles: action.payload
            }
        default:
            return state;
    }
};

export default rootReducer;