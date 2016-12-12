import { connect } from 'react-redux';
import { toggleTodoItem } from '../actions';
import TodoListView from '../views/TodoListView';

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTagPress: (tag) => {
      dispatch(toggleTodoItem(tag.id));
    }
  };
};

const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListView);

export default TodoList;
