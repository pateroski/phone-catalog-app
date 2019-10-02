import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
  phones: [],
  selectedPhone: null,
  isLoading: false
};

const getPhonesStart = (state, action) => {
  return updateObject(state, {
    isLoading: true
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

const selectPhoneByID = (state, action) => {
  return updateObject(state, {
    phone: action.phone
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
      return selectPhoneByID(state, action);

    default:
      return state;
  }
};

export default reducer;
