import {call,put,takeEvery} from 'redux-saga/effects'
import axios from 'axios'
 

const apiUrl = `http://localhost:8000/regular/1`



function* fetchCusDetailTableUrl() {

  try{
    const users = yield call(axios.get, apiUrl)

    console.log(users)
    yield put({type:'GET_CUSDETAILTABLE_SUCCESS',users:users})
  }
  catch(e) {
    yield put({type:'GET_CUSDETAILTABLE_FAILED',message:e.message})
  }
}

function* CusDetailTableSaga() {
  yield takeEvery('GET_CUSDETAILTABLE_REQUEST',fetchCusDetailTableUrl)
}

export default CusDetailTableSaga