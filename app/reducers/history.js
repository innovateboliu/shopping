
const item = (state={}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      if (state.id != action.id) {
        return state;
      }
      return Object.assign({}, state, {
        inTodos: true
      })
    default:
      return state
  }
};

const historyItems = (state=[], action) => {
  switch (action.type) {
    case 'INIT_STATE':
      return state;
    case 'ADD_TODO':
      return state.map(i =>
        item(i, action)
      );
    default:
      return state;
  }
};

export default historyItems;
