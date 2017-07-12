import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      errors: []
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.submitItem = this.submitItem.bind(this);
    this.changeBody = this.changeBody.bind(this);
  }

  changeTitle(event){
    this.setState({title: event.target.value});
  }

  changeBody(event){
    this.setState({body: event.target.value});
  }

  uniqueId() {
    return new Date().getTime();
  }

  submitItem(event){
    const todo = {};
    todo.title = this.state.title;
    todo.body = this.state.body;
    todo.done = false;
    this.props.createTodo({todo}).then(
      () => this.setState({
              title: "",
              body: ""
            })
    ).fail(errors => {
      console.log(errors);
      this.setState({errors: errors.errors});
    });

  }

  render() {
    return (
      <div>
        <h2>Add New Todo Item</h2>
        {console.log(this.state.errors)}
        {this.state.errors.map((error) => <li>{error}</li>)}
        <label>Title
          <input value={this.state.title} onChange={this.changeTitle}></input>
        </label>
        <label>Body
          <input value={this.state.body} onChange={this.changeBody}></input>
        </label>
        <button onClick={this.submitItem}>Add New Item</button>
      </div>
    );
  }
}

export default TodoForm;
