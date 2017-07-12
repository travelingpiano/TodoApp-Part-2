import { connect } from 'react-redux';
import StepList from './step_list';
import { filteredSteps } from '../../reducers/selectors';
import {receiveStep, removeStep} from '../../actions/step_actions';

const mapStateToProps = (state, { todoId }) => ({
  steps: filteredSteps(state.steps,todoId)
});

const mapDispatchToProps = dispatch => ({
  receiveStep: (step) => dispatch(receiveStep(step)),
  removeStep: (step) => dispatch(removeStep(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);
