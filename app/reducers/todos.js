
const todo = (state={}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        name: action.name,
        completed: false
      };
    case 'TOGGLE_TODO_ITEM':
      if (state.id != action.id) {
        return state;
      }
      return Object.assign({}, state, {
        completed: !state.completed
      })
    default:
      return state
  }
};

const todos = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const added = state.some((element, index, arr) => element.id == action.id);
      return added ? state : [...state, todo(undefined, action)];
    case 'TOGGLE_TODO_ITEM':
      return state.map(i =>
        todo(i, action)
      );
    default:
      return state;
  }
};

export default todos;
