import {
  GET_DATA_USERS_PENDDING,
  GET_DATA_USERS_SUCCESS,
  ADD_DATA_USERS_PENDDING,
  ADD_DATA_USERS_SUCCESS
} from "../constants/TableUserConstants";

const INIT_STATE = {
  users: {
    data: [],
    status: "loading"
  },
  addUser: {
    addedUser: [],
    status: "loading"
  }
};
export default (state = INIT_STATE, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case GET_DATA_USERS_SUCCESS: {
      let new_resource_success = Object.assign({}, newState.users);
      new_resource_success.data = action.payload;
      new_resource_success.status = "loaded";
      newState.users = new_resource_success;
      return newState;
    }
    case GET_DATA_USERS_PENDDING: {
      let new_resource_pending = Object.assign({}, newState.users);
      new_resource_pending.data = [];
      new_resource_pending.status = action.status;
      newState.users = new_resource_pending;
      return newState;
    }
    case ADD_DATA_USERS_SUCCESS: {
      let add_resource_success = Object.assign({}, newState.addUser);
      add_resource_success.addedUser = action.payload;
      add_resource_success.status = "loaded";
      newState.addUser = add_resource_success;
      return newState;
    }
    case ADD_DATA_USERS_PENDDING: {
      let add_resource_pending = Object.assign({}, newState.addUser);
      add_resource_pending.addedUser = [];
      add_resource_pending.status = action.status;
      newState.addUser = add_resource_pending;
      return newState;
    }
    default:
      return newState;
  }
};
