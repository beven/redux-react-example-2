import { ADD_ARTICLE, FOUND_BAD_WORD, DATA_LOADED } from '../constants/action-types';

export const addArticle = payload => {
    return {
        type: ADD_ARTICLE,
        payload
    }
}

export const addBadWordMessage = payload => {
    return {
        type: FOUND_BAD_WORD,
        payload
      }
}

export const getData = () => {
    return dispatch => {
        return fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            dispatch( {
                type: DATA_LOADED,
                payload: json
            });
        });
    };
}