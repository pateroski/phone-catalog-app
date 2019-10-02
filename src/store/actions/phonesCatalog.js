import * as actionTypes from './actionTypes';
import axios from '../../axios-config';

export const getPhonesStart = () => {
  return {
    type: actionTypes.GET_PHONES_START
  };
};

export const getPhonesSuccess = phones => {
  return {
    type: actionTypes.GET_PHONES_SUCCESS,
    phones: phones
  };
};

export const getPhonesFailure = error => {
  return {
    type: actionTypes.GET_PHONES_FAILURE,
    error: error
  };
};

export const selectPhoneById = selectedPhone => {
  return {
    type: actionTypes.SELECT_PHONE_BY_ID,
    selectedPhone: selectedPhone
  };
};

export const getPhones = () => {
  return dispatch => {
    dispatch(getPhonesStart());

    axios
      .get('/phones')
      .then(response => dispatch(getPhonesSuccess(response.data)))
      .catch(err => dispatch(getPhonesFailure(err)));
  };
};

export const filterPhoneById = id => {
  return (dispatch, getState) => {
    const phones = getState().phones;
    const selectedPhone = phones.filter(phone => phone.id === id);
    dispatch(selectPhoneById(selectedPhone));
  };
};