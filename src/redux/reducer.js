import { combineReducers } from 'redux';
import hello from '../modules/hello';
import auth from '../modules/auth';
import posts from '../modules/posts';

export default combineReducers({
  hello,
  auth,
  posts,
});
