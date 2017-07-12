import React from 'react';
import StepListItem from './step_list_item';
import StepForm from './step_form';

const StepList = (props) =>{
  console.log(props.steps);
  let todoId = 0;
  return (
    <div>
      <ul>
        {props.steps.map((step)=>{
          todoId = step.todo_id;
          return (<StepListItem key={step.id} step={step} removeStep={props.removeStep}/>);
        })

        }
      </ul>
      <StepForm receiveStep={props.receiveStep} todoId={todoId}/>
    </div>
);};

export default StepList;
