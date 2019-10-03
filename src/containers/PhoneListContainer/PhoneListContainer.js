import React, {Component} from 'react';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
import PhoneList from '../../components/PhoneList/PhoneList';
import PhoneDetail from '../../components/PhoneDetail/PhoneDetail';
import Pagination from '../../components/Pagination/Pagination';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/Aux/Aux';

class PhoneListContainer extends Component {
  componentDidMount() {
    this.props.onGetPhones(this.props.page);
  }

  showMorePhoneInfo = (id, event) => {
    this.props.onFilterPhoneById(id);
  };

  switchCatalogPage = page => {
    this.props.onGetPhones(page);
  };

  closeDetail = showDetail => {
    this.props.onSwitchModal(showDetail);
  };

  render() {
    return (
      <Aux>
        <PhoneList
          phones={this.props.phones}
          selected={this.switchCatalogPage}
          clicked={this.showMorePhoneInfo}
        />
        <Pagination clicked={this.switchCatalogPage} />
        <Modal show={this.props.showDetail} modalClosed={this.closeDetail}>
          {<div>patata!</div>}
        </Modal>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    phones: state.phones,
    selectedPhone: state.selectedPhone,
    showDetail: state.showDetail,
    page: state.page,
    isLoading: state.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetPhones: page => dispatch(actions.getPhones(page)),
    onFilterPhoneById: id => dispatch(actions.filterPhoneById(id)),
    onSwitchModal: showDetail => dispatch(actions.switchModal(showDetail))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneListContainer);
