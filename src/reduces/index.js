import { combineReducers } from 'redux';
import products from './products';
import itemEditing from './itemEditing';
import loading from './loading'
const appReducers = combineReducers({
  products,
  itemEditing,
  loading,
});
export default appReducers;