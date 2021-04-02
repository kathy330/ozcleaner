import {call,put,takeEvery} from 'redux-saga/effects'
import axios from 'axios'
 

const apiUrl = `http://localhost:8000/employees/alltask/2222`



function* fetchStaffDetailTableUrl() {

  try{ 
    const users = yield call(axios.get, apiUrl)
    console.log(users)

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