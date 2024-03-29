import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
  phones: [],
  selectedPhone: {},
  showDetail: false,
  page: 1,
  isLoading: false
};

const getPhonesStart = (state, action) => {
  return updateObject(state, {
    isLoading: true,
    page: action.page
  });
};

const getPhonesSuccess = (state, action) => {
  return updateObject(state, {
    phones: action.phones,
    isLoading: false
  });
};

const getPhonesFailure = (state, action) => {
  return updateObject(state, {
    isLoading: false
  });
};

const filterPhoneByID = (state, action) => {
  return updateObject(state, {
    selectedPhone: action.selectedPhone,
    showDetail: true
  });
};
const switchModal = (state, action) => {
  return updateObject(state, {
    showDetail: action.showDetail
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PHONES_START:
      return getPhonesStart(state, action);

    case actionTypes.GET_PHONES_SUCCESS:
      return getPhonesSuccess(state, action);

    case actionTypes.GET_PHONES_FAILURE:
      return getPhonesFailure(state, action);

    case actionTypes.SELECT_PHONE_BY_ID:
      return filterPhoneByID(state, action);

    case actionTypes.SWITCH_MODAL:
      return switchModal(state, action);

    default:
      return state;
  }
};

export default reducer;
