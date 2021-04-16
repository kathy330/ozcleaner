import {call,put,takeEvery} from 'redux-saga/effects'
import axios from 'axios'
import header from "./header"

function* fetchCusDetailUrl(action) {

  try{
    const apiUrl = `http://localhost:8000/users/${action.payload}`
    const users = yield call(axios.get, apiUrl,header())

    yield put({type:'GET_CUSDETAIL_SUCCESS',users:users.data})
  }
  catch(e) {
    yield put({type:'GET_CUSDETAIL_FAILED',message:e.message})
  }
}

function* CusDetailSaga() {
  yield takeEvery('GET_CUSDETAIL_REQUEST',fetchCusDetailUrl)
}

export default CusDetailSaga