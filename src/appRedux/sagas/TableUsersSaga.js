import { call, put, takeLatest } from "redux-saga/effects";
import {
  getDataUser,
  getDataUserSuccess,
  getDataUserPending,
  addDataUserSuccess,
  addDataUserPending,
  createDataUserSuccess,
  createDataUserPending
} from "../actions/TableUsersAction";
import {
  GET_DATA_USERS,
  ADD_DATA_USERS,
  CREATE_DATA_USERS
} from "../constants/TableUserConstants";
import { showAuthMessage } from "../../appRedux/actions/Auth";
import {
  getResourceRequest,
  addResourceRequest,
  createDataRequest
} from "../apis/TableUsersAPI";

function* handleGetDataUser(payload) {
  const { idUser } = payload;
  try {
    yield put(getDataUserPending("loading"));
    const getDataUserRes = yield call(getResourceRequest, idUser);
    // console.log(getDataUserRes);
    // getDataUserRes.forEach(
    //   doc => doc
    //   //   console.log(doc.id, "=>", doc.data().users);
    // );
    // if (!getDataUserRes.hasOwnProperty("status")) {
    //   if (
    //     getDataUserRes.response.status === 401 ||
    //     getDataUserRes.status === undefined
    //   ) {
    //     yield put(getDataUserPending("expired"));
    //   }
    // } else {
    // }
    yield put(getDataUserPending("expired"));
    yield put(getDataUserSuccess(getDataUserRes));
  } catch (error) {
    yield put(getDataUserPending("failed"));
    yield put(showAuthMessage(error));
  }
}
function* handleAddDataUser(payload) {
  const { users, email, password } = payload;

  try {
    yield put(addDataUserPending("loading"));
    const addDataUserRes = yield call(
      addResourceRequest,
      users,
      email,
      password
    );
    // console.log(addDataUserRes);
    if (addDataUserRes) {
      const createUserRes = yield call(
        createDataRequest,
        users,
        addDataUserRes
      );
      //   console.log(createUserRes);
    }

    // getDataUserRes.forEach(
    //   doc => doc
    //   //   console.log(doc.id, "=>", doc.data().users);
    // );
    // if (!getDataUserRes.hasOwnProperty("status")) {
    //   if (
    //     getDataUserRes.response.status === 401 ||
    //     getDataUserRes.status === undefined
    //   ) {
    //     yield put(getDataUserPending("expired"));
    //   }
    // } else {
    // }
    yield put(addDataUserPending("expired"));
    yield put(addDataUserSuccess(addDataUserRes));
  } catch (error) {
    yield put(addDataUserPending("failed"));
    yield put(showAuthMessage(error));
  }
}
// function* handleCreateDataUser(payload) {
//   const { users, userCred } = payload;
//   console.log(userCred);

//   try {
//     yield put(createDataUserPending("loading"));
//     const createUserRes = yield call(createDataRequest, users, userCred);
//     // getDataUserRes.forEach(
//     //   doc => doc
//     //   //   console.log(doc.id, "=>", doc.data().users);
//     // );
//     // if (!getDataUserRes.hasOwnProperty("status")) {
//     //   if (
//     //     getDataUserRes.response.status === 401 ||
//     //     getDataUserRes.status === undefined
//     //   ) {
//     //     yield put(getDataUserPending("expired"));
//     //   }
//     // } else {
//     // }
//     yield put(createDataUserPending("expired"));
//     yield put(createDataUserSuccess(createUserRes));
//   } catch (error) {
//     yield put(createDataUserPending("failed"));
//     yield put(showAuthMessage(error));
//   }
// }

export default function* rootSaga() {
  yield takeLatest(GET_DATA_USERS, handleGetDataUser);
  yield takeLatest(ADD_DATA_USERS, handleAddDataUser);
}
