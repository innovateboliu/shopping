
const item = (state={}, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        id: action.id,
        name: action.name,
        inTodos: false
      };
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
    case 'ADD_ITEM':
      const added = state.some((element, index, arr) => element.id == action.id);
      return added ? state : [...state, item(undefined, action)];
    case 'ADD_TODO':
      return state.map(i =>
        item(i, action)
      );
    default:
      return state;
  }
};

export default historyItems;
