import { createStore as _createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import clientMiddleware from './clientMiddleware';
import ApiClient from '../utils/ApiClient';

const finalCreateStore = compose(
  applyMiddleware(clientMiddleware(new ApiClient()))
)(_createStore);

export default function createStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}
