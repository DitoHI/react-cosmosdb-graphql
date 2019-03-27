import { applyMiddleware, compose, createStore } from 'redux';
import { default as thunk } from 'redux-thunk';
import { default as rootReducer } from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
  ),
);

export { store };
