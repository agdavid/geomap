import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import rootReducer from '../reducers/';
import thunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(createStore);

const configureStore = (railsProps) => (
  createStoreWithMiddleware(rootReducer, railsProps)
);

export default configureStore;
