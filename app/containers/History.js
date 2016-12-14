import { connect } from 'react-redux';
import { toggleItem, addItem } from '../actions';
import HistoryView from '../views/HistoryView';
const R = require('ramda');

const mapStateToProps = (state) => {
  return {
    items: state.items.map(item => {
      return R.merge(item, {tapped: item.inTodos});
    })
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTagPress: (tag) => {
      dispatch(toggleItem(tag.id, tag.name));
    },
    onEndEditing: (event) => {
      if (event.nativeEvent.text != "") {
        dispatch(addItem(event.nativeEvent.text));
      }
    }
  };
};

const History = connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryView);

export default History;
