import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {allTodos} from './reducers/selectors';
import {receiveTodos, receiveTodo, fetchTodos, createTodo} from './actions/todo_actions';
import Root from './components/root';



document.addEventListener('DOMContentLoaded',()=>{
  const store = configureStore();
  store.dispatch((dispatch)=>{
    console.log("If this prints out, the thunk middleware is working!");
  });
  window.store = store;
  window.allTodos = allTodos;
  window.fetchTodos = fetchTodos;
  window.createTodo = createTodo;
  ReactDOM.render(<Root store={store} />,document.getElementById('content'));
});
