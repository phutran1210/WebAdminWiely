import {
  GET_DATA_USERS,
  GET_DATA_USERS_SUCCESS,
  GET_DATA_USERS_PENDDING,
  ADD_DATA_USERS,
  ADD_DATA_USERS_SUCCESS,
  ADD_DATA_USERS_PENDDING,
  CREATE_DATA_USERS,
  CREATE_DATA_USERS_SUCCESS,
  CREATE_DATA_USERS_PENDDING
} from "../constants/TableUserConstants";

// action
export const getDataUser = idUser => {
  return {
    type: GET_DATA_USERS,
    idUser
  };
};
export const getDataUserSuccess = resource => {
  return {
    type: GET_DATA_USERS_SUCCESS,
    payload: resource
  };
};
export const getDataUserPending = status => {
  return {
    type: GET_DATA_USERS_PENDDING,
    status
  };
};
export const addDataUser = (users, email, password) => {
  return {
    type: ADD_DATA_USERS,
    users,
    email,
    password
  };
};
export const addDataUserSuccess = resource => {
  return {
    type: ADD_DATA_USERS_SUCCESS,
    payload: resource
  };
};
export const addDataUserPending = status => {
  return {
    type: ADD_DATA_USERS_PENDDING,
    status
  };
};
export const createDataUser = users => {
  return {
    type: CREATE_DATA_USERS,
    users
  };
};
export const createDataUserSuccess = resource => {
  return {
    type: CREATE_DATA_USERS_SUCCESS,
    payload: resource
  };
};
export const createDataUserPending = status => {
  return {
    type: CREATE_DATA_USERS_PENDDING,
    status
  };
};
