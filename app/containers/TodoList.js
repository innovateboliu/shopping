import { connect } from 'react-redux';
import { toggleTodoItem } from '../actions';
import TodoListView from '../views/TodoListView';
const R = require('ramda');


const mapStateToProps = (state) => {
  return {
    todos: state.items.filter((item) => item.inTodos).map(item => {
      return R.merge(item, {tapped: item.completed});
    })
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
