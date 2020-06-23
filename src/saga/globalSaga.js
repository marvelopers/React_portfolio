
import { all, fork, call, put, takeEvery, delay } from "redux-saga/effects";

function* deleteRequestAction() {
  yield takeEvery("DELETE_REQUEST", deleteRequestActionSaga)
}

function* deleteRequestActionSaga(action) {

  yield put({ type: "SET_MODAL_DATA", payload: { isOpen: false, cardId: 0 } });
  console.log('모달 닫혔습니다.');
  yield delay(3000);
  console.log('3초 지났습니다.');
  yield put({ type: "DELETE_POST", payload: action.payload });
  console.log('카드 지웠습니다..');

}

function* testSaga() {
  console.log('testSaga');
}


export function* globalSaga() {
  // yield takeEvery("DELETE_REQUEST", deleteRequestActionSaga);
  // yield takeEvery("TEST", deleteRequestActionSaga);

  yield all([
    deleteRequestAction()
  ])
}