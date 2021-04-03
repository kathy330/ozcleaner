
import {call,put,takeEvery} from 'redux-saga/effects'
import axios from 'axios'
import actionTypes from "../actions/actionTypes"


// import API from our API folder, this just is a example
const ID = 2222


function* fetchRegularUrl() {
  // console.log(url)
  const gitApi = `http://localhost:8000/employees/alltask/${ID}`
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

function* updateEmployeeProfile(action) {
  const updateAPI = `http://localhost:8000/employees/${ID}`
  // console.log(url)
  try{
    const data = yield call(axios.put, updateAPI ,action.payload)
    // 两者名字必须一样
    // console.log(data,'data1')
    // put => action 
    yield put({type:'UPDATE_EMPLOYEE_SUCESS',payload:data.data})
  }
  catch(e) {
    console.log(e)
    yield put({type:'UPDATE_EMPLOYEE_FAILED',payload:e})
  }
}

function* WatchEmployeeSaga() {
  yield takeEvery(actionTypes.GET_EMPLOYEE_REQUEST,fetchRegularUrl)
  yield takeEvery(actionTypes.UPDATE_EMPLOYEE_REQUEST,updateEmployeeProfile)
}

export default WatchEmployeeSaga