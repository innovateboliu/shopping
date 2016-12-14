import { connect } from 'react-redux';
import { deleteItem } from '../actions';
import ItemUpdateModal from '../views/ItemUpdateModal';
const R = require('ramda');

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => {
      dispatch(deleteItem(id));
    }
  };
};

const ItemUpdate = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemUpdateModal);

export default ItemUpdate;
