import { connect } from 'react-redux';
import { addTodo } from '../actions';
import HistoryView from '../views/HistoryView';

const mapStateToProps = (state) => {
  return {
    historyItems: state.historyItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTagPress: (tag) => {
      dispatch(addTodo(tag.id, tag.name));
    }
  };
};

const History = connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryView);

export default History;
