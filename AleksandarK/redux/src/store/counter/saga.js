import { put, takeLatest } from "redux-saga/effects";
import { preformCounterReset, reset } from "./slice";

function* counterResetHandler() {
  try {
    yield put(reset());
  } catch (err) {
    console.log(err);
  }
}

export function* watchResetAction() {
  yield takeLatest(preformCounterReset.type, counterResetHandler);
}
