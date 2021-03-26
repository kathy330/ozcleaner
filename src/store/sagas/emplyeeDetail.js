
import {call,put,takeEvery} from 'redux-saga/effects'
import axios from 'axios'
import actionTypes from "../actions/actionTypes"


// import API from our API folder, this just is a example
const ID = 1
const gitApi = `http://localhost:8000/employees/alltask/${ID}`

function* fetchRegularUrl() {
  // console.log(url)
  try{
    const data = yield call(axios.get, gitApi)
    // 两者名字必须一样
    // console.log(data,'data1')
    // put => action 
    yield put({type:actionTypes.GET_EMPLOYEE_SUCCESS,payload:data.data})
  }
  catch(e) {
    console.log(e)
    yield put({type:actionTypes.GET_EMPLOYEE_FAILED,payload:e})
  }
}

function* WatchEmployeeSaga() {
  yield takeEvery(actionTypes.GET_EMPLOYEE_REQUEST,fetchRegularUrl)
}

export default WatchEmployeeSaga