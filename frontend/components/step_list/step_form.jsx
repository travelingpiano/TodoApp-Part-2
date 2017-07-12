import React from 'react';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.todoId = this.props.todoId;
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
    const step = {};
    step.id = this.uniqueId();
    step.title = this.state.title;
    step.body = this.state.body;
    step.todo_id = this.todoId;
    this.props.receiveStep(step);
    this.setState({
      title: "",
      body: ""
    });
  }

  render() {
    return (
      <div>
        <h4>Add New Step Item</h4>
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

export default StepForm;
