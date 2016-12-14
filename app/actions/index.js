let nextTodoId = 0;
export const toggleItem = (id, name) => {
  return {
    type: 'TOGGLE_ITEM',
    id,
    name
  }
};

export const toggleTodoItem = (id) => {
  return {
    type: 'TOGGLE_TODO_ITEM',
    id
  };
};

export const addItem = (name) => {
  return {
    type: 'ADD_ITEM',
    name: name,
    id: name.toLowerCase()
  };
};
