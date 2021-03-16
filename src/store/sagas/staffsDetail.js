import {call,put,takeEvery} from 'redux-saga/effects'
import axios from 'axios'
 

const apiUrl = `http://localhost:8000/employees/2222`

function* fetchStaffDetailUrl() {
  try{
    const users = yield call(axios.get, apiUrl)

    console.log(users)
    yield put({type:'GET_STAFFDETAIL_SUCCESS',users:users.data})
 
  }
  catch(e) {
    yield put({type:'GET_STAFFDETAIL_FAILED',message:e.message})
  }
}

function* StaffDetailSaga() {
  yield takeEvery('GET_STAFFDETAIL_REQUEST',fetchStaffDetailUrl)
}

export default StaffDetailSaga