import { ADD_ARTICLE } from '../constants/action-types';
import { addBadWordMessage } from '../actions'

const forbiddenWords = ['spam', 'money'];

export const forbiddenWordsMiddleware = ({ dispatch }) => {
  return next => {
      return action => {
          if(action.type === ADD_ARTICLE) {
            const foundWord = forbiddenWords.filter(word => action.payload.title.includes(word));
            if(foundWord.length) {
              return dispatch(addBadWordMessage(foundWord))
            }
          }
          return next(action);
      }
  }
};
