import {call,put,takeEvery} from 'redux-saga/effects'
import axios from 'axios'



function* fetchStaffDetailTableUrl(action) {

  try{ 
    const apiUrl = `http://localhost:8000/employees/alltask/${action.payload}`
    const users = yield call(axios.get, apiUrl)
    console.log(apiUrl)

    yield put({type:'GET_STAFFDETAILTABLE_SUCCESS',users:users.data})
  }
  catch(e) {
    yield put({type:'GET_STAFFDETAILTABLE_FAILED',message:e.message})
  }
}

function* StaffDetailTableSaga() {
  yield takeEvery('GET_STAFFDETAILTABLE_REQUEST',fetchStaffDetailTableUrl)
}

export default StaffDetailTableSaga