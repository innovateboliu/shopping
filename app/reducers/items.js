
const item = (state={}, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        id: action.id,
        name: action.name,
        completed: false,
        inTodos: false
      };
    case 'TOGGLE_ITEM':
      if (state.id != action.id) {
        return state;
      }
      return Object.assign({}, state, {
        inTodos: !state.inTodos
      })
    case 'TOGGLE_TODO_ITEM':
      if (state.id != action.id) {
        return state;
      }
      return Object.assign({}, state, {
        completed: !state.completed
      });
    case 'DELETE_ITEM':

    default:
      return state
  }
};

const items = (state=[], action) => {
  switch (action.type) {
    case 'INIT_STATE':
      return state;
    case 'ADD_ITEM':
      const added = state.some((element, index, arr) => element.id == action.id);
      return added ? state : [...state, item(undefined, action)];
    case 'TOGGLE_ITEM':
      return state.map(i =>
        item(i, action)
      );
    case 'TOGGLE_TODO_ITEM':
      return state.map(i =>
        item(i, action)
      );
    case 'DELETE_ITEM':
      return state.filter(item => item.id != action.id);
    default:
      return state;
  }
};

export default items;
