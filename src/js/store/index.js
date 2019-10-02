import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
// import { addArticle } from '../actions';
import { forbiddenWordsMiddleware } from '../middleware';
import thunk from 'redux-thunk';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, 
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
);

// store.subscribe(() => console.log('Look ma, Redux!!'));

// store.dispatch( addArticle({
//     title: 'React Redux',
//     id: 1
// }))

export default store;