import * as APIUtil from '../util/todo_api_util';
import {receiveErrors} from './error_actions';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const fetchTodos = () => dispatch => {
  return APIUtil.fetchTodos().then((todos)=>dispatch(receiveTodos(todos)));
};

export const createTodo = (todo) => dispatch => {
  return APIUtil.createTodo(todo).then(
    newtodo => dispatch(receiveTodo(newtodo)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const receiveTodos = todos =>({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = todo =>({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});
