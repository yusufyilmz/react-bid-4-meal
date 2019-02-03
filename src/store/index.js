
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunkMiddleware from 'redux-thunk';
import ReduxPromiseMiddleware from 'redux-promise';
import rootReducer from '../reducers';

let middlewares = [ReduxThunkMiddleware, ReduxPromiseMiddleware]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
  );

const store = createStore(
    rootReducer,
    enhancer
)

export default store;
