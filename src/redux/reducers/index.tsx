import { combineReducers } from 'redux';
import getBlogReducer from './blogReducer';
import visibleElementReducer from './visibleElementReducer';

export default combineReducers({
  blogs: getBlogReducer,
  element: visibleElementReducer,
});
