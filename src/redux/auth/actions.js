import {
  INCREMENT,
  DECREMENT,
  ADD_ITEM,
  DELETE_ITEM,
} from '../actions';

export const increment = (user) => ({
  type: INCREMENT,
  payload: user
});
export const decrement = (message) => ({
  type: DECREMENT,
  payload: { message }
});
export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: { item }
});
export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: { id }
});
