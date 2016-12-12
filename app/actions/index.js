let nextTodoId = 0;
export const addTodo = (id, name) => {
  return {
    type: 'ADD_TODO',
    id,
    name
  }
};
