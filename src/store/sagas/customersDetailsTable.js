import {call,put,takeEvery} from 'redux-saga/effects'
import axios from 'axios'
 
function* fetchCusDetailTableUrl(action) {

  try{
    const apiUrl = `http://localhost:8000/users/alltask/${action.payload}`
    const users = yield call(axios.get, apiUrl)

    console.log(apiUrl)

    yield put({type:'GET_CUSDETAILTABLE_SUCCESS',users:users.data})
  }
  catch(e) {
    yield put({type:'GET_CUSDETAILTABLE_FAILED',message:e.message})
  }
}

function* CusDetailTableSaga() {
  yield takeEvery('GET_CUSDETAILTABLE_REQUEST',fetchCusDetailTableUrl)
}

export default CusDetailTableSaga