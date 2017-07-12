import React from 'react';

class StepListItem extends React.Component {
  constructor({step, removeStep}) {
    super();
    this.step = step;
    this.removeStep = removeStep;
    this.stepUpdate = this.stepUpdate.bind(this);
    this.state = {
      done: "undo"
    };
  }



  stepUpdate(event) {
    if (this.state.done === "undo") {
      this.setState({
        done: "Done"
      });
    } else {
      this.setState({
        done: "undo"
      });
    }

  }


  render() {
    return (
    <li>
      {this.step.title}
      {this.step.body}
      <button onClick={this.stepUpdate}>{this.state.done}</button>
    </li>
  );}
}



export default StepListItem;
