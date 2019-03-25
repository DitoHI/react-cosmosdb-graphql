import { combineReducers } from 'redux';
import getBlogReducer from './getBlogReducer';

export default combineReducers({
  blogs: getBlogReducer,
});
