import { connect } from 'react-redux';
import { addTodo } from '../actions';
import TodoListView from '../views/TodoListView';

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListView);

export default TodoList;
