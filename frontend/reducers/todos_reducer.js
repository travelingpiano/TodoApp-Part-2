import merge from 'lodash/merge';
import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO} from '../actions/todo_actions';

const _defaultState = {};


const todosReducer = (state=_defaultState,action)=>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TODOS:
      let newstate = merge({},state);
      for (let i = 0; i < action.todos.length; i++) {
        newstate[action.todos[i].id] = action.todos[i];
      }
      return newstate;
    case RECEIVE_TODO:
      newstate = merge({},state);
      newstate[action.todo.id] = action.todo;
      return newstate;
    case REMOVE_TODO:
      newstate = merge({},state);
      delete newstate[action.todo.id];
      return newstate;
    default:
      return state;
  }
};

export default todosReducer;
