import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import getHomeReducer from './getHomeReducer';

export default combineReducers({
  getHome: getHomeReducer,
});
