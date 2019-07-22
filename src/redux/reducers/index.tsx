import { combineReducers } from 'redux';
import blogReducer from './blogReducer';
import visibleElementReducer from './visibleElementReducer';

export default combineReducers({
  blogs: blogReducer,
  element: visibleElementReducer,
});
