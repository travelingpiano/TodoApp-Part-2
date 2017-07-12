import {connect} from 'react-redux';
import TodoList from './todo_list';
import {allTodos} from '../../reducers/selectors';
import {receiveTodo, removeTodo,fetchTodos,receiveTodos,createTodo} from '../../actions/todo_actions';

const mapStateToProps = state => ({
  todos: allTodos(state.todos),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  fetchTodos: (todos) => dispatch(fetchTodos(todos)),
  createTodo: (todo) => dispatch(createTodo(todo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
