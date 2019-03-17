import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const initialState = {};

const middleware = [reduxThunk];

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export { store };
