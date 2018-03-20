import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import rootReducer from '../reducers/';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const configureStore = (railsProps) => (
  createStoreWithMiddleware(rootReducer, railsProps)
);

export default configureStore;
