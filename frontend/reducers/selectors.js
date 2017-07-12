export const allTodos = state => {
  return Object.keys(state).map(id => state[id]);
};

export const filteredSteps = (state,todoId) => {
  let ans = [];
  for(let key in state){
    if(state[key].todo_id===todoId){
      ans.push(state[key]);
    }
  }
  return ans;
};
