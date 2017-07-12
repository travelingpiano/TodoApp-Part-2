import React from 'react';
import StepListContainer from '../step_list/step_list_container';


class TodoDetailView extends React.Component{
  constructor({todo,removeTodo}){
    super();
    this.todo = todo;
    this.removeTodo = removeTodo;
    this.todoRemoved = this.todoRemoved.bind(this);
    this.showSteps = this.showSteps.bind(this);
  }

  todoRemoved(event) {
    this.removeTodo(this.todo);
  }

  showSteps() {
    return (
      <StepListContainer todoId={this.todo.id} />
    );
  }

  render(){
    return (
      <div>
        <label>
          {this.todo.body}
        </label>
        {this.showSteps()}
        <button onClick={this.todoRemoved}>Remove</button>
      </div>
    );
  }
}

export default TodoDetailView;
