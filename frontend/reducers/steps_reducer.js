import merge from 'lodash/merge';
import {RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP} from '../actions/step_actions';

const _defaultState = {};

const stepsReducer = (state=_defaultState,action)=>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_STEPS:
      let newstate = merge({},state);
      for (let i = 0; i < action.steps.length; i++) {
        newstate[action.steps[i].id] = action.steps[i];
      }
      return newstate;
    case RECEIVE_STEP:
      newstate = merge({},state);

      newstate[action.step.id] = action.step;
      console.log(newstate);
      return newstate;
    case REMOVE_STEP:
      newstate = merge({},state);
      delete newstate[action.step.id];
      return newstate;
    default:
      return state;
  }
};

export default stepsReducer;
