import { all } from "redux-saga/effects";
import authSagas from "./Auth";
import notesSagas from "./Notes";
import tableUsers from "./TableUsersSaga";

export default function* rootSaga(getState) {
  yield all([authSagas(), notesSagas(), tableUsers()]);
}
