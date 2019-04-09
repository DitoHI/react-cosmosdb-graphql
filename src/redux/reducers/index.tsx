import { combineReducers } from 'redux';
import getBlogReducer from './getBlogReducer';
import visibleElementReducer from './visibleElementReducer';

export default combineReducers({
  blogs: getBlogReducer,
  element: visibleElementReducer,
});
