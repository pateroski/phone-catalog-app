import React, {Component} from 'react';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
import PhoneList from '../../components/PhoneList/PhoneList';
import Pagination from '../../components/Pagination/Pagination';
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

  render() {
    return (
      <Aux>
        <PhoneList
          phones={this.props.phones}
          selected={this.switchCatalogPage}
          clicked={this.showMorePhoneInfo}
        />
        <Pagination clicked={this.switchCatalogPage} />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    phones: state.phones,
    selectedPhone: state.selectedPhone,
    page: state.page,
    isLoading: state.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetPhones: page => dispatch(actions.getPhones(page)),
    onFilterPhoneById: id => dispatch(actions.filterPhoneById(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneListContainer);
